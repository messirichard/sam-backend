import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Countrylanguage } from "../entity/Countrylanguage";

export const getAllCountrylanguage = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const countrylang = await getRepository(Countrylanguage).find();
  return res.json(countrylang);
};

export const getCountrylanguage = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(Countrylanguage).findOne(req.params.id);
  return res.json(results);
};

export const createCountrylanguage = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newCountrylang = await getRepository(Countrylanguage).create(req.body);
  const results = await getRepository(Countrylanguage).save(newCountrylang);
  return res.json(results);
};

export const updateCountrylanguage = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const countrylang = await getRepository(Countrylanguage).findOne(req.params.id);
  if (countrylang) {
    getRepository(Countrylanguage).merge(countrylang, req.body);
    const results = await getRepository(Countrylanguage).save(countrylang);
    return res.json(results);
  }

  return res.json({ msg: "Not countrylang found" });
};

export const deleteCountrylanguage = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(Countrylanguage).delete(req.params.id);
  return res.json(results);
};
