import { AuthenticateUserController } from "@modules/accounts/useCases/authenticateUser/AuthenticateUserController";
import { Router } from "express";

const autenthicateRoutes = Router();

const authenticateUserController = new AuthenticateUserController();

autenthicateRoutes.post("/sessions", authenticateUserController.handle);

export { autenthicateRoutes };
