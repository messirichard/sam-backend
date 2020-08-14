import {
  Router
} from "express";
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

import {
  getAllClass,
  getClass,
  createClass,
  updateClass,
  deleteClass,
} from "../controller/ClassController";

import {
  getAllCountry,
  getCountry,
  createCountry,
  updateCountry,
  deleteCountry,
} from "../controller/CountryController";

import {
  getAllCountrylanguage,
  getCountrylanguage,
  createCountrylanguage,
  updateCountrylanguage,
  deleteCountrylanguage
} from "../controller/CountrylanguageController";

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

router.get("/class", getAllClass);
router.get("/class/:id", getClass);
router.post("/class", createClass);
router.put("/class/:id", updateClass);
router.delete("/class/:id", deleteClass);

router.get("/country", getAllCountry);
router.get("/country/:id", getCountry);
router.post("/country", createCountry);
router.put("/country/:id", updateCountry);
router.delete("/country/:id", deleteCountry);

router.get("/countrylang", getAllCountrylanguage);
router.get("/countrylang/:id", getCountrylanguage);
router.post("/countrylang", createCountrylanguage);
router.put("/countrylang/:id", updateCountrylanguage);
router.delete("/countrylang/:id", deleteCountrylanguage);

export default router;