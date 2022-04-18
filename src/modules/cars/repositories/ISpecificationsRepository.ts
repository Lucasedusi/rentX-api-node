import { Specification } from "../model/Specification";

interface ICreateSpecifIcationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ name, description }: ICreateSpecifIcationDTO): void;
  findByName(name: string): Specification;
}

export { ISpecificationsRepository, ICreateSpecifIcationDTO };
