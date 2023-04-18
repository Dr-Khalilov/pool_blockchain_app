import { HttpStatusCodes } from '../utils/httpStatusCodes';
import { ApplicationException } from './ApplicationException';

export class NotFoundException extends ApplicationException {
    constructor(message = 'Not found') {
        super(message, HttpStatusCodes.NOT_FOUND);
    }
}
