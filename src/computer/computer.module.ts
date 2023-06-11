import { Module } from '@nestjs/common';
import { CpuModule } from 'src/cpu/cpu.module';
import { DiskModule } from 'src/disk/disk.module';
import { ComputerController } from './computer.controller';
import { ComputerService } from './computer.service';

@Module({
  providers: [ComputerService],
  controllers: [ComputerController],
  imports: [CpuModule, DiskModule],
})
export class ComputerModule {}
