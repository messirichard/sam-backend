import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { DevicesLogs } from "../entity/DevicesLogs";

export const getAllDevicesLogs = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const devlog = await getRepository(DevicesLogs).find();
  return res.json(devlog);
};

export const getDevicesLogs = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(DevicesLogs).findOne(req.params.id);
  return res.json(results);
};

export const createDevicesLogs = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newDevlog = await getRepository(DevicesLogs).create(req.body);
  const results = await getRepository(DevicesLogs).save(newDevlog);
  return res.json(results);
};

export const updateDevicesLogs = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const devlogs = await getRepository(DevicesLogs).findOne(req.params.id);
  if (devlogs) {
    getRepository(DevicesLogs).merge(devlogs, req.body);
    const results = await getRepository(DevicesLogs).save(devlogs);
    return res.json(results);
  }

  return res.json({ msg: "Not devlogs found" });
};

export const deleteDevicesLogs = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(DevicesLogs).delete(req.params.id);
  return res.json(results);
};
