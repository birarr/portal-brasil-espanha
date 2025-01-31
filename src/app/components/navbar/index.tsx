import Link from "next/link";
import { ModeToggle } from "../mode-toggle";

export const Navbar = () => {
  return (
    <Link href={`/`}>
      <div className="w-full h-80 bg-bannerBg bg-contain bg-center bg-no-repeat relative flex justify-end">
        <div className="absolute">
          <ModeToggle />
        </div>
      </div>
    </Link>
  );
};
