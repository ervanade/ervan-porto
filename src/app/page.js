import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ervan Ade Wijaya</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <section className="hero bg-white">
          <div className="hero container mx-auto max-w-7xl flex items-center flex-col-reverse  lg:flex-row px-7 py-5 lg:py-12">
            <div className="hero__left w-full lg:w-1/2">
              <h5 className="text-[#26B2E6] font-semiboldbold lg:text-sm">
                ERVAN ADE WIJAYA{" "}
              </h5>
              <h1 className="text-[#22293E] font-bold text-2xl lg:text-6xl mt-1 mb-6">
                Find Your Way Of Success
              </h1>
              <p className="text-[#22293E] font-normal text-lg lg:text-2xl">
                We help you to increase self-confidence and train yourself in a
                direction, and make you more creative in developing a work
              </p>
              <div className="hero__cta mt-10 flex items-center space-x-8">
                <button className=" px-7 lg:px-14 py-5 bg-[#26B2E6] text-white rounded-lg">
                  Get Started
                </button>
                <button className=" px-7 lg:px-14 py-5 bg-[#F7F7FD] text-[#A2B3BF] rounded-lg">
                  Our Services
                </button>
              </div>
            </div>
            <div className="hero__right w-full lg:w-1/2 mb-8 lg:mb-0">
              <img
                src="/assets/foto-ervan-3.svg"
                alt="logo"
                className="lg:h-auto lg:w-full"
              />
            </div>
          </div>
        </section>
        <section className="learnings bg-[#EFFBFF] py-10 text-[#22293E]">
          <div className="learnings container mx-auto max-w-7xl  px-7 py-7 lg:py-12">
            <div className="title mb-9 lg:w-1/2 space-y-4">
              <p className="text-[#26B2E6] font-semibold text-xl">
                LEARNINGS
              </p>
              <h1 className="font-semibold text-2xl lg:text-5xl">Online Learning Platform International Curriculum</h1>
              <p className="text-xl lg:text-2xl">
                Study and understand the material class is more relaxed without
                time limit.
              </p>
            </div>
            <div className="content grid lg:grid-cols-4 lg:gap-16 gap-y-8">
              <div className="card transition ease-in-out delay-70 hover:bg-[#26B2E6] hover:text-white rounded-xl h-80 w-full bg-white px-7 py-7">
                <Image
                  src="/assets/Mask Group.svg"
                  alt="logo"
                  height={80}
                  width={80}
                  className="mb-7"
                />
                <h1 className="text-xl  font-semibold mb-3">Starter</h1>
                <p className="text-sm ">
                  Free class access for that start learning code and design
                </p>
                <div className="div flex justify-center w-full">
                  <button className="mt-7 px-16 py-2 rounded-lg bg-[#44E4C9] text-white">
                    See Class
                  </button>
                </div>
              </div>
              <div className="card transition ease-in-out delay-70 hover:bg-[#26B2E6] hover:text-white rounded-xl h-80 w-full bg-white px-7 py-7">
                <Image
                  src="/assets/Mask Group.svg"
                  alt="logo"
                  height={80}
                  width={80}
                  className="mb-7"
                />
                <h1 className="text-xl  font-semibold mb-3">Starter</h1>
                <p className="text-sm ">
                  Free class access for that start learning code and design
                </p>
                <div className="div flex justify-center w-full">
                  <button className="mt-7 px-16 py-2 rounded-lg bg-[#44E4C9] text-white">
                    See Class
                  </button>
                </div>
              </div>
              <div className="card transition ease-in-out delay-70 hover:bg-[#26B2E6] hover:text-white rounded-xl h-80 w-full bg-white px-7 py-7">
                <Image
                  src="/assets/Mask Group.svg"
                  alt="logo"
                  height={80}
                  width={80}
                  className="mb-7"
                />
                <h1 className="text-xl  font-semibold mb-3">Starter</h1>
                <p className="text-sm ">
                  Free class access for that start learning code and design
                </p>
                <div className="div flex justify-center w-full">
                  <button className="mt-7 px-16 py-2 rounded-lg bg-[#44E4C9] text-white">
                    See Class
                  </button>
                </div>
              </div>
              <div className="card transition ease-in-out delay-70 hover:bg-[#26B2E6] hover:text-white rounded-xl h-80 w-full bg-white px-7 py-7">
                <Image
                  src="/assets/Mask Group.svg"
                  alt="logo"
                  height={80}
                  width={80}
                  className="mb-7"
                />
                <h1 className="text-xl  font-semibold mb-3">Starter</h1>
                <p className="text-sm ">
                  Free class access for that start learning code and design
                </p>
                <div className="div flex justify-center w-full">
                  <button className="mt-7 px-16 py-2 rounded-lg bg-[#44E4C9] text-white">
                    See Class
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>
        <section className="about h-screen bg-white w-full">
          <div className="about container mx-auto max-w-7xl  px-7 py-7 lg:py-12">
            <div style={{ width: '100%', height: '85vh' }} className="relative">

              {/* <Image src="https://api.adventureranddiscoverer.com/uploads/images/2023/04/image_1280x_6433a87a06e93.jpg" layout="fill"
                objectFit="cover" alt="gambar" loader={loaderProp} /> */}
            </div>
            {/* <Map /> */}
          </div>
        </section>
      </main>
      <footer></footer>
    </>
  )
}
