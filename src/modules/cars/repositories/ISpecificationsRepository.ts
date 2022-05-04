import { Specification } from "../infra/typeorm/entities/Specification";

interface ICreateSpecifIcationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ name, description }: ICreateSpecifIcationDTO): Promise<void>;
  findByName(name: string): Promise<Specification>;
}

export { ISpecificationsRepository, ICreateSpecifIcationDTO };
