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
      <div className="flex bg-gradient-to-t w-full h-[100vh] from-black to-gray-400">
        <div className="flex justify-between bg-[url('/images/polygons.png')] w-full h-full z-0">
          <div className="flex absolute justify-start items-end w-full h-full z-[2]">
            <Image
              src="/images/avatarHello.png"
              alt="Hello!"
              width="520px"
              height="470px"
            />
          </div>
          <div className="flex flex-col w-full justify-start items-end text-right pr-28 pt-28 z-1 gap-20">
            <div className="max-w-lg">
              <Heading className="text-bold text-white" size="lg">
                About me
              </Heading>
              <Heading className="text-bold text-white" size="sm">
                I am a student of information systems at Unifafibe University.
                And I graduated in systems development technician at Etec
                Bebedouro. I'm currently working as a junior developer at
                ImobPower company, where I use JavaScript, ReactJS, NextJS and
                consume the Rest and RestFull APIs.
              </Heading>
            </div>
            <div className="max-w-lg">
              <Heading className="text-bold text-white" size="lg">
                My objective
              </Heading>
              <Heading className="text-bold text-white" size="sm">
                My goal is to become an iconic figure in the world of
                technology, where I can develop a technology that can contribute
                positively to all society and in any area, and that everyone can
                enjoy my creation.
              </Heading>
            </div>
          </div>
        </div>
      </div>
      <div className="flex bg-gradient-to-t w-full h-[100vh] from-gray-400 to-black">
        <div className="flex justify-between bg-[url('/images/rounded.png')] w-full h-full z-0"></div>
      </div>
    </BodyPage>
  );
};

export default Home;
