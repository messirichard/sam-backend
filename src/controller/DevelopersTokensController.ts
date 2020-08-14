import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { DevelopersTokens } from "../entity/DevelopersTokens";

export const getAllDevelopersTokens = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const devtok = await getRepository(DevelopersTokens).find();
  return res.json(devtok);
};

export const getDevelopersTokens = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(DevelopersTokens).findOne(req.params.id);
  return res.json(results);
};

export const createDevelopersTokens = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newDevtok = await getRepository(DevelopersTokens).create(req.body);
  const results = await getRepository(DevelopersTokens).save(newDevtok);
  return res.json(results);
};

export const updateDevelopersTokens = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const devtokens = await getRepository(DevelopersTokens).findOne(req.params.id);
  if (devtokens) {
    getRepository(DevelopersTokens).merge(devtokens, req.body);
    const results = await getRepository(DevelopersTokens).save(devtokens);
    return res.json(results);
  }

  return res.json({ msg: "Not devtokens found" });
};

export const deleteDevelopersTokens = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(DevelopersTokens).delete(req.params.id);
  return res.json(results);
};
