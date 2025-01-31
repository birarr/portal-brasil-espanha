import { getTutorialById } from "@/db/queries";
import Image from "next/image";
type Params = Promise<{ tutorialsId: string }>;

export default async function TutorialDetails(props: { params: Params }) {
  const params = await props.params;
  const tutorialId = params.tutorialsId;
  const tutorial = await getTutorialById(tutorialId);

  return (
    <div className="p-8 flex justify-center items-center flex-col gap-4">
      <h1 className="text-4xl">{tutorial?.title} </h1>
      <div
        dangerouslySetInnerHTML={{ __html: tutorial?.description as string }}
        className="bg-inherit"
      />
      <Image
        src={tutorial?.titleImage as string}
        alt={"tutorial"}
        width={800}
        height={500}
      />
      <div className="flex flex-col gap-8 justify-center items-center mt-4">
        <div className="flex flex-col gap-2 items-center justify-center w-full">
          <div
            dangerouslySetInnerHTML={{ __html: tutorial?.textOne as string }}
            className="bg-inherit"
          />
          <Image
            src={tutorial?.imageOne as string}
            alt={"tutorial"}
            width={800}
            height={500}
          />
        </div>
        <div className="flex flex-col gap-2 items-center justify-center w-full">
          <div
            dangerouslySetInnerHTML={{ __html: tutorial?.textTwo as string }}
            className="bg-inherit"
          />
          <Image
            src={tutorial?.imageTwo as string}
            alt={"tutorial"}
            width={800}
            height={500}
          />
        </div>
        <div className="flex flex-col items-center gap-2 justify-center w-full">
          <div
            dangerouslySetInnerHTML={{ __html: tutorial?.textThree as string }}
            className="bg-inherit"
          />
          <Image
            src={tutorial?.imageThree as string}
            alt={"tutorial"}
            width={800}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}
