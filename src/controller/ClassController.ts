import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Class } from "../entity/Class";

export const getAllClass = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const classes = await getRepository(Class).find();
  return res.json(classes);
};

export const getClass = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(Class).findOne(req.params.id);
  return res.json(results);
};

export const createClass = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newClass = await getRepository(Class).create(req.body);
  const results = await getRepository(Class).save(newClass);
  return res.json(results);
};

export const updateClass = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const classes = await getRepository(Class).findOne(req.params.id);
  if (classes) {
    getRepository(Class).merge(classes, req.body);
    const results = await getRepository(Class).save(classes);
    return res.json(results);
  }

  return res.json({ msg: "Not classes found" });
};

export const deleteClass = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(Class).delete(req.params.id);
  return res.json(results);
};
