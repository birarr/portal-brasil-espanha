import { cache } from "react";
import { db } from "./drizzle";
import { tutorialsTable } from "./schema";
import { TutorialsDto } from "./types";
import { eq } from "drizzle-orm";

export const getTutorials = cache(async (): Promise<TutorialsDto[]> => {
  const tutorials = await db.select().from(tutorialsTable);

  return tutorials;
});

export const getTutorialById = cache(
  async (id: string): Promise<TutorialsDto | undefined> => {
    // const resume = await db.query.resumes.findFirst({
    //   where: eq(resumes.id, id),
    // });

    const tutorial = await db
      .select()
      .from(tutorialsTable)
      .where(eq(tutorialsTable.id, id));

    return tutorial[0];
  }
);
