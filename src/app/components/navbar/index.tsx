import { ModeToggle } from "../mode-toggle";

export const Navbar = () => {
  return (
    <div className="w-full h-80 bg-bannerBg bg-center bg-contain bg-no-repeat relative flex justify-end">
      <div className="absolute m-8">
        <ModeToggle />
      </div>
    </div>
  );
};
