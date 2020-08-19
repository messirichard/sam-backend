import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { ScenesConditions } from "../entity/ScenesConditions";

export const getAllScenesConditions = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const scenecon = await getRepository(ScenesConditions).find();
  return res.json(scenecon);
};

export const getScenesConditions = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(ScenesConditions).findOne(req.params.id);
  return res.json(results);
};

export const createScenesConditions = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newScenesCon = await getRepository(ScenesConditions).create(req.body);
  const results = await getRepository(ScenesConditions).save(newScenesCon);
  return res.json(results);
};

export const updateScenesConditions = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const scenecons = await getRepository(ScenesConditions).findOne(req.params.id);
  if (scenecons) {
    getRepository(ScenesConditions).merge(scenecons, req.body);
    const results = await getRepository(ScenesConditions).save(scenecons);
    return res.json(results);
  }

  return res.json({ msg: "Not scenecons found" });
};

export const deleteScenesConditions = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(ScenesConditions).delete(req.params.id);
  return res.json(results);
};
