import type { Request, Response } from "express";

export const findAll = (req: Request, res: Response) => {
    res.send("hI");
}