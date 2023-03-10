import type {  Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const findAll = async (req: Request, res: Response): Promise<void>=> {
    try {
        let songs = await prisma.song.findMany();

        res.status(200).json({
            ok: true,
            data: songs,
        });
    } catch (error) {
        res.status(500).json({ ok: false, message: error });
    }
};


export const findAllPublic = async (req: Request, res: Response): Promise<void>=> {
    try {
        let songs = await prisma.song.findMany({
            where: {
                estado: "publico",
            }
        });

        res.status(200).json({
            ok: true,
            data: songs,
        });
    } catch (error) {
        res.status(500).json({ ok: false, message: error });
    }
};


export const findById = async (req: Request, res: Response): Promise<void>=> {
    try {
        const { id } = req.params;
        const songs = await prisma.song.findFirst({where: { id: Number(id) }})

        res.status(200).json({
            ok: true,
            data: songs,
        });
    } catch (error) {
        res.status(500).json({ ok: false, message: error });
    }
};


export const crear = async (req: Request, res: Response): Promise<void>=> {
    try {
        const data = req.body;

        await prisma.song.create({ data });

        res.status(201).json({ ok:true, message: "Canción creada correctamente" });
    } catch (error) {
        res.status(500).json({ ok: false, message: error });
    }
};