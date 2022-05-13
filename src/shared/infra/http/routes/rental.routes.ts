import { CreateRentalController } from "@modules/rentals/useCases/createRental/CreateRentalController";
import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensuredAuthenticated";

const rentalsRouter = Router();

const createRentalController = new CreateRentalController();

rentalsRouter.post("/", ensureAuthenticated, createRentalController.handle);

export { rentalsRouter };
