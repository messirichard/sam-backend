import { Router } from "express";
const router = Router();

import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
} from "../controller/UserController";

import {
  getApis,
  getApi,
  createApi,
  updateApi,
  deleteApi
} from "../controller/ApiController";

import {
  getCitys,
  getCity,
  createCity,
  updateCity,
  deleteCity
} from "../controller/CityController";

router.get("/users", getUsers);
router.get("/users/:id", getUser);
router.post("/users", createUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

router.get("/api", getApis);
router.get("/api/:id", getApi);
router.post("/api", createApi);
router.put("/api/:id", updateApi);
router.delete("/api/:id", deleteApi);

router.get("/city", getCitys);
router.get("/city/:id", getCity);
router.post("/city", createCity);
router.put("/city/:id", updateCity);
router.delete("/city/:id", deleteCity);

export default router;
