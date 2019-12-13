import {Request, Response} from "express";
import {BaseController} from "./base.controller";
import {SampleValidator} from "../validators/sample.validator";

export class TestController extends BaseController {
  public static test(req: Request, res: Response) {
    return res.json({
      code: 200,
      status: "Working",
    });
  }

  public static async validationTest(req: Request, res: Response) {
    await new SampleValidator().validate(req.body);
    return res.json({
      code: 200,
      status: "Working"
    });
  }
}
