import { PrismaClient, Role } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const password = await bcrypt.hash('123456', 10);

  // SUPER ADMIN
  await prisma.user.upsert({
    where: { email: 'super@prime.com' },
    update: {},
    create: {
      name: 'Super Admin',
      email: 'super@prime.com',
      phone: '9999999999',
      password,
      role: Role.SUPER_ADMIN,
    },
  });

  // ADMIN
  await prisma.user.upsert({
    where: { email: 'admin@prime.com' },
    update: {},
    create: {
      name: 'Admin',
      email: 'admin@prime.com',
      phone: '8888888888',
      password,
      role: Role.ADMIN,
    },
  });

  console.log('✅ Seed Users Created Successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
