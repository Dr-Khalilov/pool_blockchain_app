import { ApplicationException } from './ApplicationException';

export class BadRequestException extends ApplicationException {
    constructor(message = 'Bad request') {
        super(message, 400);
    }
}
