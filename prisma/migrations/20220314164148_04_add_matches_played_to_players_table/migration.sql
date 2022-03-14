/*
  Warnings:

  - Added the required column `matchesPlayed` to the `Player` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Player" ADD COLUMN     "matchesPlayed" INTEGER NOT NULL;
