import { Component, ViewChild } from '@angular/core';
import { ContactInfo } from 'src/app/interfaces/contact-infos';
import { DataService } from 'src/app/services/data/data.service';
import { NgForm } from '@angular/forms';
import { ContactUsForm } from 'src/app/interfaces/form';
import { ContactUsJSON } from 'src/app/interfaces/json/contact-us';
import * as _info from '../../../assets/data/contact-info.json'
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {

  emailRegEx: RegExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  info = (_info as any).default[0] as ContactInfo;
  text: ContactUsJSON;
  currentValues: ContactUsForm = {
    name: "",
    email: "",
    message: "",
    phone: "",
    reason: ""
  };

  @ViewChild(NgForm, { static: true }) public form: NgForm;

  constructor(private snacks: MatSnackBar, private data: DataService, private http: HttpClient) {
    this.text = data.getContactUs();
  }

  send(): void {
    try {
      if (this.valid()) {
        this.http.post(`https://docs.google.com/forms/d/e/1FAIpQLSdWunQHmnM61P6O6zFwgUGdaD2P9w7sCeFOf2WF0DHcSrCoDw/formResponse?` +
          this.getURLData(),
          {}
        )
        .subscribe(res => this.openSnack(this.text.thanks));
      }
    } catch (e) {
      this.openSnack(this.text.errorSending);
    }
  }

  private valid(): boolean {
    return (
      this.currentValues.name.length != 0 &&
      this.currentValues.email.length != 0 &&
      this.emailRegEx.test(this.currentValues.email) &&
      this.currentValues.phone.length != 0 &&
      this.currentValues.message.length != 0
    );
  }

  private getURLData(): string {
    return `entry.2005620554=${this.currentValues.name}` +
      `&entry.1045781291=${this.currentValues.email}` +
      `&entry.1166974658=${this.currentValues.phone}` +
      `&entry.869220751=${this.currentValues.reason}` +
      `&entry.839337160=${this.encodeUTF8(this.currentValues.message)}`
      ;
  }

  private encodeUTF8(text: string): string {
    if (typeof text != 'string') {
      throw new TypeError('Param is not a string');
    }
    return text.replace(
      /[\u0080-\u07ff]/g,  // U+0080 - U+07FF => 2 bytes 110yyyyy, 10zzzzzz
      c => {
        const cc = c.charCodeAt(0);
        return String.fromCharCode(0xc0 | cc >> 6, 0x80 | cc & 0x3f);
      }
    )
      .replace(
        /[\u0800-\uffff]/g,  // U+0800 - U+FFFF => 3 bytes 1110xxxx, 10yyyyyy, 10zzzzzz
        c => {
          const cc = c.charCodeAt(0);
          return String.fromCharCode(0xe0 | cc >> 12, 0x80 | cc >> 6 & 0x3F, 0x80 | cc & 0x3f);
        }
      )
      .replace(/\s/g, '+');
  }

  private openSnack(message: string): void {
    this.snacks.open(
      message,
      "",
      {
        duration: 3000,
        verticalPosition: "bottom",
        horizontalPosition: "center"
      }
    );
  }
}
