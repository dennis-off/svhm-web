import { IconContext } from "react-icons";
import { LuBedDouble, LuFrown } from "react-icons/lu";

export function GeneralError() {
  return (
    <div className="flex h-screen flex-col items-center justify-start py-32">
      <div className="flex flex-col items-center justify-center">
        <IconContext.Provider value={{ size: "24rem" }}>
          <LuFrown />
        </IconContext.Provider>
        <h2 className="text-center text-3xl font-bold md:text-4xl lg:text-start">
          <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] bg-clip-text text-transparent">
            Opps!{" "}
          </span>
          Irgendwas ist{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-transparent">
            schief{" "}
          </span>
          gelaufen.
        </h2>
      </div>
    </div>
  );
}

export default function NotFoundComponent() {
  return (
    <div className="flex h-screen flex-col items-center justify-start py-32">
      <div className="flex flex-col items-center justify-center">
        <IconContext.Provider value={{ size: "24rem" }}>
          <LuBedDouble />
        </IconContext.Provider>
        <h2 className="text-center text-3xl font-bold md:text-4xl lg:text-start">
          <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] bg-clip-text text-transparent">
            404:{" "}
          </span>
          Seite nicht{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-transparent">
            gefunden!
          </span>
        </h2>
      </div>
    </div>
  );
}
