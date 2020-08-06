import { Request, Response } from "express";
import { connection } from "../config/db";
import Api from "../entity/Api"
class ApiController {
  public getAllApi(req: Request, res: Response) {
    connection
      .then(async (connection) => {
        const apis: Api[] = await connection.manager.find(
          Api
        );
        res.json(apis);
      })
      .catch((error) => {
        console.error("Error ", error);
        res.json(error);
      });
  }
}

export default ApiController;
