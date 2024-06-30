import { AddressRepository } from "@/repositories/pg/address.repository";
import { FindAddressByPersonUseCase } from "../find-address-by-person";

export function MakeFindAddressByPersonUseCase() {
  const addressRepository = new AddressRepository();

  const findAddressByPersonUseCase = new FindAddressByPersonUseCase(
    addressRepository,
  );

  return findAddressByPersonUseCase;
}
