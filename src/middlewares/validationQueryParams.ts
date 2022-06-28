import { NextFunction, Request, RequestHandler, Response } from 'express';
import { validate, ValidationError } from 'class-validator';
import { plainToInstance } from 'class-transformer';
import { BadRequestException } from '../exceptions/BadRequestException';

export const validationQueryParams = <T>(type): RequestHandler => {
    return ({ query }: Request, res: Response, next: NextFunction): void => {
        validate(plainToInstance(type, query)).then(
            (errors: ValidationError[]) => {
                if (errors.length > 0) {
                    const message = errors
                        .map((error: ValidationError) =>
                            Object.values(error.constraints),
                        )
                        .join(', ');
                    next(new BadRequestException(message));
                } else {
                    next();
                }
            },
        );
    };
};
