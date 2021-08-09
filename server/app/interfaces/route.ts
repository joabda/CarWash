import express = require('express');
import {RestMethods} from '../enums/http-methods';

export interface IRoute {
    controller: (req: express.Request, res: express.Response, next: express.NextFunction) => void;
    method: RestMethods;
    path: string;
};
