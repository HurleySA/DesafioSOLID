import { Request, Response } from "express";
import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";


class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { id } = request.body;
    const user = this.turnUserAdminUseCase.execute(id);
    return response.send(user);
  }
}

export { TurnUserAdminController };

