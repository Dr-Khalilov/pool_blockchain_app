import { ApplicationException } from './ApplicationException';

export class BadRequestException extends ApplicationException {
    constructor(public message = 'Bad request') {
        super(message, 400);
    }
}
