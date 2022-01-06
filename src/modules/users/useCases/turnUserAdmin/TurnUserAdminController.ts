import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  // eslint-disable-next-line prettier/prettier
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) { }

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    try {
      const updatedUser = this.turnUserAdminUseCase.execute({ user_id });

      return response.status(200).json(updatedUser);
    } catch (error) {
      return response.status(404).json({ error: "User not found" });
    }
  }
}

export { TurnUserAdminController };
