import { TutorialsDto } from "@/db/types";
import Image from "next/image";

interface TutorialCardprops {
  data: TutorialsDto;
  index: number;
}

export const TutorialCard = ({ data, index }: TutorialCardprops) => {
  return (
    <div className="w-full h-screen">
      <div className="flex flex-col gap-2">
        <Image
          src={data?.titleImage}
          alt={"tutorial"}
          width={300}
          height={200}
        />
        <p>{`${index + 1}. ${data?.title}`}</p>
      </div>
    </div>
  );
};
