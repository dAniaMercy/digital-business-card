CREATE TABLE "Profile" ("id" INTEGER NOT NULL, "name" TEXT NOT NULL, "description" TEXT NOT NULL, CONSTRAINT "Profile_pkey" PRIMARY KEY ("id"));
CREATE TABLE "Link" ("id" SERIAL NOT NULL, "label" TEXT NOT NULL, "url" TEXT NOT NULL, "profileId" INTEGER NOT NULL, CONSTRAINT "Link_pkey" PRIMARY KEY ("id"));
CREATE TABLE "Skill" ("id" SERIAL NOT NULL, "name" TEXT NOT NULL, "profileId" INTEGER NOT NULL, CONSTRAINT "Skill_pkey" PRIMARY KEY ("id"));
CREATE TABLE "Experience" ("id" SERIAL NOT NULL, "company" TEXT NOT NULL, "position" TEXT NOT NULL, "period" TEXT NOT NULL, "achievements" TEXT[], "profileId" INTEGER NOT NULL, CONSTRAINT "Experience_pkey" PRIMARY KEY ("id"));
CREATE TABLE "Project" ("id" SERIAL NOT NULL, "name" TEXT NOT NULL, "description" TEXT NOT NULL, "url" TEXT, "profileId" INTEGER NOT NULL, CONSTRAINT "Project_pkey" PRIMARY KEY ("id"));
ALTER TABLE "Link" ADD CONSTRAINT "Link_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "Skill" ADD CONSTRAINT "Skill_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "Experience" ADD CONSTRAINT "Experience_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "Project" ADD CONSTRAINT "Project_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;
