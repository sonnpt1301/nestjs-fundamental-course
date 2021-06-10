import { PartialType } from '@nestjs/mapped-types';
import { CreateCoffeeDto } from './create-coffee.dto';

// PartialType: returns a type (class) with all the properties of the input type set to optional
export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {}
