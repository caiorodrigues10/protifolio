import { ReactNode } from "react";
import { NavBar } from "../NavBar/NavBar";

interface BodyPageProps {
  children: ReactNode;
}

const BodyPage: React.FC<BodyPageProps> = ({ children }) => {
  return (
    <div className="flex flex-col w-full h-full">
      <NavBar
        links={[
          { name: "Home", link: "" },
          { name: "About me", link: "#about" },
          { name: "My Projects", link: "#projects" },
          { name: "Contacts", link: "#contacts" },
          { name: "My Skills", link: "#skills" },
        ]}
      />
      <div className=" w-full h-full">{children}</div>
    </div>
  );
};

export { BodyPage };
