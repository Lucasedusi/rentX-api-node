import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { ListCarsUseCase } from "./ListCarsUseCase";

let listCarsUseCase: ListCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listCarsUseCase = new ListCarsUseCase(carsRepositoryInMemory);
  });

  it("Should be able list all available cars", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car_Name",
      description: "Car_description",
      daily_rate: 350.0,
      license_plate: "35R-2343",
      fine_amount: 100,
      brand: "Car_Brand",
      category_id: "Car_id",
    });

    const cars = await listCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it("Should be able to list all available cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car_Name02",
      description: "Car_description",
      daily_rate: 350.0,
      license_plate: "362R-2343",
      fine_amount: 100,
      brand: "Car_Brand_test",
      category_id: "Car_id",
    });

    const cars = await listCarsUseCase.execute({
      brand: "Car_Brand_test",
    });

    console.log(cars);

    expect(cars).toEqual([car]);
  });
});
