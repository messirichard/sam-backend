import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Phone } from "../entity/Phone";

export const getAllPhones = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const phones = await getRepository(Phone).find();
  return res.json(phones);
};

export const getPhones = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(Phone).findOne(req.params.id);
  return res.json(results);
};

export const createPhones = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newPhone = await getRepository(Phone).create(req.body);
  const results = await getRepository(Phone).save(newPhone);
  return res.json(results);
};

export const updatePhones = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const phone = await getRepository(Phone).findOne(req.params.id);
  if (phone) {
    getRepository(Phone).merge(phone, req.body);
    const results = await getRepository(Phone).save(phone);
    return res.json(results);
  }

  return res.json({ msg: "Not phone found" });
};

export const deletePhones = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(Phone).delete(req.params.id);
  return res.json(results);
};
