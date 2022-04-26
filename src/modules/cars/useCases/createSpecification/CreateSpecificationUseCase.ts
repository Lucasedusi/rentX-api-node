import { inject, injectable } from "tsyringe";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject("SpecificationsRepository")
    private specificationRepository: ISpecificationsRepository
  ) {}

  execute({ name, description }: IRequest): void {
    const specificationAlreadyExist =
      this.specificationRepository.findByName(name);

    if (specificationAlreadyExist) {
      throw new Error("Specification Already Exist");
    }

    this.specificationRepository.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationUseCase };
