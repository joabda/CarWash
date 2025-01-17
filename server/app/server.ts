import * as http from 'http';
import {inject, injectable} from 'inversify';
import {Application} from './app';
import Types from './types';

@injectable()
export class Server {
    private readonly appPort: number = 3000;
    private server: http.Server | undefined;

    constructor(
        @inject(Types.Application) private application: Application) { }

    init(): void {
      this.application.app.set('port', this.appPort);

      this.server = http.createServer(this.application.app);

      this.server.listen(this.appPort);
      this.server.on('error', (error: NodeJS.ErrnoException) => this.onError(error));
      this.server.on('listening', () => this.onListening());
    }

    private onError(error: NodeJS.ErrnoException): void {
      if (error.syscall !== 'listen') {
        throw error;
      }
      const bind: string = typeof this.appPort === 'string' ? 'Pipe ' + this.appPort : 'Port ' + this.appPort;
      switch (error.code) {
        case 'EACCES':
          console.error(`${bind} requires elevated privileges`);
          process.exit(1);
          break;
        case 'EADDRINUSE':
          console.error(`${bind} is already in use`);
          process.exit(1);
          break;
        default:
          throw error;
      }
    }

    private onListening(): void {
      if (this.server !== undefined) {
        const addr = this.server.address();
        // tslint:disable-next-line:no-non-null-assertion
        const bind: string = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr!.port}`;
        // tslint:disable-next-line:no-console
        console.log(`Listening on ${bind}`);
      }
    }
}
