import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  // eslint-disable-next-line prettier/prettier
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) { }

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    const updatedUser = this.turnUserAdminUseCase.execute({ user_id });

    return response.status(200).json(updatedUser);
  }
}

export { TurnUserAdminController };
