import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
  constructor(private powerService: PowerService) {}

  compute() {
    return `this is computing ${this.powerService.supplyPower(65)}`;
  }
}
