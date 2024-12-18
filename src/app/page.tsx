// import { ModeToggle } from "./components/mode-toggle";
import { AccordionComponent } from "./components/accordion";
import { db } from "@/db";
import { Navbar } from "./components/navbar";
import { Separator } from "@/components/ui/separator";
import { NewsComponent } from "./components/news-component";

export default function Home() {
  return (
    <div>
      <div className="w-full">
        <Navbar />
      </div>
      <Separator className="w-full my-4" />
      <div className="w-full flex justify-center">
        <NewsComponent />
      </div>
      <div className="w-full flex justify-center">
        <div className="w-full p-4 md:w-8/12 md:p-0">
          {db?.map((item, index) => (
            <AccordionComponent
              data={item?.data}
              type={item?.type}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
