import { Router } from 'express';
import { injectable } from 'inversify';
import { RestMethods } from '../enums/http-methods';
import { IRoute } from '../interfaces/route';

/**
 * @abstract class of all the server's controllers
 */
@injectable()
export abstract class AbstractController {

    routeManager: Router;
    prefix: string;
    protected routes: Array<IRoute>;

    constructor() {
        this.routeManager = Router();
        this.prefix = '';
        this.routes = new Array<IRoute>();
    }

    abstract getRoutes(): Array<IRoute>;

    /**
     * Function to setup all the routes in the router,
     *  these routes has been supplied through the routes attribute
     *  in the form of an array of Routes. 
     */
    setupRoutes(): void {
        for (const route of this.getRoutes()) {
            switch (route.method) {
                case RestMethods.DELETE:
                    this.routeManager.delete(route.path, route.controller);
                    break;
                case RestMethods.GET:
                    this.routeManager.get(route.path, route.controller);
                    break;
                case RestMethods.POST:
                    this.routeManager.post(route.path, route.controller);
                    break;
                case RestMethods.PUT:
                    this.routeManager.put(route.path, route.controller);
                    break;
                default:
                    console.error('Invalid HTTP method.')
                    break;
            };
        }

    }

}
