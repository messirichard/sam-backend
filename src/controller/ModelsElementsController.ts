import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { ModelsElements } from "../entity/ModelsElements";

export const getAllModelsElements = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const modelelm = await getRepository(ModelsElements).find();
  return res.json(modelelm);
};

export const getModelsElements = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(ModelsElements).findOne(req.params.id);
  return res.json(results);
};

export const createModelsElements = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newModelElm = await getRepository(ModelsElements).create(req.body);
  const results = await getRepository(ModelsElements).save(newModelElm);
  return res.json(results);
};

export const updateModelsElements = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const modelelms = await getRepository(ModelsElements).findOne(req.params.id);
  if (modelelms) {
    getRepository(ModelsElements).merge(modelelms, req.body);
    const results = await getRepository(ModelsElements).save(modelelms);
    return res.json(results);
  }

  return res.json({ msg: "Not modelelms found" });
};

export const deleteModelsElements = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(ModelsElements).delete(req.params.id);
  return res.json(results);
};
