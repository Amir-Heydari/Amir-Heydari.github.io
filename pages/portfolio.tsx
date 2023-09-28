import Head from "next/head";
import Link from "next/link";
import Wrapper from "@/components/Wrapper";
import { projects } from "@/Data/Data";
import { AiFillGithub, AiFillEye } from "react-icons/ai"
import Services from "@/components/Services";
import { countUpItems } from "@/Data/Data";
import MyCountUp from "@/components/CountUp";
import { useInView } from "react-intersection-observer";
export default function Portfolio() {
  const { ref, inView } = useInView({
    threshold: 0.5
  })
  return (
    <>
      <Head>
        <title>Amir.H | Portfolio</title>
      </Head>
      <Wrapper pageIndex={3}>
        <div className="flex flex-col pt-40 items-center text-center">
          <div className="uppercase font-semibold text-sm text-WhiteGray">
            - Portfolio
          </div>
          <div className="font-semibold text-3xl mt-8 text-White uppercase">
            My Masterpiece Collections
          </div>
          <p className="text-WhiteGray text-sm mt-8 leading-7 max-w-3xl">
            I specialize in developing custom web and mobile applications using the latest technologies and agile methodologies. My goal is to create exceptional user experiences and deliver measurable business outcomes.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-8 md:px-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-Blur p-4  rounded-lg"
              >
                <div className="w-full  relative group">
                  <img
                    src={project.img}
                    alt=""
                  />
                </div>
                <div className="text-White mt-2 text-start">{project.name}</div>
                <div className="flex mt-2 flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="bg-Blur rounded-full py-2 px-3 text-white text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* -----Services ----- */}
        <Services />
        {/* -------Count Up
        <div className="flex justify-center gap-12 flex-wrap" ref={ref}>
          {countUpItems.map(item => (
            <div key={item.id} className="text-center">
              <div className="text-Orange text-3xl">
                {inView && <MyCountUp start={0} end={item.number} duration={3} />}+
              </div>
              <div className="text-WhiteGray mt-2 text-sm">{item.text}</div>
            </div>
          ))}
        </div> */}
      </Wrapper>
    </>
  );
}
