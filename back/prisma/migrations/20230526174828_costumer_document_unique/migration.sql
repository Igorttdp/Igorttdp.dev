/*
  Warnings:

  - A unique constraint covering the columns `[document]` on the table `costumers` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `costumers_document_key` ON `costumers`(`document`);
