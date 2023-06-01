/*
  Warnings:

  - You are about to alter the column `password` on the `users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(120)`.
  - You are about to drop the `client` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE `products` MODIFY `description` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `users` MODIFY `password` VARCHAR(120) NOT NULL;

-- DropTable
DROP TABLE `client`;

-- CreateTable
CREATE TABLE `costumers` (
    `cod` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `fantasy` VARCHAR(191) NOT NULL,
    `document` CHAR(11) NOT NULL,
    `address` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `costumers_cod_key`(`cod`),
    PRIMARY KEY (`cod`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
