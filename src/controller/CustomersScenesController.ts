import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { CustomersScenes } from "../entity/CustomersScenes";

export const getAllCustomersScenes = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const custscene = await getRepository(CustomersScenes).find();
  return res.json(custscene);
};

export const getCustomersScenes = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(CustomersScenes).findOne(req.params.id);
  return res.json(results);
};

export const createCustomersScenes = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newCustsecene = await getRepository(CustomersScenes).create(req.body);
  const results = await getRepository(CustomersScenes).save(newCustsecene);
  return res.json(results);
};

export const updateCustomersScenes = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const custsecene = await getRepository(CustomersScenes).findOne(req.params.id);
  if (custsecene) {
    getRepository(CustomersScenes).merge(custsecene, req.body);
    const results = await getRepository(CustomersScenes).save(custsecene);
    return res.json(results);
  }

  return res.json({ msg: "Not custsecene found" });
};

export const deleteCustomersScenes = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(CustomersScenes).delete(req.params.id);
  return res.json(results);
};
