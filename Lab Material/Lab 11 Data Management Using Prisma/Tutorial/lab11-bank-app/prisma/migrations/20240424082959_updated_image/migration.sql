/*
  Warnings:

  - You are about to drop the column `profileImag` on the `Owner` table. All the data in the column will be lost.
  - Added the required column `profileImage` to the `Owner` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Owner" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "profileImage" TEXT NOT NULL
);
INSERT INTO "new_Owner" ("email", "firstname", "gender", "id", "lastname") SELECT "email", "firstname", "gender", "id", "lastname" FROM "Owner";
DROP TABLE "Owner";
ALTER TABLE "new_Owner" RENAME TO "Owner";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
