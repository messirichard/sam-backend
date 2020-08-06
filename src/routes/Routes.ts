import {Request, Response} from "express";
import Api from "../controller/ApiController";
class Routes {
    private api_controller: Api;

    constructor() {
        this.api_controller = new Api();
    }

    public routes(app): void {
        app.route("/").get((request: Request, response: Response) => {
            response.status(200).send({
                message: "GET request successfully.",
            });
        });
        app.route("/api")
            .get(this.api_controller.getAllApi);
    }
}

export {
    Routes
};