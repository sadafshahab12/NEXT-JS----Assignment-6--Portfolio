import React from "react";
import ProjectCard from "../components/ProjectCard";
import Project2Card from "../components/Project2Card";
import Project3Card from "../components/Project3Card";
import Project4Card from "../components/Project4Card";
import Link from "next/link";

const Project = () => {
  return (
    <>
      <section>
        <div>
          <h1 className="text-[1.5rem] md:text-[2rem] font-black text-center py-2 md:py-6">
            My Projects
          </h1>
        </div>
        <div className="px-3 md:px-10 py-5">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-2 grid-cols-1 gap-5 md:gap-10">
            <div>
              {/* Next JS  */}
              <ProjectCard
                src="/images/work/nextjs (2).PNG"
                h1="First Next JS Website"
                p=" Enjoy a seamless browsing experience on our responsive cake website."
                projectLink="https://next-js-assignment-3-five.vercel.app/"
              />
            </div>
            <div>
              {/* Next JS  */}
              <ProjectCard
                src="/images/work/portfolio next js.png"
                h1="First Next JS Website"
                p=" Enjoy a seamless browsing experience on our responsive cake website."
                projectLink="https://next-js-assignment-3-five.vercel.app/"
              />
            </div>
     
            <div>
              {/* Next JS  */}
              <ProjectCard
                src="/images/work/nextjs website.png"
                h1="Rise Up Website"
                p="The motivational website was created using Tailwind CSS and Next JS, with Figma for design and code writing."
                projectLink="https://rise-up-website-next-js-assignment-7.vercel.app/"
              />
            </div>
            <div>
              {/* Next JS  */}
              <ProjectCard
                src="/images/work/next js api.png"
                h1="Book Hub"
                p="I created a Books API that can provide a list of books together with a user interface. CRUD Operation is used in its construction."
                projectLink="https://monday-2-5-assignment-submission-november-11-class-10.vercel.app/"
              />
            </div>
            <div>
              {/* Next JS  */}
              <ProjectCard
                src="/images/work/milestone.png"
                h1="Taste Bite"
                p="I Built a simple multi-page website using React components.I Applied Tailwind CSS to style the website, and it is responsive."
                projectLink="https://milestone-2-assignments-next-js-with-tailwind-css.vercel.app/"
              />
            </div>
            <div>
              {/* html css javascript  */}
              <Project2Card
                src="/images/work/resumebuilder.png"
                h1="Resume Builder"
                p="Experience our Resume Builder, built with  html css javascript.Create your resume free of cost."
                projectLink="https://milestone-5-unique-path-and-shareable-link-pi.vercel.app/"
              />
            </div>
            <div>
              {/* html css javascript  */}
              <Project2Card
                src="/images/work/unique bike html css.png"
                h1="Unique Bike"
                p="Experience our Landing Page, built with  html css javascript.Go and Watch Javascript Functionality."
                projectLink="https://unique-bike.vercel.app/"
              />
            </div>
            <div>
              {/* html css javascript  */}
              <Project2Card
                src="/images/work/hcj.PNG"
                h1="Word Scramble Game"
                p="Experience our Word Scramble Game, built with  html css javascript."
                projectLink="https://sadafshahab12.github.io/Word-Scramble/"
              />
            </div>
            <div>
              {/* html css javascript  */}
              <Project2Card
                src="/images/work/hcj10.PNG"
                h1="Todo List App"
                p="Experience our Todo List App, built with  html css javascript."
                projectLink="https://to-do-list-app-nine-mu.vercel.app/"
              />
            </div>
            <div>
              {/* html css bootstrap  */}
              <Project3Card
                src="/images/work/bootstrapwebsite2.png"
                h1="Cake Website"
                p="Enjoy a seamless browsing experience on our responsive cake website, designed to delight on any deavice!."
                projectLink="https://sadafshahab12.github.io/Fluffy-Delights---Self-Created/"
              />
            </div>
            <div>
              {/* html css  */}
              <Project4Card
                src="/images/work/landingpage.png"
                h1="Landing Page"
                p="Discover our stunning landing page, crafted with HTML and CSS for a responsive design."
                projectLink="https://sadafshahab12.github.io/Creativee-Freelance-hub-task-2/"
              />
            </div>
            <div>
              {/* html css   */}
              <Project4Card
                src="/images/work/landingpage2.png"
                h1="Landing Page"
                p="Discover our stunning landing page, crafted with HTML and CSS for a responsive design."
                projectLink="https://sadafshahab12.github.io/Nike-Shoe-Responsive-Landing-Page/"
              />
            </div>
          </div>
        </div>
        <div className="text-center my-5">
          <Link
            href="https://github.com/sadafshahab12"
            className="text-[0.9rem]  bg-black text-white py-3 px-5 text-center  cursor-pointer"
          >
            Visit Github
          </Link>
        </div>
      </section>
    </>
  );
};

export default Project;
