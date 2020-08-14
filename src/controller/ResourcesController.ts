import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Resources } from "../entity/Resources";

export const getAllResources = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const resource = await getRepository(Resources).find();
  return res.json(resource);
};

export const getResources = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(Resources).findOne(req.params.id);
  return res.json(results);
};

export const createResources = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newResouce = await getRepository(Resources).create(req.body);
  const results = await getRepository(Resources).save(newResouce);
  return res.json(results);
};

export const updateResources = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const resources = await getRepository(Resources).findOne(req.params.id);
  if (resources) {
    getRepository(Resources).merge(resources, req.body);
    const results = await getRepository(Resources).save(resources);
    return res.json(results);
  }

  return res.json({ msg: "Not resources found" });
};

export const deleteResources = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(Resources).delete(req.params.id);
  return res.json(results);
};
