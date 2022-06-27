import { NextFunction, Request, RequestHandler, Response } from 'express';
import { validate, ValidationError } from 'class-validator';
import { plainToInstance } from 'class-transformer';
import { BadRequestException } from '@src/exceptions/BadRequestException';

export const validationQueryParams = async <T>(
    type,
): Promise<RequestHandler> => {
    return async (
        { query }: Request,
        res: Response,
        next: NextFunction,
    ): Promise<void> => {
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
