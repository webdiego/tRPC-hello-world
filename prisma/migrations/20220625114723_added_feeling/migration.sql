-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_People" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL DEFAULT '',
    "message" TEXT NOT NULL DEFAULT '',
    "flag" TEXT NOT NULL DEFAULT '',
    "feeling" TEXT NOT NULL DEFAULT '',
    "published" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_People" ("flag", "id", "message", "name", "published") SELECT "flag", "id", coalesce("message", '') AS "message", coalesce("name", '') AS "name", "published" FROM "People";
DROP TABLE "People";
ALTER TABLE "new_People" RENAME TO "People";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
