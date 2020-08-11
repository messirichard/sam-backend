import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { City } from "../entity/City";

export const getCitys = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const citys = await getRepository(City).find();
  return res.json(citys);
};

export const getCity = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(City).findOne(req.params.id);
  return res.json(results);
};

export const createCity = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newCity = await getRepository(City).create(req.body);
  const results = await getRepository(City).save(newCity);
  return res.json(results);
};

export const updateCity = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const city = await getRepository(City).findOne(req.params.id);
  if (city) {
    getRepository(City).merge(city, req.body);
    const results = await getRepository(City).save(city);
    return res.json(results);
  }

  return res.json({msg: 'Not city found'});
};

export const deleteCity = async (req: Request, res: Response): Promise<Response> => {
  const results = await getRepository(City).delete(req.params.id);
  return res.json(results);
};