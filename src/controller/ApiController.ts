import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Api } from "../entity/Api";

export const getAllApi = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const apis = await getRepository(Api).find();
  return res.json(apis);
};

export const getApi = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(Api).findOne(req.params.id);
  return res.json(results);
};

export const createApi = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newApi = await getRepository(Api).create(req.body);
  const results = await getRepository(Api).save(newApi);
  return res.json(results);
};

export const updateApi = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const api = await getRepository(Api).findOne(req.params.id);
  if (api) {
    getRepository(Api).merge(api, req.body);
    const results = await getRepository(Api).save(api);
    return res.json(results);
  }

  return res.json({msg: 'Not api found'});
};

export const deleteApi = async (req: Request, res: Response): Promise<Response> => {
  const results = await getRepository(Api).delete(req.params.id);
  return res.json(results);
};