import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { InvoicesPayment } from "../entity/InvoicesPayment";

export const getAllInvoicesPayment = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const invpayment = await getRepository(InvoicesPayment).find();
  return res.json(invpayment);
};

export const getInvoicesPayment = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(InvoicesPayment).findOne(req.params.id);
  return res.json(results);
};

export const createInvoicesPayment = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newInvoicesPayment = await getRepository(InvoicesPayment).create(req.body);
  const results = await getRepository(InvoicesPayment).save(newInvoicesPayment);
  return res.json(results);
};

export const updateInvoicesPayment = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const invpay = await getRepository(InvoicesPayment).findOne(req.params.id);
  if (invpay) {
    getRepository(InvoicesPayment).merge(invpay, req.body);
    const results = await getRepository(InvoicesPayment).save(invpay);
    return res.json(results);
  }

  return res.json({ msg: "Not invpay found" });
};

export const deleteInvoicesPayment = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(InvoicesPayment).delete(req.params.id);
  return res.json(results);
};
