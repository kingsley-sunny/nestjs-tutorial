import { Injectable } from '@nestjs/common';

@Injectable()
export class DiskService {
  getData() {
    return 'This is the disk service';
  }
}
