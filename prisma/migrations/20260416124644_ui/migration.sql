/*
  Warnings:

  - You are about to drop the `Amendment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Law` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Amendment" DROP CONSTRAINT "Amendment_lawId_fkey";

-- AlterTable
ALTER TABLE "Article" ADD COLUMN     "embedding" DOUBLE PRECISION[] DEFAULT ARRAY[]::DOUBLE PRECISION[],
ALTER COLUMN "tags" SET DEFAULT ARRAY[]::TEXT[];

-- DropTable
DROP TABLE "Amendment";

-- DropTable
DROP TABLE "Law";
