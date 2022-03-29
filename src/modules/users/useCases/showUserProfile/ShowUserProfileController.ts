import { Request, Response } from "express";
import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";


class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const { id } = request.body;
    const user = this.showUserProfileUseCase.execute(id);
    return response.send(user)
  }
}

export { ShowUserProfileController };

