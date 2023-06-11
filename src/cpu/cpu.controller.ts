import { Controller } from '@nestjs/common';
import { CpuService } from './cpu.service';

@Controller('cpu')
export class CpuController {
  constructor(private cpuService: CpuService) {}

  getRoot() {
    return this.cpuService.compute();
  }
}
