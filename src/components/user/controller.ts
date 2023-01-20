import type { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { encryptPassword, matchPassword } from "../../helpers";
import { dateFormatYMDTime } from "../../date-utc";

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
        const data = req.body;
        let message_value = "Usuario o password incorrecto";

        const user = await prisma.user.findFirst({
            where: {
                email: data.email
            }
        });

        if (user) {
            const valid_pass = await matchPassword(data.password, user.password);

            if (valid_pass) {
                message_value = "Logueado correctamente";
            }
        }

        res.status(200).json({
            ok: true,
            data: message_value
        });

    } catch (error) {
        res.status(500).json({ ok: false, message: error });
    }
}