import { PrismaClient } from '@prisma/client';

declare global {
  // eslint-disable-next-line
  var prisma: PrismaClient; // This must be a `var` to properly extend globalThis
}

export {};
