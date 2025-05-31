"use client";
// React
import { useState } from "react";
// Next
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
// Components
import data from "@/data/projects.json";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ThreeDMarquee } from "../ui/3d-marquee";

// Media
import Website1 from "media/projects/websites/1.png"
import Website2 from "media/projects/websites/2.png"
import Website3 from "media/projects/websites/3.png"
import Website4 from "media/projects/websites/4.png"
import Website5 from "media/projects/websites/5.png"
import Website6 from "media/projects/websites/6.png"
import Website7 from "media/projects/websites/7.png"
import Website8 from "media/projects/websites/8.png"
import Ecommerce1 from "media/projects/ecommerce/1.png"
import Ecommerce2 from "media/projects/ecommerce/2.png"
import Lp1 from "media/projects/landing-pages/1.png"
import Lp2 from "media/projects/landing-pages/2.png"
import Lp3 from "media/projects/landing-pages/3.png"
import Lp4 from "media/projects/landing-pages/4.png"
import Lp5 from "media/projects/landing-pages/5.png"
import Lp6 from "media/projects/landing-pages/6.png"
import Lp7 from "media/projects/landing-pages/7.png"
import Lp8 from "media/projects/landing-pages/8.png"
import Lp9 from "media/projects/landing-pages/9.png"
import Lp10 from "media/projects/landing-pages/10.png"
import Lp11 from "media/projects/landing-pages/11.png"
import Lp12 from "media/projects/landing-pages/12.png"
import Lp13 from "media/projects/landing-pages/13.png"
import Lp14 from "media/projects/landing-pages/14.png"
import Lp15 from "media/projects/landing-pages/15.png"
import Lp16 from "media/projects/landing-pages/16.png"
import EmailTemplates1 from "media/projects/email-templates/1.png"
import EmailTemplates2 from "media/projects/email-templates/2.png"
import EmailTemplates3 from "media/projects/email-templates/3.png"
import EmailTemplates4 from "media/projects/email-templates/4.png"
import EmailTemplates5 from "media/projects/email-templates/5.png"
import EmailTemplates6 from "media/projects/email-templates/6.png"
import EmailTemplates7 from "media/projects/email-templates/7.png"
import Eye from "media/projects/eye.png"

type ProjectData = {
  [key: string]: [StaticImageData, string[], string][];
};

const projects: ProjectData = {
  all: [
    [
      Website1,
      ["Nextjs 13", "Bootstrap 5", "Jquery"],
      "https://crystallitedigital.com/",
    ],
    [
      Website2,
      ["Nextjs 14", "Tailwind Css", "Shadcn Ui"],
      "https://infinityanimations.com/",
    ],
    [
      Ecommerce1,
      ["HTML 5", "CSS 3", "Bootstrap 5", "Jquery", "Javascript"],
      "https://fsf-mart-pk.netlify.app/",
    ],
    [
      Ecommerce2,
      [
        "Nextjs 14",
        "Tailwind Css",
        "React Hook Form",
        "Shadcn Ui",
        "Magic Ui",
        "Reactjs 18",
        "Typescript",
      ],
      "https://ecommerce-nextjs-sandy-one.vercel.app/",
    ],
    [
      Lp1,
      ["HTML 5", "CSS 3", "Jquery", "Slick"],
      "https://jumpto1.com/children-book-illustration-services/",
    ],
    [
      Lp2,
      ["HTML 5", "CSS 3", "Bootstrap 5", "Jquery", "Embla"],
      "https://jumpto1.com/ios-app-development-services/",
    ],
    [
      Lp3,
      ["HTML 5", "CSS 3", "Bootstrap 5", "Jquery", "Slick"],
      "https://jumpto1.com/page-view/",
    ],
    [
      Lp4,
      ["HTML 5", "CSS 3", "Bootstrap 5", "Jquery", "Slick"],
      "https://jumpto1.com/page-view-1/",
    ],
    [
      Website3,
      [
        "HTML 5",
        "CSS 3",
        "Bootstrap 5",
        "Php",
        "Jquery",
        "Javascript",
        "Slick",
      ],
      "https://portfolio.mhrizwan.com/web-apps/001/",
    ],
    [
      Lp5,
      ["HTML 5", "CSS 3", "Bootstrap 5", "Jquery", "Embla", "GSAP"],
      "https://seoresultspro.com/seo-services/",
    ],
    [
      Website4,
      ["HTML 5", "Tailwind CSS", "Javascript", "Embla"],
      "https://portfolio.mhrizwan.com/websites/001/",
    ],
    [
      Website5,
      ["Nextjs 13", "Tailwind CSS", "Jquery", "Javascript", "Embla"],
      "https://bestsellingpublisher.com/",
    ],
    [
      Website6,
      [
        "Nextjs 14",
        "Tailwind CSS",
        "Javascript",
        "Swiper",
        "Slick",
        "Material Tailwind",
      ],
      "https://webiste-design-hub.vercel.app/",
    ],
    [
      Website7,
      ["Nextjs 14", "Tailwind CSS"],
      "https://www.mini-investments.net/",
    ],
    [
      Lp6,
      ["HTML 5", "CSS 3", "Bootstrap 5", "Jquery", "Slick"],
      "https://www.bookwritingcube.com/children-book-illustrator/",
    ],
    [
      Lp7,
      ["HTML 5", "CSS 3", "Bootstrap 5", "Jquery", "Slick"],
      "https://www.bookpublishingservice.us/",
    ],
    [
      Lp8,
      ["HTML 5", "CSS 3", "Bootstrap 5", "Jquery", "Slick"],
      "https://www.bookwritingcube.com/amazon-book-publishing-services/",
    ],
    [
      Website8,
      ["HTML5", "CSS3", "Javascript ES6"],
      "https://baby-siri.netlify.app/",
    ],
    [
      Lp9,
      ["HTML 5", "CSS 3", "Bootstrap 5", "Jquery", "Slick"],
      "https://www.bookwritingcube.com/audio-book-production-services/",
    ],
    [
      Lp10,
      ["HTML 5", "CSS 3", "Bootstrap 5", "Jquery", "Slick"],
      "https://www.bookwritingcube.com/lp/book-publishing-services/",
    ],
    [
      Lp11,
      ["HTML 5", "CSS 3", "Bootstrap 5", "Jquery", "Slick"],
      "https://www.bookwritingcube.com/marketing-lp2/",
    ],
    [
      Lp12,
      ["Nextjs 13", "Tailwind CSS", "Jquery", "Javascript", "Embla"],
      "https://bestsellingpublisher.com/case-studies",
    ],
    [
      Lp13,
      ["Nextjs 13", "Tailwind CSS", "Jquery", "Javascript", "Embla"],
      "https://bestsellingpublisher.com/book-marketing-company",
    ],
    [
      Lp14,
      ["Nextjs 13", "Tailwind CSS", "Jquery", "Javascript", "Embla"],
      "https://bestsellingpublisher.com/lp/book-marketing-company",
    ],
    [
      Lp15,
      ["Nextjs 13", "Tailwind CSS", "Jquery", "Javascript", "Embla"],
      "https://bestsellingpublisher.com/lp/book-publishing-company",
    ],
    [
      Lp16,
      ["Nextjs 13", "Tailwind CSS", "Jquery", "Javascript", "Embla"],
      "https://bestsellingpublisher.com/audiobook-production-services",
    ],
    [
      EmailTemplates1,
      ["HTML 5", "CSS3"],
      "https://farooqaziz.netlify.app/work/jumpto1-email-template-helloween/",
    ],
    [
      EmailTemplates2,
      ["HTML 5", "CSS3"],
      "https://farooqaziz.netlify.app/work/infinityanimations-email-template-helloween/",
    ],
    [
      EmailTemplates3,
      ["HTML 5", "CSS3"],
      "https://farooqaziz.netlify.app/work/h&w-email-template-2/",
    ],
    [
      EmailTemplates4,
      ["HTML 5", "CSS3"],
      "https://farooqaziz.netlify.app/work/h&w-email-template-1/",
    ],
    [
      EmailTemplates5,
      ["HTML 5", "CSS3"],
      "https://farooqaziz.netlify.app/work/bitswits-email-template/",
    ],
    [
      EmailTemplates6,
      ["HTML 5", "CSS3"],
      "https://farooqaziz.netlify.app/work/infinityanimations-email-template-thankyou/",
    ],
    [
      EmailTemplates7,
      ["HTML 5", "CSS3"],
      "https://farooqaziz.netlify.app/work/infinityanimations-email-template/",
    ],
  ],
  website: [
    [
      Website1,
      ["Nextjs 13", "Bootstrap 5", "Jquery"],
      "https://crystallitedigital.com/",
    ],
    [
      Website2,
      ["Nextjs 14", "Tailwind Css", "Shadcn Ui"],
      "https://infinityanimations.com/",
    ],
    [
      Website3,
      [
        "HTML 5",
        "CSS 3",
        "Bootstrap 5",
        "Php",
        "Jquery",
        "Javascript",
        "Slick",
      ],
      "https://portfolio.mhrizwan.com/web-apps/001/",
    ],
    [
      Website4,
      ["HTML 5", "Tailwind CSS", "Javascript", "Embla"],
      "https://portfolio.mhrizwan.com/websites/001/",
    ],
    [
      Website5,
      ["Nextjs 13", "Tailwind CSS", "Jquery", "Javascript", "Embla"],
      "https://bestsellingpublisher.com/",
    ],
    [
      Website6,
      [
        "Nextjs 14",
        "Tailwind CSS",
        "Javascript",
        "Swiper",
        "Slick",
        "Material Tailwind",
      ],
      "https://webiste-design-hub.vercel.app/",
    ],
    [
      Website7,
      ["Nextjs 14", "Tailwind CSS"],
      "https://www.mini-investments.net/",
    ],
  ],
  virtualAssistant: [
    [
      Website8,
      ["HTML5", "CSS3", "Javascript ES6"],
      "https://baby-siri.netlify.app/",
    ],
  ],
  landingPages: [
    [
      Lp1,
      ["HTML 5", "CSS 3", "Jquery", "Slick"],
      "https://jumpto1.com/children-book-illustration-services/",
    ],
    [
      Lp2,
      ["HTML 5", "CSS 3", "Bootstrap 5", "Jquery", "Embla"],
      "https://jumpto1.com/ios-app-development-services/",
    ],
    [
      Lp3,
      ["HTML 5", "CSS 3", "Bootstrap 5", "Jquery", "Slick"],
      "https://jumpto1.com/page-view/",
    ],
    [
      Lp4,
      ["HTML 5", "CSS 3", "Bootstrap 5", "Jquery", "Slick"],
      "https://jumpto1.com/page-view-1/",
    ],
    [
      Lp5,
      ["HTML 5", "CSS 3", "Bootstrap 5", "Jquery", "Embla", "GSAP"],
      "https://seoresultspro.com/seo-services/",
    ],
    [
      Lp6,
      ["HTML 5", "CSS 3", "Bootstrap 5", "Jquery", "Slick"],
      "https://www.bookwritingcube.com/children-book-illustrator/",
    ],
    [
      Lp7,
      ["HTML 5", "CSS 3", "Bootstrap 5", "Jquery", "Slick"],
      "https://www.bookpublishingservice.us/",
    ],
    [
      Lp8,
      ["HTML 5", "CSS 3", "Bootstrap 5", "Jquery", "Slick"],
      "https://www.bookwritingcube.com/amazon-book-publishing-services/",
    ],
    [
      Lp9,
      ["HTML 5", "CSS 3", "Bootstrap 5", "Jquery", "Slick"],
      "https://www.bookwritingcube.com/audio-book-production-services/",
    ],
    [
      Lp10,
      ["HTML 5", "CSS 3", "Bootstrap 5", "Jquery", "Slick"],
      "https://www.bookwritingcube.com/lp/book-publishing-services/",
    ],
    [
      Lp11,
      ["HTML 5", "CSS 3", "Bootstrap 5", "Jquery", "Slick"],
      "https://www.bookwritingcube.com/marketing-lp2/",
    ],
    [
      Lp12,
      ["Nextjs 13", "Tailwind CSS", "Jquery", "Javascript", "Embla"],
      "https://bestsellingpublisher.com/case-studies",
    ],
    [
      Lp13,
      ["Nextjs 13", "Tailwind CSS", "Jquery", "Javascript", "Embla"],
      "https://bestsellingpublisher.com/book-marketing-company",
    ],
    [
      Lp14,
      ["Nextjs 13", "Tailwind CSS", "Jquery", "Javascript", "Embla"],
      "https://bestsellingpublisher.com/lp/book-marketing-company",
    ],
    [
      Lp15,
      ["Nextjs 13", "Tailwind CSS", "Jquery", "Javascript", "Embla"],
      "https://bestsellingpublisher.com/lp/book-publishing-company",
    ],
    [
      Lp16,
      ["Nextjs 13", "Tailwind CSS", "Jquery", "Javascript", "Embla"],
      "https://bestsellingpublisher.com/audiobook-production-services",
    ],
  ],
  ecommerce: [
    [
      Ecommerce1,
      ["HTML 5", "CSS 3", "Bootstrap 5", "Jquery", "Javascript"],
      "https://fsf-mart-pk.netlify.app/",
    ],
    [
      Ecommerce2,
      [
        "Nextjs 14",
        "Tailwind Css",
        "React Hook Form",
        "Shadcn Ui",
        "Magic Ui",
        "Reactjs 18",
        "Typescript",
      ],
      "https://ecommerce-nextjs-sandy-one.vercel.app/",
    ],
  ],
  emailTemplates: [
    [
      EmailTemplates1,
      ["HTML 5", "CSS3"],
      "https://farooqaziz.netlify.app/work/jumpto1-email-template-helloween/",
    ],
    [
      EmailTemplates2,
      ["HTML 5", "CSS3"],
      "https://farooqaziz.netlify.app/work/infinityanimations-email-template-helloween/",
    ],
    [
      EmailTemplates3,
      ["HTML 5", "CSS3"],
      "https://farooqaziz.netlify.app/work/h&w-email-template-2/",
    ],
    [
      EmailTemplates4,
      ["HTML 5", "CSS3"],
      "https://farooqaziz.netlify.app/work/h&w-email-template-1/",
    ],
    [
      EmailTemplates5,
      ["HTML 5", "CSS3"],
      "https://farooqaziz.netlify.app/work/bitswits-email-template/",
    ],
    [
      EmailTemplates6,
      ["HTML 5", "CSS3"],
      "https://farooqaziz.netlify.app/work/infinityanimations-email-template-thankyou/",
    ],
    [
      EmailTemplates7,
      ["HTML 5", "CSS3"],
      "https://farooqaziz.netlify.app/work/infinityanimations-email-template/",
    ],
  ],
};
const ProjectCard = () => {
  const [visibleItems, setVisibleItems] = useState<{ [key: string]: number }>(() => {
    return Object.keys(projects).reduce((acc, key) => {
      acc[key] = 9;
      return acc;
    }, {} as { [key: string]: number });
  });

  const handleLoadMore = (tabKey: string) => {
    setVisibleItems(prev => ({
      ...prev,
      [tabKey]: prev[tabKey] + 6
    }));

    setTimeout(() => {
      const gridContainer = document.querySelector(`[data-tab="${tabKey}"]`);
      if (gridContainer) {
        const lastElement = gridContainer.lastElementChild;
        if (lastElement) {
          lastElement.scrollIntoView({
            behavior: 'smooth',
            block: 'end'
          });
        }
      }
    }, 100);
  };
  return (
    <section>
      <div className="relative z-10 flex items-center justify-center py-[80px]">
        <div className="container">
          <Tabs defaultValue="all">
            <TabsList>
              {
                Object.keys(projects).map((tab) => (
                  <TabsTrigger
                    className="cursor-pointer capitalize"
                    value={tab}
                    key={tab}
                  >
                    {tab}
                  </TabsTrigger>
                ))
              }
            </TabsList>
            {Object.entries(projects).map(([tabKey, projectList]) => (
              <TabsContent value={tabKey} key={tabKey}>
                <div className="grid grid-cols-3 gap-x-5 gap-y-8 items-center" data-tab={tabKey}>
                  {projectList.slice(0, visibleItems[tabKey]).map(([img, tags, link], i) => (
                    <div key={i} className="relative z-10 overflow-hidden group p-2">
                      <Image src={img} alt="project" className="mx-auto object-cover" />
                      <span className="absolute inset-0 w-full h-full bg-black opacity-40 translate-y-full transition-all ease-in-out duration-300 group-hover:translate-y-0"></span>
                      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-end justify-between">
                        <div className="flex flex-wrap gap-2">
                          {tags?.map((tag, i) => (
                            <span key={i} className="text-xs md:text-sm text-white font-bold bg-opacity-50 border border-white rounded px-3 py-1">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <Link href={link} target="_blank" rel="noopener noreferrer" className="shrink-0">
                          <Image
                            src={Eye}
                            alt="View Project"
                            width={30}
                            height={30}
                            className="transition-transform transform hover:scale-110"
                          />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Load More Button */}
                {projectList.length > visibleItems[tabKey] && (
                  <button
                    onClick={() => handleLoadMore(tabKey)}
                    className="relative z-10 lg:w-[230px] w-full md:h-[70px] h-[60px] flex justify-center items-center bg-[#0e1538] overflow-hidden rounded-[10px] cursor-pointer group mt-8 mx-auto"
                  >
                    <span className="absolute z-10 inset-0 w-full h-[90%] m-auto bg-[#0e1538] rounded-[10px]" />
                    <span className="absolute -z-10 inset-0 w-full h-full transition-all ease-in-out duration-500 scale-0 group-hover:scale-100 group-hover:bg-gradient-to-b from-[#00ccff] to-[#d400d4] animate-rotate" />
                    <div className="text-white text-center lg:text-lg text-base leading-tight font-medium z-10">
                      Load More
                    </div>
                  </button>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};
export function ProjectLayout() {
  return (
    <>
      <section>
        <div className="relative z-10 mx-auto flex h-screen w-full flex-col items-center justify-center overflow-hidden">
          <div className="absolute z-10 inset-0 h-full w-full bg-black/60 dark:bg-black/70" />
          <ThreeDMarquee
            className="pointer-events-none absolute inset-0 h-full w-full"
            images={data.images}
          />
          <div className="container">
            <div className="text-center text-white relative z-10">
              <h2 className="lg:text-[50px] md:text-[40px] sm:text-[30px] text-[22px] font-bold">Real-World Project Insights</h2>
              <div className="relative z-10 mt-4">
                <span className="h-[3px] sm:w-[4%] w-[7%] bg-fuchsia-600 absolute sm:top-[20px] top-[15px] xl:left-[38%] lg:left-[36%] md:left-[32%] sm:left-[28%] left-[18%] rounded"></span>
                <span className="block font-sans sm:text-[30px] text-[22px] leading-tigth">
                  Behind the Code
                </span>
                <span className="h-[3px] sm:w-[4%] w-[7%] bg-fuchsia-600 absolute sm:top-[20px] top-[15px]  xl:right-[38%] lg:right-[36%] md:right-[32%] sm:right-[28%] right-[18%] rounded"></span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ProjectCard />
    </>
  );
}