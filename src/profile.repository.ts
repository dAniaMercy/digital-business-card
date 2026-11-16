import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
@Injectable()
export class ProfileRepository {
  constructor(private readonly prisma: PrismaService) {}
  findProfile() {
    return this.prisma.profile.findUnique({
      where: { id: 1 },
      include: {
        links: { orderBy: { id: 'asc' } }, skills: { orderBy: { id: 'asc' } },
        experience: { orderBy: { id: 'asc' } }, projects: { orderBy: { id: 'asc' } },
      },
    });
  }
}
