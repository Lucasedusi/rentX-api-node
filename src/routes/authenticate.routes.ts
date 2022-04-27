import { Router } from "express";
import { AuthenticateUserController } from "../modules/accounts/useCases/authenticateUser/AuthenticateUserController";

const autenthicateRoutes = Router();

const authenticateUserController = new AuthenticateUserController();

autenthicateRoutes.post("/sessions", authenticateUserController.handle);

export { autenthicateRoutes };
