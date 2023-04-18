import { NextFunction, Request, Response } from 'express';
import { validate, ValidationError } from 'class-validator';
import { ClassConstructor, plainToInstance } from 'class-transformer';
import { BadRequestException } from '../exceptions/BadRequestException';

export const validationQueryParams = <T extends object>(
    classInstance: ClassConstructor<T>,
) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const convertedObject = plainToInstance(classInstance, req.query);
        await validate(convertedObject).then((errors: ValidationError[]) => {
            if (errors.length > 0) {
                const rawErrors = errors
                    .map((error: ValidationError) =>
                        Object.values(error.constraints ?? []),
                    )
                    .flat(2);

                next(
                    new BadRequestException(
                        'Query validation failed!',
                        rawErrors,
                    ),
                );
            }
        });
        next();
    };
};
