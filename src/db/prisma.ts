import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

async function testDbConnection() {
  try {
    await prisma.$connect();
    console.log('✅ Successfully connected to the database');
  } catch (error) {
    console.error('❌ Database connection failed:', error);
  }
}

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

testDbConnection();

export default prisma;
