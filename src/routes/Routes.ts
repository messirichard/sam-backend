import { Router } from "express";
const router = Router();

import {
  getAllUser,
  getUser,
  createUser,
  updateUser,
  deleteUser
} from "../controller/UserController";

import {
  getAllApi,
  getApi,
  createApi,
  updateApi,
  deleteApi
} from "../controller/ApiController";

import {
  getAllCity,
  getCity,
  createCity,
  updateCity,
  deleteCity
} from "../controller/CityController";

router.get("/users", getAllUser);
router.get("/users/:id", getUser);
router.post("/users", createUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

router.get("/api", getAllApi);
router.get("/api/:id", getApi);
router.post("/api", createApi);
router.put("/api/:id", updateApi);
router.delete("/api/:id", deleteApi);

router.get("/city", getAllCity);
router.get("/city/:id", getCity);
router.post("/city", createCity);
router.put("/city/:id", updateCity);
router.delete("/city/:id", deleteCity);

export default router;
