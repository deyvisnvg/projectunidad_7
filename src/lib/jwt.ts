import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import env from '../config/env';

export const sign = (object: object) => {
    return jwt.sign(
        object,
        env.JWT_SECRET,
        { expiresIn: env.JWT_EXPIRES_IN }
    )
}

export const checkOwn = async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization || '';

    if (!authHeader) {
        return res.status(401).json({ error: 'access unauthorized' })
    }

    try {
        const bearerToken = authHeader.split(' ')[1]
        await verifyJwt(bearerToken, res);

        return next()
    } catch (error) {
        return res
            .status(403)
            .json({ error: 'access forbidden', error_message: error })
    }
}

function verifyJwt(token: string, res: Response) {
    return new Promise(function (resolve, reject) {
        jwt.verify(token, env.JWT_SECRET, (error, authData) => {
            if (error) {
                return res.status(401).json({ error: 'invalid token', error_message: error })
            }
            resolve(authData)
        })
    })
}