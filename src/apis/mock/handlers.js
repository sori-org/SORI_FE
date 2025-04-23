import { recordHandlers } from './recordHandlers.js';
import {userHandlers} from "./userHandlers.js";
import {storeHandlers} from "./storeHandlers.js";

export const handlers = [
    ...recordHandlers,
    ...userHandlers,
    ...storeHandlers,
];
