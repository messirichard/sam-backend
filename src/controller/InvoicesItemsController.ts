import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { InvoicesItems } from "../entity/InvoicesItems";

export const getAllInvoicesItems = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const invoicesitm = await getRepository(InvoicesItems).find();
  return res.json(invoicesitm);
};

export const getInvoicesItems = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(InvoicesItems).findOne(req.params.id);
  return res.json(results);
};

export const createInvoicesItems = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newInvoiceitem = await getRepository(InvoicesItems).create(req.body);
  const results = await getRepository(InvoicesItems).save(newInvoiceitem);
  return res.json(results);
};

export const updateInvoicesItems = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const invitm = await getRepository(InvoicesItems).findOne(req.params.id);
  if (invitm) {
    getRepository(InvoicesItems).merge(invitm, req.body);
    const results = await getRepository(InvoicesItems).save(invitm);
    return res.json(results);
  }

  return res.json({ msg: "Not invitm found" });
};

export const deleteInvoicesItems = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(InvoicesItems).delete(req.params.id);
  return res.json(results);
};
