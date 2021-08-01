import { IsString } from 'class-validator';

export class CreateCoffeeDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly brand: string;

  @IsString({ each: true })
  // { each: true } indicates that the expected value is an Array of String's
  readonly flavors: string[];
}
