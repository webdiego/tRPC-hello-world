-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_People" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "message" TEXT,
    "flag" TEXT NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_People" ("flag", "id", "message", "name", "published") SELECT "flag", "id", "message", "name", "published" FROM "People";
DROP TABLE "People";
ALTER TABLE "new_People" RENAME TO "People";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
