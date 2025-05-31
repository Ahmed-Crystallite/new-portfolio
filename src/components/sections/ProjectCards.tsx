import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import data from "@/data/projects.json";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

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
import Link from "next/link";
import { ThreeDMarquee } from "../ui/3d-marquee";
type ProjectData = {
  [key: string]: [StaticImageData, string[], string][];
};

// Create projects data object
const projects: ProjectData = {
  websites: [
    [Website1, ["Nextjs 13", "Bootstrap 5", "Jquery"], "https://crystallitedigital.com/"],
    [Website2, ["Nextjs 14", "Tailwind Css", "Shadcn Ui"], "https://infinityanimations.com/"],
    // ...rest of website entries
  ],
  virtualAssistant: [
    [Website8, ["HTML5", "CSS3", "Javascript ES6"], "https://baby-siri.netlify.app/"],
  ],
  landingPages: [
    [Lp1, ["HTML 5", "CSS 3", "Jquery", "Slick"], "https://jumpto1.com/children-book-illustration-services/"],
    // ...rest of landing page entries
  ],
  ecommerce: [
    [Ecommerce1, ["HTML 5", "CSS 3", "Bootstrap 5", "Jquery", "Javascript"], "https://fsf-mart-pk.netlify.app/"],
    // ...rest of ecommerce entries
  ],
  emailTemplates: [
    [EmailTemplates1, ["HTML 5", "CSS3"], "https://farooqaziz.netlify.app/work/jumpto1-email-template-helloween/"],
    // ...rest of email template entries
  ],
};

interface ProjectCardProps {
  image: StaticImageData;
  tags: string[];
  link: string;
}
const ProjectCard = () => {
  return (
    <section>
      <div className="relative z-10 h-svh flex items-center justify-center">
        <div className="container">
          <Tabs defaultValue="account">
            <TabsList>
              <TabsTrigger className="cursor-pointer" value="account">Account</TabsTrigger>
            </TabsList>
            <div className="grid grid-cols-3 gap-x-5 gap-y-8 items-center">
              <TabsContent value="account">
                <div className="relative z-10 overflow-hidden group p-2">
                  <Image src={Website1} alt="project" className="mx-auto object-cover" />
                  <span className="absolute inset-0 w-full h-full bg-black opacity-40 translate-y-full transition-all ease-in-out duration-300 group-hover:translate-y-0"></span>
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-end justify-between">
                    <div className="flex flex-wrap gap-2">
                      {["Nextjs 13", "Bootstrap 5", "Jquery"].map((tag, i) => (
                        <span key={i} className="text-xs md:text-sm text-white font-bold bg-opacity-50 border border-white rounded px-3 py-1">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link href="#" target="_blank" rel="noopener noreferrer">
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
              </TabsContent>
            </div>
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