import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { CouponsClass } from "../entity/CouponsClass";

export const getAllCouponsClass = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const coupons = await getRepository(CouponsClass).find();
  return res.json(coupons);
};

export const getCouponsClass = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(CouponsClass).findOne(req.params.id);
  return res.json(results);
};

export const createCouponsClass = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newCoupon = await getRepository(CouponsClass).create(req.body);
  const results = await getRepository(CouponsClass).save(newCoupon);
  return res.json(results);
};

export const updateCouponsClass = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const coupons = await getRepository(CouponsClass).findOne(req.params.id);
  if (coupons) {
    getRepository(CouponsClass).merge(coupons, req.body);
    const results = await getRepository(CouponsClass).save(coupons);
    return res.json(results);
  }

  return res.json({ msg: "Not coupons found" });
};

export const deleteCouponsClass = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(CouponsClass).delete(req.params.id);
  return res.json(results);
};
