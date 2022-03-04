-- CreateTable
CREATE TABLE "Player" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "nationality" TEXT NOT NULL,
    "dateOfBirth" DATE NOT NULL,

    CONSTRAINT "Player_pkey" PRIMARY KEY ("id")
);
