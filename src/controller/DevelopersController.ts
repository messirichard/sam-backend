import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Developers } from "../entity/Developers";

export const getAllDevelopers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const devs = await getRepository(Developers).find();
  return res.json(devs);
};

export const getDevelopers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(Developers).findOne(req.params.id);
  return res.json(results);
};

export const createDevelopers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newDev = await getRepository(Developers).create(req.body);
  const results = await getRepository(Developers).save(newDev);
  return res.json(results);
};

export const updateDevelopers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const dev = await getRepository(Developers).findOne(req.params.id);
  if (dev) {
    getRepository(Developers).merge(dev, req.body);
    const results = await getRepository(Developers).save(dev);
    return res.json(results);
  }

  return res.json({ msg: "Not api found" });
};

export const deleteDevelopers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(Developers).delete(req.params.id);
  return res.json(results);
};
