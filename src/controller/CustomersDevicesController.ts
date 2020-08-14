import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { CustomersDevices } from "../entity/CustomersDevices";

export const getAllCustomersDevice = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const custdev = await getRepository(CustomersDevices).find();
  return res.json(custdev);
};

export const getCustomersDevice = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(CustomersDevices).findOne(req.params.id);
  return res.json(results);
};

export const createCustomersDevice = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newCustdev = await getRepository(CustomersDevices).create(req.body);
  const results = await getRepository(CustomersDevices).save(newCustdev);
  return res.json(results);
};

export const updateCustomersDevice = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const custdev = await getRepository(CustomersDevices).findOne(req.params.id);
  if (custdev) {
    getRepository(CustomersDevices).merge(custdev, req.body);
    const results = await getRepository(CustomersDevices).save(custdev);
    return res.json(results);
  }

  return res.json({ msg: "Not api found" });
};

export const deleteCustomersDevice = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(CustomersDevices).delete(req.params.id);
  return res.json(results);
};
