import { ReactNode, useState } from "react";
import { LinkButton } from "../LinkButton/LinkButton";

const NavBar: React.FC = () => {
  const [active, setActive] = useState([false, false, false, false, false]);

  return (
    <div className="flex gap-5 w-full absolute justify-end pr-12 pt-4 z-[4]">
      <LinkButton
        active={active[0]}
        onClick={() => setActive([true, false, false, false, false])}
      >
        Home
      </LinkButton>
      <LinkButton
        active={active[1]}
        onClick={() => setActive([false, true, false, false, false])}
      >
        About me
      </LinkButton>
      <LinkButton
        active={active[2]}
        onClick={() => setActive([false, false, true, false, false])}
      >
        My Projects
      </LinkButton>
      <LinkButton
        active={active[3]}
        onClick={() => setActive([false, false, false, true, false])}
      >
        Contacts
      </LinkButton>
      <LinkButton
        active={active[4]}
        onClick={() => setActive([false, false, false, false, true])}
      >
        My Skills
      </LinkButton>
    </div>
  );
};

export { NavBar };
