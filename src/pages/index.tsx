import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Home: NextPage = () => {
  const { push } = useRouter();
  useEffect(() => {
    push("/home");
  }, [push]);
  return <div />;
};

export default Home;
