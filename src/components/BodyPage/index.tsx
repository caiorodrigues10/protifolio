import { ReactNode } from "react";
import { LinkButton } from "../LinkButton/LinkButton";
import { NavBar } from "../NavBar/NavBar";

interface BodyPageProps {
  children: ReactNode;
}

const BodyPage: React.FC<BodyPageProps> = ({ children }) => {
  return (
    <div className="flex flex-col w-full h-full">
      <NavBar />
      <div className=" w-full h-full">{children}</div>
    </div>
  );
};

export { BodyPage };
