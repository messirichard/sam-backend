import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { ScenesEvents } from "../entity/ScenesEvents";

export const getAllScenesEvents = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const sceneenv = await getRepository(ScenesEvents).find();
  return res.json(sceneenv);
};

export const getScenesEvents = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(ScenesEvents).findOne(req.params.id);
  return res.json(results);
};

export const createScenesEvents = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newScenesEnv = await getRepository(ScenesEvents).create(req.body);
  const results = await getRepository(ScenesEvents).save(newScenesEnv);
  return res.json(results);
};

export const updateScenesEvents = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const sceneenvs = await getRepository(ScenesEvents).findOne(req.params.id);
  if (sceneenvs) {
    getRepository(ScenesEvents).merge(sceneenvs, req.body);
    const results = await getRepository(ScenesEvents).save(sceneenvs);
    return res.json(results);
  }

  return res.json({ msg: "Not sceneenvs found" });
};

export const deleteScenesEvents = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(ScenesEvents).delete(req.params.id);
  return res.json(results);
};
