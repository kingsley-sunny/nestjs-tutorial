import { readFile, writeFile } from 'fs/promises';

class MessagesRepository {
  async findOne(id: string) {
    const contents = await readFile('messages.json', 'utf-8');
    const data = JSON.parse(contents);
    return data[id];
  }

  async findAll() {
    const contents = await readFile('messages.json', 'utf-8');
    const data = JSON.parse(contents);
    return data;
  }

  async create(message: string) {
    try {
      const contents = await readFile('messages.json', 'utf-8');

      const messages = JSON.parse(contents || '{}');

      const id = Math.floor(Math.random() * 999);
      messages[id] = { id, content: message };

      await writeFile('messages.json', JSON.stringify(messages));

      return messages;
    } catch (error) {
      console.log(error);
    }
  }
}

export default MessagesRepository;
