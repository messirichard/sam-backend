import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { DevicesNodes } from "../entity/DevicesNodes";

export const getAllDevicesNodes = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const devnod = await getRepository(DevicesNodes).find();
  return res.json(devnod);
};

export const getDevicesNodes = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(DevicesNodes).findOne(req.params.id);
  return res.json(results);
};

export const createDevicesNodes = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newDevnod = await getRepository(DevicesNodes).create(req.body);
  const results = await getRepository(DevicesNodes).save(newDevnod);
  return res.json(results);
};

export const updateDevicesNodes = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const devnod = await getRepository(DevicesNodes).findOne(req.params.id);
  if (devnod) {
    getRepository(DevicesNodes).merge(devnod, req.body);
    const results = await getRepository(DevicesNodes).save(devnod);
    return res.json(results);
  }

  return res.json({ msg: "Not api found" });
};

export const deleteDevicesNodes = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(DevicesNodes).delete(req.params.id);
  return res.json(results);
};
