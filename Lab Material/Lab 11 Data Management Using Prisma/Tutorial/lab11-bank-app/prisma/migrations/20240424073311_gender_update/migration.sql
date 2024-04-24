/*
  Warnings:

  - You are about to alter the column `gender` on the `Owner` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Owner" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "gender" INTEGER NOT NULL,
    "profileImag" TEXT NOT NULL
);
INSERT INTO "new_Owner" ("email", "firstname", "gender", "id", "lastname", "profileImag") SELECT "email", "firstname", "gender", "id", "lastname", "profileImag" FROM "Owner";
DROP TABLE "Owner";
ALTER TABLE "new_Owner" RENAME TO "Owner";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
