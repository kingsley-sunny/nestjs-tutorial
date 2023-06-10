import { Injectable } from '@nestjs/common';
import MessagesRepository from './messages.repository';

@Injectable()
class MessagesService {
  constructor(private messagesRepo: MessagesRepository) {
    this.messagesRepo = new MessagesRepository();
  }

  findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }

  findAll() {
    return this.messagesRepo.findAll();
  }

  create(content: string) {
    return this.messagesRepo.create(content);
  }
}

export default MessagesService;
