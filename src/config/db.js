import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

process.on("SIGINT", async () => {
  await prisma.$disconnect();
  console.log("Database connection closed");
  process.exit(0);
});

export default prisma;
