import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { CustomersDashboards } from "../entity/CustomersDashboards";

export const getAllApi = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const custdash = await getRepository(CustomersDashboards).find();
  return res.json(custdash);
};

export const getApi = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(CustomersDashboards).findOne(req.params.id);
  return res.json(results);
};

export const createApi = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newCust = await getRepository(CustomersDashboards).create(req.body);
  const results = await getRepository(CustomersDashboards).save(newCust);
  return res.json(results);
};

export const updateApi = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const custdash = await getRepository(CustomersDashboards).findOne(req.params.id);
  if (custdash) {
    getRepository(CustomersDashboards).merge(custdash, req.body);
    const results = await getRepository(CustomersDashboards).save(custdash);
    return res.json(results);
  }

  return res.json({msg: 'Not custdash found'});
};

export const deleteApi = async (req: Request, res: Response): Promise<Response> => {
  const results = await getRepository(CustomersDashboards).delete(req.params.id);
  return res.json(results);
};