import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Scenes } from "../entity/Scenes";

export const getAllScenes = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const scenes = await getRepository(Scenes).find();
  return res.json(scenes);
};

export const getScenes = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(Scenes).findOne(req.params.id);
  return res.json(results);
};

export const createScenes = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newScene = await getRepository(Scenes).create(req.body);
  const results = await getRepository(Scenes).save(newScene);
  return res.json(results);
};

export const updateScenes = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const scene = await getRepository(Scenes).findOne(req.params.id);
  if (scene) {
    getRepository(Scenes).merge(scene, req.body);
    const results = await getRepository(Scenes).save(scene);
    return res.json(results);
  }

  return res.json({ msg: "Not scene found" });
};

export const deleteScenes = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(Scenes).delete(req.params.id);
  return res.json(results);
};
