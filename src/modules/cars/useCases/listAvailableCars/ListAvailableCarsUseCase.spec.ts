import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(
      carsRepositoryInMemory
    );
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

    const cars = await listAvailableCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it("Should be able to list all available cars by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car2",
      description: "Car_description",
      daily_rate: 350.0,
      license_plate: "362R-2343",
      fine_amount: 100,
      brand: "Car_Brand_test",
      category_id: "Car_id",
    });

    const cars = await listAvailableCarsUseCase.execute({
      brand: "Car_Brand_test",
    });

    expect(cars).toEqual([car]);
  });

  it("Should be able to list all available cars by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car3",
      description: "Car_description",
      daily_rate: 350.0,
      license_plate: "362R-1234",
      fine_amount: 100,
      brand: "Car_Brand_test",
      category_id: "Car_id",
    });

    const cars = await listAvailableCarsUseCase.execute({
      name: "Car",
    });

    expect(cars).toEqual([car]);
  });

  it("Should be able to list all available cars by category", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car3",
      description: "Car_description",
      daily_rate: 350.0,
      license_plate: "362R-1234",
      fine_amount: 100,
      brand: "Car_Brand_test",
      category_id: "12345",
    });

    const cars = await listAvailableCarsUseCase.execute({
      category_id: "12345",
    });

    expect(cars).toEqual([car]);
  });
});
