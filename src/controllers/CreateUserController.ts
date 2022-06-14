import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';

export async function CreateProductController(
    request: Request,
    response: Response
) {
    const { name, email } = request.body;

    const product = await prismaClient.user.create({
        data: {
            name,
            email,
        },
    });

    return response.json(product);
}
