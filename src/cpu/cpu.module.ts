import { Module } from '@nestjs/common';
import { PowerModule } from 'src/power/power.module';
import { CpuController } from './cpu.controller';
import { CpuService } from './cpu.service';
import { callbackify } from 'util';

@Module({
  providers: [CpuService],
  controllers: [CpuController],
  imports: [PowerModule],
  exports: [CpuService]
})
export class CpuModule {}
