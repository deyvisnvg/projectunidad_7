import type { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { encryptPassword, matchPassword } from "../../lib/helpers";
import { dateFormatYMDTime } from "../../lib/date-utc";
import { sign } from "../../lib/jwt";

const prisma = new PrismaClient();

export const findAll = async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await prisma.user.findMany();

        res.status(200).json({
            ok: true,
            data: users,
        });
    } catch (error) {
        res.status(500).json({ ok: false, message: error });
    }
}

export const findId = async (req: Request, res: Response): Promise<void> => {
    try {
        const { params } = req;
        const { body } = req;

        console.log(body)

        const user = await prisma.user.findFirst({
            where: {
                id: parseInt(params.id)
            }
        });

        res.status(200).json({
            ok: true,
            data: user,
        });
    } catch (error) {
        res.status(500).json({ ok: false, message: error });
    }
}

export const addUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const data = req.body;

        data.date_born = dateFormatYMDTime(data.date_born);
        data.password = await encryptPassword(data.password);

        await prisma.user.create({ data });

        res.status(201).json({
            ok: true,
            message: "Usuario creado correctamente"
        })
    } catch (error) {
        res.status(500).json({ ok: false, message: error });
    }
}

export const login = async (req: Request, res: Response): Promise<void> => {
    try {
        let { email, password } = req.body;
        let context = {};
        let status = 400;

        const user = await prisma.user.findFirst({
            where: { email }
        });

        console.log(user)

        if (user) {
            const valid_pass = await matchPassword(password, user.password);

            if (valid_pass) {
                const token = sign({
                    id: user.id,
                    name: user.name,
                    email: user.email
                })
                status = 200;
                context = {
                    message: "successfully logged in",
                    user: {
                        name: user.name,
                        email: user.email,
                        token: token
                    }
                }
            } else {
                status = 401;
                context = {
                    error: "password is not correct",
                }
            }
        } else {
            status = 404;
            context = {
                error: "email has not be found",
            }
        }

        res.status(status).json(context);
    } catch (error) {
        res.status(500).json({ error });
    }
}

const generateToken = async (email: string, password: string) => {
    const user = await prisma.user.findFirst({
        where: { email: email }
    });
}