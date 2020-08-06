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

export default router;
