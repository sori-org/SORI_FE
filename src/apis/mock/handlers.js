import { recordHandlers } from './recordHandlers.js';
import {myPageHandlers} from "./myPageHandlers.js";

export const handlers = [
    ...recordHandlers,
    ...myPageHandlers,
];
