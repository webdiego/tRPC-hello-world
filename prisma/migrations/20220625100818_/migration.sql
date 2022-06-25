-- CreateTable
CREATE TABLE "People" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "message" TEXT,
    "flag" TEXT NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false
);
