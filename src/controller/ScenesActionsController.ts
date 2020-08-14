import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { ScenesActions } from "../entity/ScenesActions";

export const getAllScenesActions = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const scenesact = await getRepository(ScenesActions).find();
  return res.json(scenesact);
};

export const getScenesActions = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(ScenesActions).findOne(req.params.id);
  return res.json(results);
};

export const createScenesActions = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newScenesAct = await getRepository(ScenesActions).create(req.body);
  const results = await getRepository(ScenesActions).save(newScenesAct);
  return res.json(results);
};

export const updateScenesActions = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const sceneact = await getRepository(ScenesActions).findOne(req.params.id);
  if (sceneact) {
    getRepository(ScenesActions).merge(sceneact, req.body);
    const results = await getRepository(ScenesActions).save(sceneact);
    return res.json(results);
  }

  return res.json({ msg: "Not sceneact found" });
};

export const deleteScenesActions = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(ScenesActions).delete(req.params.id);
  return res.json(results);
};
