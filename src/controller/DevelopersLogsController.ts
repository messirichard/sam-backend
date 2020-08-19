import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { DevelopersLogs } from "../entity/DevelopersLogs";

export const getAllDevelopersLogs = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const devlogs = await getRepository(DevelopersLogs).find();
  return res.json(devlogs);
};

export const getDevelopersLogs = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(DevelopersLogs).findOne(req.params.id);
  return res.json(results);
};

export const createDevelopersLogs = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newDevlog = await getRepository(DevelopersLogs).create(req.body);
  const results = await getRepository(DevelopersLogs).save(newDevlog);
  return res.json(results);
};

export const updateDevelopersLogs = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const devlog = await getRepository(DevelopersLogs).findOne(req.params.id);
  if (devlog) {
    getRepository(DevelopersLogs).merge(devlog, req.body);
    const results = await getRepository(DevelopersLogs).save(devlog);
    return res.json(results);
  }

  return res.json({ msg: "Not devlog found" });
};

export const deleteDevelopersLogs = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(DevelopersLogs).delete(req.params.id);
  return res.json(results);
};
