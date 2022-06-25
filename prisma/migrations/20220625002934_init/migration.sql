-- CreateTable
CREATE TABLE "People" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "message" TEXT,
    "flag" TEXT NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false
);
