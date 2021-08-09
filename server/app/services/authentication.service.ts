// import { inject, injectable } from "inversify";
// import { QueryResult } from "pg";
// import { DatabaseService } from "../database/database.service";
// import { HTTPCodes } from "../enums/http-codes";
// import { Tables } from "../enums/tables";
// import Types from '../types';

// @injectable()
// export class AuthenticationService {

//     private readonly MIN_PASSWORD_SIZE: number = 8;
//     private readonly MAX_PASSWORD_SIZE: number = 50;
//     private readonly MIN_LENGTH_NAMES: number = 2;
//     private readonly MAX_LENGTH_NAMES: number = 50;

//     constructor(
//         @inject(Types.DBS) public database: DatabaseService
//     ) {

//     }

//     // async register(user: IRegisterUser): Promise<HTTPCodes> {
//     //     let ret: HTTPCodes = HTTPCodes.Forbidden;
//     //     if (this.validateRegister(user) !== 0)
//     //         return ret;
//     //     await this.database.pool.query(`SELECT * FROM ${Tables.Users} WHERE email=$1;`, [
//     //         user.email
//     //     ]).then((res: QueryResult) => {
//     //         if (res.rowCount >= 1)
//     //             ret = HTTPCodes.Conflict;
//     //         else {
//     //             ret = HTTPCodes.OK;
//     //             this.database.pool.query(`INSERT INTO ${Tables.Users} VALUES($1, crypt($2, gen_salt('bf')), $3, $4);`, [
//     //                 user.email,
//     //                 user.password,
//     //                 user.firstName,
//     //                 user.lastName,
//     //             ])
//     //                 .catch(() => ret = HTTPCodes.NotFound);
//     //         }
//     //     }).catch(() => ret = HTTPCodes.NotFound);
//     //     return ret;
//     // }

//     // async login(email: string, password: string): Promise<string | undefined> {
//     //     let token: string | undefined = undefined;
//     //     if (!this.validatePassword(password))
//     //         return undefined;
//     //     await this.database.pool.query(`SELECT * FROM ${Tables.Users} WHERE email=$1 AND password=crypt($2, password);`, [
//     //         email,
//     //         password
//     //     ])
//     //         .then((res: QueryResult) => {
//     //             token = res.rowCount === 1 ? JWTService.sign(email) : undefined
//     //         })
//     //         .catch(() => token = undefined);
//     //     return token;
//     // }

//     // private validateRegister(user: IRegisterUser): number {

//     //     // Test First Name
//     //     if (user.firstName.length < this.MIN_LENGTH_NAMES
//     //         || user.firstName.length > this.MAX_LENGTH_NAMES)
//     //         return 1;

//     //     // Test Last Name
//     //     if (user.lastName.length < this.MIN_LENGTH_NAMES
//     //         || user.lastName.length > this.MAX_LENGTH_NAMES)
//     //         return 2;

//     //     // Test Password
//     //     if (!this.validatePassword(user.password))
//     //         return 3;

//     //     // Test Email
//     //     // if (!(new RegExp(
//     //     //     ``)
//     //     //     .test(user.email)))
//     //     //     return 5;
//     //     return 0;
//     // }

//     // private validatePassword(password: string): boolean {
//     //     return (new RegExp(`^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{${this.MIN_PASSWORD_SIZE},${this.MAX_PASSWORD_SIZE}})`))
//     //         .test(password);
//     // }
// }
