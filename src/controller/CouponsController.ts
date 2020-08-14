import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Coupons } from "../entity/Coupons";

export const getAllCoupons = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const coupons = await getRepository(Coupons).find();
  return res.json(coupons);
};

export const getCoupons = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(Coupons).findOne(req.params.id);
  return res.json(results);
};

export const createCoupons = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newCoupons = await getRepository(Coupons).create(req.body);
  const results = await getRepository(Coupons).save(newCoupons);
  return res.json(results);
};

export const updateCoupons = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const coupon = await getRepository(Coupons).findOne(req.params.id);
  if (coupon) {
    getRepository(Coupons).merge(coupon, req.body);
    const results = await getRepository(Coupons).save(coupon);
    return res.json(results);
  }

  return res.json({ msg: "Not coupon found" });
};

export const deleteCoupons = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(Coupons).delete(req.params.id);
  return res.json(results);
};
