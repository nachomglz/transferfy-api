/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `SpotifyAuth` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `SpotifyAuth` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SpotifyAuth" ADD COLUMN     "userId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "SpotifyAuth_userId_key" ON "SpotifyAuth"("userId");

-- AddForeignKey
ALTER TABLE "SpotifyAuth" ADD CONSTRAINT "SpotifyAuth_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
