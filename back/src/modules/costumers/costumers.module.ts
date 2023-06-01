import { Module } from '@nestjs/common';
import { CostumersService } from './costumers.service';
import { CostumersController } from './costumers.controller';
import { CostumersRepository } from './repositories/costumers.repository';
import { CostumersPrismaRepository } from './repositories/prisma/costumers.prisma.repository';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [CostumersController],
  providers: [
    CostumersService,
    PrismaService,
    {
      provide: CostumersRepository,
      useClass: CostumersPrismaRepository,
    },
  ],
})
export class CostumersModule {}
