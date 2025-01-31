import { getTutorials } from "@/db/queries";
import { TutorialCard } from "../tutorial-card";
import { Navbar } from "../navbar";
import Link from "next/link";

export const TutorialsList = async () => {
  const tutorials = await getTutorials();

  return (
    <div>
      <Navbar />
      <div className="p-6 w-fullr">
        <h1 className="text-4xl mb-5">Tutoriais</h1>
        <div className="w-full">
          {tutorials?.map((tutorial, index) => (
            <Link
              href={`/tutorials/${tutorial.id}`}
              className="block w-full"
              key={index}
            >
              <TutorialCard data={tutorial} index={index} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
