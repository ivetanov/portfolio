import { MarqueeBanner } from "./components/MarqueeBanner";
import Header from "./components/Header";
import createEventImage from "../src/assets/createEventImage.png";
import eventDetailImage from "../src/assets/eventDetailImage.png";
import eventsCoachImage from "../src/assets/eventsCoachImage.png";
import eventsPlayerImage from "../src/assets/eventsPlayerImage.png";
import eshopHomePage from "../src/assets/eshopHomePage.png";
import brandsPage from "../src/assets/brandsPage.png";
import blog from "../src/assets/blog.png";

import Footer from "./components/Footer";

import { MoveUpRight } from "lucide-react";
import { PhoneMockup } from "./components/PhoneMockUp";
import { TabletMockup } from "./components/TabletMockup";
import { DesktopMockUp } from "./components/DesktopMockUp";

import { useLanguage } from "./i18n/useLanguage";

const App = () => {
  const { texts } = useLanguage();

  const skvadraStack = ["React Native", "Firebase", "Typescript"];
  const eshopStack = ["React", "Firebase", "Tailwind", "AI images"];
  const blogStack = ["Next.js", "Firebase", "Tailwind", "Vercel"];

  return (
    <>
      <Header />
      <main className="font-sans text-foreground mt-20">
        <div className="max-w-7xl lg:mx-auto mx-6">
          {/**Hero section */}
          <section id="home" aria-labelledby="hero-heading">
            <p className="font-mono text-muted-foreground pt-8">
              Iveta Nováková / Portfolio 2026
            </p>
            <h1 id="hero-heading" className="flex flex-col my-12 uppercase">
              <span className="text-4xl lg:text-9xl ml-2">
                {texts.hero.titleFirst}
              </span>
              <span className="text-4xl lg:text-9xl text-primary ml-10 lg:ml-30">
                {texts.hero.titleSecond}
              </span>
            </h1>
            <div className="flex flex-row justify-between items-end mb-10 lg:gap-0 gap-6">
              <p className="text-lg text-muted-foreground max-w-xl lg:ml-30">
                {texts.hero.description}
              </p>
              <div className="lg:mr-16 text-3xl lg:text-6xl">
                I<span className="text-primary">/</span>N
              </div>
            </div>
          </section>
        </div>
        <MarqueeBanner />
        <div className="max-w-7xl md:px-6 lg:mx-auto mx-6">
          {/**Projects */}

          <section id="projects" aria-labelledby="profile-heading">
            <p
              id="projects-heading"
              className="font-mono text-muted-foreground py-8"
            >
              {texts.projects.header}
            </p>
            <h2 className="w-fit lg:w-107.5 mb-16">
              <span className="uppercase text-2xl md:text-5xl">
                {texts.projects.title1}
              </span>
              <span className="uppercase text-2xl md:text-5xl text-muted-foreground">
                {texts.projects.title2}
              </span>
            </h2>
            {/**Skvadra */}
            <article
              aria-labelledby="skvadra-heading"
              className="flex flex-col lg:flex-row w-full justify-start items-start border-t border-muted-foreground"
            >
              <div className="flex flex-col justify-between lg:pr-12 w-full lg:flex-1 h-full">
                <div>
                  <p className="font-mono text-xs sm:text-sm tracking-widest text-primary uppercase mt-8 sm:mt-10">
                    {texts.projects.skvadraHeader}
                  </p>

                  <h3
                    id="skvadra-heading"
                    className="
        mb-6
        mt-8 sm:mt-10 lg:mt-16
        w-full min-w-0
        tracking-tight
        text-4xl sm:text-5xl lg:text-6xl
        wrap-anywhere
      "
                  >
                    Skvadra
                  </h3>

                  <p className="max-w-lg ml-0 sm:ml-6 lg:ml-0 lg:max-w-sm text-sm sm:text-base text-muted-foreground">
                    {texts.projects.skvadraDesc1}
                  </p>

                  <p className="mt-5 sm:mt-6 max-w-lg ml-0 sm:ml-6 lg:ml-0 lg:max-w-sm text-sm sm:text-base text-muted-foreground">
                    {texts.projects.skvadraDesc2}
                  </p>

                  <p className="mt-5 sm:mt-6 max-w-lg ml-0 sm:ml-6 lg:ml-0 lg:max-w-sm text-sm sm:text-base text-muted-foreground">
                    {texts.projects.skvadraDesc3}
                  </p>

                  <div className="flex flex-row flex-wrap gap-3 sm:gap-4 lg:gap-6 my-6 w-full justify-start lg:justify-start">
                    {skvadraStack.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="
              h-fit
              border border-muted-foreground
              text-foreground
              font-mono
              text-center
              p-2 sm:p-3
              text-xs sm:text-sm
              whitespace-nowrap
            "
                        >
                          {item}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <figure className="bg-accent-blue relative overflow-hidden h-150 lg:h-200 mt-0 max-w-lg mx-auto md:max-w-2xl lg:mx-0 w-full lg:w-3/5">
                <PhoneMockup
                  src={createEventImage}
                  alt="Create event form"
                  className="absolute top-14 lg:top-44 left-10 lg:left-18 w-52 -rotate-6"
                />
                <PhoneMockup
                  src={eventDetailImage}
                  alt="Event detail for coach"
                  className="absolute top-23 left-1/2 w-60 -rotate-4 -translate-x-1/2 hover:top-14 hidden md:block"
                />
                <PhoneMockup
                  src={eventsCoachImage}
                  alt="Events UI for coach"
                  className="absolute top-10 lg:top-34 right-8 lg:right-18 w-52 rotate-6"
                />
                <PhoneMockup
                  src={eventsPlayerImage}
                  alt="Events UI for players"
                  className="absolute top-90 right-48 hidden lg:block w-52 rotate-7"
                />
                <div className="w-200 h-200 border border-gray-400 rounded-full"></div>
                <div className="uppercase absolute bottom-5 text-primary text-xl w-40 lg:left-5 right-5">
                  {texts.projects.skvadraImgTitle}
                </div>
                <figcaption className="sr-only">
                  Preview of the Skvadra mobile application
                </figcaption>
              </figure>
            </article>
            {/**React e-shop */}
            <article
              aria-labelledby="skvadra-heading"
              className="flex flex-col lg:flex-row w-full justify-start items-start"
            >
              <figure className="relative overflow-hidden h-120 md:h-150 lg:h-180 mt-0 lg:w-3/5 w-full max-w-lg mx-auto md:max-w-2xl lg:mx-0 bg-primary lg:order-1 order-2">
                <TabletMockup
                  src={eshopHomePage}
                  alt="e-shop home page"
                  className="absolute left-10 md:left-20 top-10 lg:top-20 w-60 lg:w-80 rotate-3 lg:-rotate-3"
                />
                <TabletMockup
                  src={brandsPage}
                  alt="e-shop home page"
                  className="absolute right-10 md:right-40 lg:right-20 top-60 w-60 rotate-4 hidden md:block"
                />
                <div className="uppercase absolute bottom-5 text-background left-5 flex flex-row gap-2 items-center">
                  <div className="text-4xl font-normal text-center">50+</div>
                  <div className="w-30">{texts.projects.eshopImgTitle}</div>
                </div>

                <figcaption className="sr-only">
                  Preview of the Skvadra mobile application
                </figcaption>
              </figure>
              <div className="flex flex-col justify-between lg:pr-0 lg:flex-1 w-full h-fit lg:h-full lg:order-2">
                <div className="lg:ml-10">
                  <p className="font-mono text-xs sm:text-sm tracking-widest text-primary uppercase mt-8 sm:mt-10">
                    {texts.projects.eshopHeader}
                  </p>

                  <h3
                    id="skvadra-heading"
                    className="
        mb-6
        mt-8 sm:mt-10 lg:mt-16
        text-4xl sm:text-5xl lg:text-6xl
        tracking-tight
        w-full min-w-0
      "
                  >
                    React e-shop
                  </h3>

                  <p className="max-w-lg ml-0 sm:ml-6 lg:ml-0 lg:max-w-sm text-sm sm:text-base text-muted-foreground">
                    {texts.projects.eshopDesc1}
                  </p>

                  <p className="max-w-lg ml-0 sm:ml-6 lg:ml-0 lg:max-w-sm text-sm sm:text-base text-muted-foreground mt-5 sm:mt-6">
                    {texts.projects.eshopDesc2}
                  </p>

                  <div className="flex flex-row flex-wrap gap-3 sm:gap-4 lg:gap-6 mt-6 w-full justify-start lg:justify-start">
                    {eshopStack.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="
              h-fit
              border border-muted-foreground
              text-foreground
              font-mono
              text-center
              p-2 sm:p-3
              text-xs sm:text-sm
              whitespace-nowrap
            "
                        >
                          {item}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="flex flex-row gap-10 mb-10 ml-0 lg:ml-10 justify-start lg:justify-start">
                  {/* links */}
                </div>
              </div>{" "}
            </article>
            {/**Blog */}
            <article
              aria-labelledby="blog-heading"
              className="flex flex-col lg:flex-row w-full justify-start items-start lg:h-165"
            >
              <div className="flex flex-col justify-between lg:pr-12 w-full lg:flex-1 h-full lg:h-165">
                <div>
                  <p className="font-mono text-xs sm:text-sm tracking-widest text-primary uppercase mt-8 sm:mt-10">
                    {texts.projects.blogHeader}
                  </p>

                  <h3
                    id="blog-heading"
                    className="
          mb-6
          mt-8 sm:mt-10 lg:mt-16
          text-4xl sm:text-5xl lg:text-6xl
          tracking-tight
          w-full min-w-0
        "
                  >
                    AI meals
                  </h3>

                  <p className="max-w-lg ml-0 sm:ml-6 lg:ml-0 lg:max-w-sm text-sm sm:text-base text-muted-foreground">
                    {texts.projects.blogDesc1}
                  </p>

                  <div className="flex flex-row flex-wrap gap-3 sm:gap-4 lg:gap-6 mt-8 sm:mt-10 lg:mt-16 w-full justify-start">
                    {blogStack.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="
                h-fit
                border border-muted-foreground
                text-foreground
                font-mono
                text-center
                p-2 sm:p-3
                text-xs sm:text-sm
                whitespace-nowrap
              "
                        >
                          {item}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="flex flex-row flex-wrap gap-6 sm:gap-10 mb-10 justify-start">
                  <a
                    href="https://mini-blog-manager.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 sm:mt-10 flex w-fit items-center gap-2 uppercase border-b border-primary pb-1 whitespace-nowrap"
                    aria-label="View blog project"
                  >
                    {texts.projects.viewButton}
                    <MoveUpRight size={18} aria-hidden="true" color="#a8ff25" />
                  </a>

                  <a
                    href="https://github.com/ivetanov/mini-blog-manager"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 sm:mt-10 flex w-fit items-center gap-2 uppercase border-b border-muted-foreground pb-1 whitespace-nowrap"
                    aria-label="View blog GitHub repository"
                  >
                    GITHUB
                    <MoveUpRight size={18} aria-hidden="true" color="#ececec" />
                  </a>
                </div>
              </div>

              <figure className="bg-accent-blue relative overflow-hidden h-70 md:h-110 lg:h-165 mt-0 max-w-lg mx-auto md:max-w-2xl lg:mx-0 w-full lg:w-3/5">
                <DesktopMockUp
                  src={blog}
                  alt="blog AI meals homepage"
                  className="absolute bottom-20 lg:bottom-40 left-1/2 w-60 md:w-100 lg:w-130 -translate-x-1/2"
                />

                <div className="uppercase absolute bottom-5 text-primary text-5xl lg:text-8xl lg:w-40 right-5 lg:right-5">
                  03
                </div>

                <figcaption className="sr-only">
                  Preview of the AI Meals blog
                </figcaption>
              </figure>
            </article>{" "}
          </section>

          {/**Profile */}
          <section
            id="profile"
            className="lg:border-t border-muted-foreground pb-16"
          >
            <h2
              id="profile-heading"
              className="font-mono text-muted-foreground pt-8"
            >
              {texts.profile.header}
            </h2>
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 flex flex-col justify-between ">
                <div>
                  <h2 className="w-fit text-center lg:text-left lg:w-80 my-12 mx-auto lg:mx-0">
                    <span className="uppercase text-2xl lg:text-6xl">
                      {texts.profile.title1}{" "}
                    </span>
                    <span className="uppercase text-2xl lg:text-6xl text-muted-foreground pl-1">
                      {texts.profile.title2}
                    </span>
                  </h2>
                  <p className="mx-auto max-w-lg lg:max-w-md lg:w-fit lg:pr-6 text-muted-foreground mb-6 lg:ml-0 text-center lg:text-left">
                    {texts.profile.desc1}
                  </p>
                  <p className="mx-auto max-w-lg lg:max-w-md lg:w-fit lg:pr-6 text-muted-foreground mb-6 lg:ml-0 text-center lg:text-left">
                    {texts.profile.desc2}
                  </p>
                  <p className="mx-auto max-w-lg lg:max-w-md lg:w-fit lg:pr-6 text-muted-foreground mb-6 lg:ml-0 text-center lg:text-left">
                    {texts.profile.desc3}
                  </p>
                </div>
                <a
                  href="#"
                  className="mb-10 lg:mb-0 mt-10 flex w-fit items-center gap-2 uppercase border-b border-primary pb-1 mx-auto lg:ml-0"
                  aria-label="Download resume"
                >
                  {texts.profile.resumeText}
                  <MoveUpRight size={18} aria-hidden="true" color="#a8ff25" />
                </a>
              </div>

              {/**Portrait */}
              <div className="lg:w-1/2">
                <div
                  className="relative aspect-square w-80 lg:w-125 bg-lime-400 p-10 mx-auto lg:mx-0"
                  style={{
                    backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.08) 1px, transparent 1px)`,
                    backgroundSize: "16.66% 12.5%",
                  }}
                >
                  <div className="absolute bottom-8 left-10">
                    <h1 className="text-4xl uppercase leading-tight text-background">
                      Iveta
                      <br />
                      Nováková
                    </h1>

                    <p className="mt-6 font-mono text-sm text-background">
                      33 {texts.profile.age} / Brno
                    </p>
                  </div>
                </div>
                <div className="mt-16 grid w-full max-w-125 grid-cols-2 gap-x-10 gap-y-12 mx-auto lg:mx-0">
                  <div className="min-w-0 border-t-2 border-foreground">
                    <p className="pt-3 font-mono text-muted-foreground">
                      {texts.profile.basedIn}
                    </p>
                    <p className="pt-5">{texts.profile.state}</p>
                  </div>

                  <div className="min-w-0 border-t-2 border-foreground">
                    <p className="pt-3 font-mono text-muted-foreground">
                      {texts.profile.focus}
                    </p>
                    <p className="pt-5">web and mobile frontend development</p>
                  </div>

                  <div className="min-w-0 border-t-2 border-foreground">
                    <p className="pt-3 font-mono text-muted-foreground">
                      {texts.profile.currently}
                    </p>
                    <p className="pt-5">{texts.profile.currentlyText}</p>
                  </div>

                  <div className="min-w-0 border-t-2 border-foreground">
                    <p className="pt-3 font-mono text-muted-foreground">
                      {texts.profile.lang}
                    </p>
                    <p className="pt-5">{texts.profile.langText}</p>
                  </div>
                </div>{" "}
              </div>
            </div>
          </section>

          {/**Experience */}
          <section
            id="experience"
            className="border-t border-muted-foreground flex flex-col lg:flex-row justify-between"
          >
            <div className="lg:w-1/5">
              <h2
                id="profile-heading"
                className="font-mono text-muted-foreground pt-14"
              >
                {texts.experience.header}
              </h2>
              <p className="text-center lg:text-left lg:w-70 my-8 lg:my-12 uppercase text-4xl lg:text-6xl">
                {texts.experience.title}
              </p>
            </div>

            <div className="lg:w-3/5 lg:pt-16 flex flex-col gap-12 mb-16">
              {/**wb */}
              {/* frontend */}
              <div className="grid grid-cols-1 gap-3 border-t border-muted-foreground pt-4 md:grid-cols-[120px_minmax(0,1fr)] md:gap-x-6 xl:grid-cols-[140px_minmax(0,1fr)_180px]">
                <p className="font-mono text-muted-foreground whitespace-nowrap">
                  {texts.experience.exp1date}
                </p>

                <div className="flex min-w-0 flex-col font-sans">
                  <p className="text-xl text-foreground">
                    {texts.experience.exp1title}
                  </p>

                  <p className="pt-2 text-lg text-muted-foreground">
                    {texts.experience.exp1desc}
                  </p>
                </div>

                <p className="font-mono text-primary md:col-start-2 xl:col-start-3 xl:row-start-1">
                  React / TypeScript / React Native
                </p>
              </div>

              {/* tester */}
              <div className="grid grid-cols-1 gap-3 border-t border-muted-foreground pt-4 md:grid-cols-[120px_minmax(0,1fr)] md:gap-x-6 xl:grid-cols-[140px_minmax(0,1fr)_180px]">
                <p className="font-mono text-muted-foreground whitespace-nowrap">
                  2023
                </p>

                <div className="flex min-w-0 flex-col font-sans">
                  <p className="text-xl text-foreground">
                    {texts.experience.exp2title}
                  </p>

                  <p className="pt-2 text-lg text-muted-foreground">
                    {texts.experience.exp2desc}
                  </p>
                </div>

                <p
                  className="
      font-mono text-primary
      md:col-start-2
      xl:col-start-3 xl:row-start-1
    "
                >
                  {texts.experience.exp2stack}
                </p>
              </div>

              {/* rekvalifikace */}
              <div
                className="
    grid grid-cols-1 gap-3
    border-t border-muted-foreground pt-4
    md:grid-cols-[120px_minmax(0,1fr)]
    md:gap-x-6
    xl:grid-cols-[140px_minmax(0,1fr)_180px]
  "
              >
                <p className="font-mono text-muted-foreground whitespace-nowrap">
                  2022 - 2023
                </p>

                <div className="flex min-w-0 flex-col font-sans">
                  <p className="text-xl text-foreground">
                    {texts.experience.exp3title}
                  </p>

                  <p className="pt-2 text-lg text-muted-foreground">
                    {texts.experience.exp3desc}
                  </p>
                </div>

                <p
                  className="
      font-mono text-primary
      md:col-start-2
      xl:col-start-3 xl:row-start-1
    "
                >
                  {texts.experience.exp3stack}
                </p>
              </div>
              <div className="flex flex-row flex-wrap gap-6 mt-4 justify-center lg:justify-start">
                <div className="w-fit py-2 px-4 font-mono uppercase bg-primary text-background">
                  React
                </div>
                <div className="border border-muted-foreground w-fit py-2 px-4 font-mono uppercase">
                  Typescript
                </div>
                <div className="w-fit py-2 px-4 font-mono uppercase bg-primary text-background">
                  React native
                </div>
                <div className="border border-muted-foreground w-fit py-2 px-4 font-mono uppercase">
                  Tailwind
                </div>
                <div className="border border-muted-foreground w-fit py-2 px-4 font-mono uppercase">
                  Firebase
                </div>
                <div className="border border-muted-foreground w-fit py-2 px-4 font-mono uppercase">
                  Git
                </div>
                <div className="border border-muted-foreground w-fit py-2 px-4 font-mono uppercase">
                  rest API
                </div>
                <div className="border border-muted-foreground w-fit py-2 px-4 font-mono uppercase">
                  Figma
                </div>
                <div className="border border-muted-foreground w-fit py-2 px-4 font-mono uppercase">
                  Penpot
                </div>
              </div>
            </div>
          </section>

          {/**Contact me */}
          <section className="border-t border-muted-foreground py-12">
            <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="max-w-md text-4xl uppercase">
                  {texts.contact.title}
                </h2>

                <p className="mt-6 text-muted-foreground">
                  {texts.contact.subtitle}
                </p>

                <a
                  href="mailto:novaiv.ivet@gmail.com?subject=Portfolio%20-%20spolupráce"
                  className="mt-3 inline-block font-mono underline underline-offset-4 hover:text-primary"
                >
                  novaiv.ivet@gmail.com
                </a>
              </div>

              <a
                href="mailto:novaiv.ivet@gmail.com"
                className="bg-primary px-10 py-6 font-mono uppercase text-background transition-opacity hover:opacity-80 whitespace-nowrap"
              >
                {texts.contact.getInTouch} →
              </a>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default App;
