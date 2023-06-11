import { Module } from '@nestjs/common';
import { CpuModule } from 'src/cpu/cpu.module';
import { PowerModule } from 'src/power/power.module';
import { DiskController } from './disk.controller';
import { DiskService } from './disk.service';

@Module({
  providers: [DiskService],
  controllers: [DiskController],
  imports: [PowerModule],
  exports: [DiskService]
})
export class DiskModule {}
