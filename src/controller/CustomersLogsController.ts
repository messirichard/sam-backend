import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { CustomersLogs } from "../entity/CustomersLogs";

export const getAllCustomersLogs = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const custlogs = await getRepository(CustomersLogs).find();
  return res.json(custlogs);
};

export const getCustomersLogs = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(CustomersLogs).findOne(req.params.id);
  return res.json(results);
};

export const createCustomersLogs = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newCustlogs = await getRepository(CustomersLogs).create(req.body);
  const results = await getRepository(CustomersLogs).save(newCustlogs);
  return res.json(results);
};

export const updateCustomersLogs = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const custlogs = await getRepository(CustomersLogs).findOne(req.params.id);
  if (custlogs) {
    getRepository(CustomersLogs).merge(custlogs, req.body);
    const results = await getRepository(CustomersLogs).save(custlogs);
    return res.json(results);
  }

  return res.json({ msg: "Not custlogs found" });
};

export const deleteCustomersLogs = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(CustomersLogs).delete(req.params.id);
  return res.json(results);
};
