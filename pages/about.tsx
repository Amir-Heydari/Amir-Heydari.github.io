import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Wrapper from "@/components/Wrapper";
import { skills } from "@/Data/Data";
import Skills from "@/components/Skills";
import About from "@/public/about.jpg"
export default function about() {
  return (
    <>
      <Head>
        <title>AMIR.H | About</title>
      </Head>
      <Wrapper pageIndex={2}>
        <div className="flex flex-col gap-12 lg:flex-row items-center justify-center mb-12 min-h-screen lg:mb-0 pt-28 lg:pt-0">
          <Image
            src={About}
            width={300}
            height={300}
            alt={"about image"}
          />
          <div className="lg:w-1/2 lg:ml-8 max-w-md md:max-w-xl">
            <div className="uppercase font-semibold text-sm text-WhiteGray">
              - Introduction
            </div>
            <div className="font-semibold text-3xl mt-8 text-White uppercase">
              FrontEnd & Mobile Developer
            </div>
            <p className="text-WhiteGray text-sm mt-8 leading-7">
              {" "}
              Hey, This is your tech wizard! I craft iOS and Android magic spells, sprinkle TypeScript and JavaScript charms, and turn coding challenges into adventure quests. Lets create digital wonders together – promise, no debugging spells, just good vibes!
            </p>
            <div className="flex gap-8 mt-8">
              <Link
                href="/contact"
                className="text-Orange font-semibold text-sm uppercase hover:underline"
              >
                Contact Me
              </Link>
              <a
                href="/pdf/resume.pdf"
                download
                className="text-Orange font-semibold text-sm uppercase hover:underline"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
        <Skills skills={skills} />
      </Wrapper>
    </>
  );
}
