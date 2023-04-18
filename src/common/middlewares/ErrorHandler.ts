import { NextFunction, Request, Response } from 'express';
import { ApplicationException } from '../exceptions/ApplicationException';

export class ErrorHandler {
    static errorHandler = async (
        err: Error,
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<Response | ApplicationException> => {
        if (err instanceof ApplicationException) {
            return res.status(err.status).send({
                status: err.status,
                message: err.message,
                errors: err.errors,
            });
        } else {
            return new ApplicationException();
        }
    };

    static initializeUnhandledException = (): void => {
        process.on(
            'unhandledRejection',
            (reason: Error, promise: Promise<unknown>) => {
                if (reason instanceof ApplicationException) {
                    console.error({
                        name: reason.name,
                        message: reason.message,
                        errors: reason.errors,
                    });
                    console.error('UNHANDLED REJECTION! 💥 Shutting down...');
                    throw reason;
                } else {
                    console.error({
                        name: reason.name,
                        message: reason.message,
                    });
                    console.error('UNHANDLED REJECTION! 💥 Shutting down...');
                    throw reason;
                }
            },
        );

        process.on('uncaughtException', (err: Error) => {
            console.error({
                name: err.name,
                message: err.message,
            });

            console.error('UNCAUGHT EXCEPTION! 💥 Shutting down...');

            process.exit(1);
        });
    };
}
