import Wrapper from "@/components/Wrapper";
import Head from "next/head";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Head>
        <title>Amir DEV</title>
      </Head>
      <Wrapper pageIndex={1} className="max-w-2xl text-center flex flex-col justify-center">
        <div className="flex sm:justify-between items-center gap-4 sm:gap-0">
          <div className="text-xl sm:text-3xl uppercase text-WhiteGray font-bold">Hi I&apos;m</div>
          <div className="sm:h-2 sm:w-[30rem] xs:w-[19rem] rounded-sm bg-Orange"></div>
        </div>
        <div className="sm:text-[7.2rem] xs:text-7xl text-5xl text-White font-medium">AMIR HEYDARI</div>
        <div className="mx-auto uppercase font-bold xs:text-2xl text-xl text-Orange text-end mt-8">A Frontend & Mobile developer</div>
        <div className="flex justify-around items-center mt-12 font-medium text-2xl xs:text-2xl child:text-white child-hover:bg-Orange child:uppercase child-hover:text-black child:duration-300 child:p-3 child:rounded-md">
          <Link href={"/contact"}>Contact</Link>
          <Link href={"/portfolio"}>Portfolio</Link>
        </div>
      </Wrapper>
    </>
  );
}
