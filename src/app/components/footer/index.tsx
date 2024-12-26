import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center p-4">
      <Separator />
      <div className="w-full flex justify-center items-center mt-3">
        <Link
          target="_blank"
          href={
            "https://www.linkedin.com/in/ubiratan-da-rosa-rodrigues-b1a717157/"
          }
        >
          <p className="text-muted-foreground text-sm">Developed by U2RDev</p>
        </Link>
      </div>
    </div>
  );
};
