import { IsByteLength, IsString, Length } from 'class-validator';

class CreateMessageDto {
  @Length(8, 20)
  content: string;
}

export default CreateMessageDto;
