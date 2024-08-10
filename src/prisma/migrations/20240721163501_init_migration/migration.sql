-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SpotifyAuth" (
    "id" SERIAL NOT NULL,
    "accessToken" TEXT NOT NULL,
    "tokenType" TEXT NOT NULL DEFAULT 'Bearer',
    "scope" TEXT NOT NULL,
    "expiresIn" INTEGER NOT NULL,
    "refreshToken" TEXT NOT NULL,

    CONSTRAINT "SpotifyAuth_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "SpotifyAuth_accessToken_key" ON "SpotifyAuth"("accessToken");

-- CreateIndex
CREATE UNIQUE INDEX "SpotifyAuth_tokenType_key" ON "SpotifyAuth"("tokenType");
