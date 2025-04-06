import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

process.on("SIGINT", async () => {
  await prisma.$disconnect();
  console.log("Database connection closed");
  process.exit(0);
});

export default db;
