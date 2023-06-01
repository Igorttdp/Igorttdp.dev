/*
  Warnings:

  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `BigInt`.

*/
-- AlterTable
ALTER TABLE `users` DROP PRIMARY KEY,
    MODIFY `id` BIGINT NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- CreateTable
CREATE TABLE `products` (
    `cod` INTEGER NOT NULL AUTO_INCREMENT,
    `description` VARCHAR(191) NOT NULL,
    `bar_code` VARCHAR(191) NOT NULL,
    `value` DECIMAL(65, 30) NOT NULL,
    `gross_weight` DECIMAL(65, 30) NOT NULL,
    `net_weight` DECIMAL(65, 30) NOT NULL,

    UNIQUE INDEX `products_cod_key`(`cod`),
    UNIQUE INDEX `products_bar_code_key`(`bar_code`),
    PRIMARY KEY (`cod`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Client` (
    `cod` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `fantasy` VARCHAR(191) NOT NULL,
    `document` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Client_cod_key`(`cod`),
    PRIMARY KEY (`cod`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
