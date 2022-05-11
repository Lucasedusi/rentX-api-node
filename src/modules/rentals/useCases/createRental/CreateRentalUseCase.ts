import { IRentalsRepository } from "@modules/rentals/repositories/IRentalsRepository";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
  user_id: string;
  car_id: string;
  expected_return_date: Date;
}

class CreateRentalUseCase {
  constructor(private rentalsRepository: IRentalsRepository) {}

  async execute({
    user_id,
    car_id,
    expected_return_date,
  }: IRequest): Promise<void> {
    const carUnavailable = this.rentalsRepository.findOpenRentalByCar(car_id);
    const rentalOpenToUser =
      this.rentalsRepository.findOpenRentalByUser(user_id);

    if (!carUnavailable) {
      throw new AppError("Car is unavailable");
    }

    if (!rentalOpenToUser) {
      throw new AppError("There's a rental in progress for user");
    }
  }
}

export { CreateRentalUseCase };
