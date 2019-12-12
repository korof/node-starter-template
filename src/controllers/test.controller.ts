import {Request, Response} from "express";
import {BaseController} from "./base.controller";

export class TestController extends BaseController {
  public static test(req: Request, res: Response) {
    return res.json({
      code: 200,
      status: "Working",
    });
  }
}
