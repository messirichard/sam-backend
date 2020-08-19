import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Customers } from "../entity/Customers";

export const getAllCustomers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const customers = await getRepository(Customers).find();
  return res.json(customers);
};

export const getCustomers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(Customers).findOne(req.params.id);
  return res.json(results);
};

export const createCustomers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newCustomer = await getRepository(Customers).create(req.body);
  const results = await getRepository(Customers).save(newCustomer);
  return res.json(results);
};

export const updateCustomers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const customers = await getRepository(Customers).findOne(req.params.id);
  if (customers) {
    getRepository(Customers).merge(customers, req.body);
    const results = await getRepository(Customers).save(customers);
    return res.json(results);
  }

  return res.json({ msg: "Not customers found" });
};

export const deleteCustomers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(Customers).delete(req.params.id);
  return res.json(results);
};
