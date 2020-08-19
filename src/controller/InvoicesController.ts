import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Invoices } from "../entity/Invoices";

export const getAllInvoices = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const inv = await getRepository(Invoices).find();
  return res.json(inv);
};

export const getInvoices = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(Invoices).findOne(req.params.id);
  return res.json(results);
};

export const createInvoices = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newInvoice = await getRepository(Invoices).create(req.body);
  const results = await getRepository(Invoices).save(newInvoice);
  return res.json(results);
};

export const updateInvoices = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const invs = await getRepository(Invoices).findOne(req.params.id);
  if (invs) {
    getRepository(Invoices).merge(invs, req.body);
    const results = await getRepository(Invoices).save(invs);
    return res.json(results);
  }

  return res.json({ msg: "Not invs found" });
};

export const deleteInvoices = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(Invoices).delete(req.params.id);
  return res.json(results);
};
