import { Container } from 'inversify';
import { Application } from './app';
import { DatabaseService } from './database/database.service';
import { Server } from './server';
import Types from './types';

const container: Container = new Container();

container.bind(Types.Server).to(Server);
container.bind(Types.Application).to(Application);

// Controller
// container.bind(Types.UserController).to(UserController);

// Database
container.bind(Types.DBS).to(DatabaseService).inSingletonScope();

// Service
// container.bind(Types.Auth).to(AuthenticationService).inSingletonScope();

export { container };
