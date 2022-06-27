export class ApplicationException extends Error {
    public readonly message: string;
    public readonly status: number;

    constructor(message: string, status: number) {
        super(message);
        this.name = this.constructor.name;
        this.message = message || 'Something went wrong. Please try again';
        this.status = status || 500;
        Error.captureStackTrace(this, this.constructor);
    }
}
