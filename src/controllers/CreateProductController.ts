import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';

export async function CreateProductController(
    request: Request,
    response: Response
) {
    const { name, bar_code, price } = request.body;

    const product = await prismaClient.product.create({
        data: {
            bar_code,
            name,
            price,
        },
    });

    return response.json(product);
}
