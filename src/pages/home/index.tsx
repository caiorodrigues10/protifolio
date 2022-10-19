import Image from "next/image";
import { BodyPage } from "../../components/BodyPage";
import { Heading } from "../../components/Heading/Heading";

const Home: React.FC = () => {
  return (
    <BodyPage>
      <div className="vertical flex bg-gradient-to-t w-full h-[100vh] from-gray-400 to-black">
        <div className="flex flex-col w-full justify-center pl-28">
          <Heading className="text-bold" size="exlg">
            Hi,
          </Heading>
          <Heading size="lg">my names is</Heading>
          <Heading className="text-bold" size="exlg">
            Caio Henrique Rodrigues
          </Heading>
          <Heading size="lg">I am full-stack developer</Heading>
        </div>
        <div className="absolute flex justify-end items-end w-full h-full z-[2]">
          <Image
            src="/images/avatarHi.png"
            alt="Hello!"
            width="520px"
            height="470px"
          />
        </div>
        <div className="separator reverse" />
        <div className="conector w-[400px] h-full" />
      </div>
    </BodyPage>
  );
};

export default Home;
