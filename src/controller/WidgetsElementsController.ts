import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { WidgetsElements } from "../entity/WidgetsElements";

export const getAllWidgetsElements = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const widgetelm = await getRepository(WidgetsElements).find();
  return res.json(widgetelm);
};

export const getWidgetsElements = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(WidgetsElements).findOne(req.params.id);
  return res.json(results);
};

export const createWidgetsElements = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newWidgetElm = await getRepository(WidgetsElements).create(req.body);
  const results = await getRepository(WidgetsElements).save(newWidgetElm);
  return res.json(results);
};

export const updateWidgetsElements = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const widgetelm = await getRepository(WidgetsElements).findOne(req.params.id);
  if (widgetelm) {
    getRepository(WidgetsElements).merge(widgetelm, req.body);
    const results = await getRepository(WidgetsElements).save(widgetelm);
    return res.json(results);
  }

  return res.json({ msg: "Not widgetelm found" });
};

export const deleteWidgetsElements = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(WidgetsElements).delete(req.params.id);
  return res.json(results);
};
