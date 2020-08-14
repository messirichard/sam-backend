import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Country } from "../entity/Country";

export const getAllCountry = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const countrys = await getRepository(Country).find();
  return res.json(countrys);
};

export const getCountry = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(Country).findOne(req.params.id);
  return res.json(results);
};

export const createCountry = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newCountry = await getRepository(Country).create(req.body);
  const results = await getRepository(Country).save(newCountry);
  return res.json(results);
};

export const updateCountry = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const countrys = await getRepository(Country).findOne(req.params.id);
  if (countrys) {
    getRepository(Country).merge(countrys, req.body);
    const results = await getRepository(Country).save(countrys);
    return res.json(results);
  }

  return res.json({ msg: "Not countrys found" });
};

export const deleteCountry = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(Country).delete(req.params.id);
  return res.json(results);
};
