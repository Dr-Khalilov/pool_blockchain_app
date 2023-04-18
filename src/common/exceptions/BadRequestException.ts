import { HttpStatusCodes } from '../utils/httpStatusCodes';
import { ApplicationException } from './ApplicationException';

export class BadRequestException extends ApplicationException {
    constructor(message = 'Bad request', errors?: string[]) {
        super(message, HttpStatusCodes.BAD_REQUEST, errors);
    }
}
