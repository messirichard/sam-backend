import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Models } from "../entity/Models";

export const getAllModels = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const model = await getRepository(Models).find();
  return res.json(model);
};

export const getModels = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(Models).findOne(req.params.id);
  return res.json(results);
};

export const createModels = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newModel = await getRepository(Models).create(req.body);
  const results = await getRepository(Models).save(newModel);
  return res.json(results);
};

export const updateModels = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const models = await getRepository(Models).findOne(req.params.id);
  if (models) {
    getRepository(Models).merge(models, req.body);
    const results = await getRepository(Models).save(models);
    return res.json(results);
  }

  return res.json({ msg: "Not api found" });
};

export const deleteModels = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(Models).delete(req.params.id);
  return res.json(results);
};
