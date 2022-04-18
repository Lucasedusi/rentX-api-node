import { Router } from "express";
import { SpecificationsRepository } from "../modules/cars/repositories/SpecificationsRepository";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";

const specificationsRoutes = Router();
const speficicationsRepository = new SpecificationsRepository();

specificationsRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const createSpecificationsService = new CreateSpecificationService(
    speficicationsRepository
  );

  createSpecificationsService.execute({ name, description });

  return response.status(201).send();
});

specificationsRoutes.get("/", (request, response) => {
  const all = speficicationsRepository.list();

  return response.json(all);
});

export { specificationsRoutes };
