import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { CustomersReports } from "../entity/CustomersReports";

export const getAllCustomersReports = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const custrep = await getRepository(CustomersReports).find();
  return res.json(custrep);
};

export const getCustomersReports = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(CustomersReports).findOne(req.params.id);
  return res.json(results);
};

export const createCustomersReports = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newCustrep = await getRepository(CustomersReports).create(req.body);
  const results = await getRepository(CustomersReports).save(newCustrep);
  return res.json(results);
};

export const updateCustomersReports = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const custrep = await getRepository(CustomersReports).findOne(req.params.id);
  if (custrep) {
    getRepository(CustomersReports).merge(custrep, req.body);
    const results = await getRepository(CustomersReports).save(custrep);
    return res.json(results);
  }

  return res.json({ msg: "Not custrep found" });
};

export const deleteCustomersReports = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(CustomersReports).delete(req.params.id);
  return res.json(results);
};
