import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Reports } from "../entity/Reports";

export const getAllReports = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const report = await getRepository(Reports).find();
  return res.json(report);
};

export const getReports = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(Reports).findOne(req.params.id);
  return res.json(results);
};

export const createReports = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newReports = await getRepository(Reports).create(req.body);
  const results = await getRepository(Reports).save(newReports);
  return res.json(results);
};

export const updateReports = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const reports = await getRepository(Reports).findOne(req.params.id);
  if (reports) {
    getRepository(Reports).merge(reports, req.body);
    const results = await getRepository(Reports).save(reports);
    return res.json(results);
  }

  return res.json({ msg: "Not reports found" });
};

export const deleteReports = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(Reports).delete(req.params.id);
  return res.json(results);
};
