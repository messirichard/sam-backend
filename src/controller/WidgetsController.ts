import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Widgets } from "../entity/Widgets";

export const getAllWidgets = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const widgets = await getRepository(Widgets).find();
  return res.json(widgets);
};

export const getWidgets = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(Widgets).findOne(req.params.id);
  return res.json(results);
};

export const createWidgets = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newWidget = await getRepository(Widgets).create(req.body);
  const results = await getRepository(Widgets).save(newWidget);
  return res.json(results);
};

export const updateWidgets = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const widget = await getRepository(Widgets).findOne(req.params.id);
  if (widget) {
    getRepository(Widgets).merge(widget, req.body);
    const results = await getRepository(Widgets).save(widget);
    return res.json(results);
  }

  return res.json({ msg: "Not widget found" });
};

export const deleteWidgets = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(Widgets).delete(req.params.id);
  return res.json(results);
};
