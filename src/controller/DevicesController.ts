import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Devices } from "../entity/Devices";

export const getAllDevices = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const dev = await getRepository(Devices).find();
  return res.json(dev);
};

export const getDevices = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(Devices).findOne(req.params.id);
  return res.json(results);
};

export const createDevices = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newDevcon = await getRepository(Devices).create(req.body);
  const results = await getRepository(Devices).save(newDevcon);
  return res.json(results);
};

export const updateDevices = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const devs = await getRepository(Devices).findOne(req.params.id);
  if (devs) {
    getRepository(Devices).merge(devs, req.body);
    const results = await getRepository(Devices).save(devs);
    return res.json(results);
  }

  return res.json({ msg: "Not api found" });
};

export const deleteDevices = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(Devices).delete(req.params.id);
  return res.json(results);
};
