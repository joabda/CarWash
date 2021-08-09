import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as cors from 'cors';
import * as express from 'express';
import * as logger from 'morgan';
import * as swaggerDoc from 'swagger-jsdoc';
import * as swaggerUI from 'swagger-ui-express';
import { injectable } from 'inversify';

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Rent It API',
      description: 'NodeJS server for the Rent It platform',
      version: '0.0.1',
    },
  },
  apis: [
    process.cwd() + '/app/controllers/*.ts',
  ],
};

const swagDoc = swaggerDoc(swaggerOptions);

@injectable()
export class Application {
  private readonly internalError: number = 500;
  app: express.Application;

  constructor(
    // @inject(Types.UserController) private userController: UserController,
  ) {
    this.app = express();

    this.middlewareConfigurations();

    this.setupRoutes();
  }

  setupRoutes(): void {
    // Add all routes in here
    // this.app.use(this.userController.prefix, this.userController.routeManager);
    // this.app.use(this.gameController.prefix,  this.gameController.routeManager);
    // this.app.use(this.chatController.prefix,  this.chatController.routeManager);
    // this.app.use(this.timerController.prefix, this.timerController.routeManager);

    this.errorHandling();
  }

  private middlewareConfigurations(): void {

    // Basic Middlewares
    this.app.use(logger('dev'));
    this.app.use(bodyParser.json({ limit: '5mb' }));
    this.app.use(bodyParser.urlencoded({ extended: true, limit: '5mb', parameterLimit: 1000000 }));
    this.app.use(cookieParser());
    this.app.use(cors());

    // URL for the swagger UI documentation
    this.app.use('/api', swaggerUI.serve, swaggerUI.setup(swagDoc));

    // Static route URL for the angular assets
    this.app.use(express.static('public'));
  }

  private errorHandling(): void {
    // Error message when route is not found
    this.app.use((_req: express.Request, _res: express.Response, next: express.NextFunction) => {
      const err: Error = new Error('Not Found');
      next(err);
    });


    // Print all the called functions before crash
    if (this.app.get('env') === 'development') {
      // tslint:disable-next-line:no-any
      this.app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
        res.status(err.status || this.internalError);
        res.send({
          message: err.message,
          error: err,
        });
      });
    }

    // tslint:disable-next-line:no-any
    this.app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
      res.status(err.status || this.internalError);
      res.send({
        message: err.message,
        error: {},
      });
    });
  }
}
