import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Vcodes } from "../entity/Vcodes";

export const getAllVcodes = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const vcode = await getRepository(Vcodes).find();
  return res.json(vcode);
};

export const getVcodes = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(Vcodes).findOne(req.params.id);
  return res.json(results);
};

export const createVcodes = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newVcode = await getRepository(Vcodes).create(req.body);
  const results = await getRepository(Vcodes).save(newVcode);
  return res.json(results);
};

export const updateVcodes = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const vcodes = await getRepository(Vcodes).findOne(req.params.id);
  if (vcodes) {
    getRepository(Vcodes).merge(vcodes, req.body);
    const results = await getRepository(Vcodes).save(vcodes);
    return res.json(results);
  }

  return res.json({ msg: "Not vcodes found" });
};

export const deleteVcodes = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(Vcodes).delete(req.params.id);
  return res.json(results);
};
