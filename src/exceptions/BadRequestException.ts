import { ApplicationException } from '@src/exceptions/ApplicationException';

export class BadRequestException extends ApplicationException {
    constructor(message = 'Bad request') {
        super(message, 400);
    }
}
