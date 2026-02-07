/*
  Warnings:

  - You are about to drop the column `mobile` on the `user` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[phone]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `User_mobile_key` ON `user`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `mobile`;

-- CreateIndex
CREATE UNIQUE INDEX `User_phone_key` ON `User`(`phone`);
