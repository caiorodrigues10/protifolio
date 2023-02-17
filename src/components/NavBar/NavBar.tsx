import { useRouter } from "next/router";
import { useState } from "react";
import { LinkButton } from "../LinkButton/LinkButton";

interface Link {
  link: string;
  name: string;
}

export interface NavBarProps {
  links: Link[];
}

const NavBar: React.FC<NavBarProps> = ({ links }) => {
  const { asPath, push } = useRouter();

  return (
    <div className="flex gap-5 w-full absolute justify-end pr-12 pt-4 z-[4]">
      {links.map((e, index) => (
        <LinkButton
          key={index}
          active={asPath === `/home${e.link}`}
          onClick={() => {
            push(e.link);
          }}
        >
          {e.name}
        </LinkButton>
      ))}
    </div>
  );
};

export { NavBar };
