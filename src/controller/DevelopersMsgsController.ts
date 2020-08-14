import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { DevelopersMsgs } from "../entity/DevelopersMsgs";

export const getAllDevelopersMsgs = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const devmsgs = await getRepository(DevelopersMsgs).find();
  return res.json(devmsgs);
};

export const getDevelopersMsgs = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(DevelopersMsgs).findOne(req.params.id);
  return res.json(results);
};

export const createDevelopersMsgs = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newDevmsg = await getRepository(DevelopersMsgs).create(req.body);
  const results = await getRepository(DevelopersMsgs).save(newDevmsg);
  return res.json(results);
};

export const updateDevelopersMsgs = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const devmsg = await getRepository(DevelopersMsgs).findOne(req.params.id);
  if (devmsg) {
    getRepository(DevelopersMsgs).merge(devmsg, req.body);
    const results = await getRepository(DevelopersMsgs).save(devmsg);
    return res.json(results);
  }

  return res.json({ msg: "Not devmsg found" });
};

export const deleteDevelopersMsgs = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(DevelopersMsgs).delete(req.params.id);
  return res.json(results);
};
