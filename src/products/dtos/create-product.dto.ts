import { IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString({ message: 'Title must be a string' })
  title: string;
  @IsNumber({}, { message: 'Price must be a number' })
  price: number;
}
