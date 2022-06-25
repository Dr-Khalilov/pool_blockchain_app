import { ApplicationException } from './ApplicationException';

export class BadRequestException extends ApplicationException {
    constructor(public message: string) {
        super(message || 'Bad request', 400);
    }
}
