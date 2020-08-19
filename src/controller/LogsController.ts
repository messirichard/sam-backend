import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Logs } from "../entity/Logs";

export const getAllLogs = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const logs = await getRepository(Logs).find();
  return res.json(logs);
};

export const getLogs = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(Logs).findOne(req.params.id);
  return res.json(results);
};

export const createLogs = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newLog = await getRepository(Logs).create(req.body);
  const results = await getRepository(Logs).save(newLog);
  return res.json(results);
};

export const updateLogs = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const log = await getRepository(Logs).findOne(req.params.id);
  if (log) {
    getRepository(Logs).merge(log, req.body);
    const results = await getRepository(Logs).save(log);
    return res.json(results);
  }

  return res.json({ msg: "Not api found" });
};

export const deleteLogs = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(Logs).delete(req.params.id);
  return res.json(results);
};
