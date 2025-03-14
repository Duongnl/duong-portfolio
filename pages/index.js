import { Fragment } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

import ShoveeModal from "@/utils/ShoveeModal";
import About from "@/sections/about";
import Education from "@/sections/education";
import Experience from "@/sections/experience";
const Navbar = dynamic(() => import("@/layout/navbar/Navbar"))
const Footer = dynamic(() => import("@/layout/footer/Footer"))
const Intro = dynamic(() => import("@/sections/Intro"))
const Skills = dynamic(() => import("@/sections/Skills"))
const Projects = dynamic(() => import("@/sections/Projects"))
const LatestBlogs = dynamic(() => import("@/sections/LatestBlogs"))
const Apps = dynamic(() => import("@/sections/Apps"))
const SendMail = dynamic(() => import("@/utils/SendMail"))
const SocialMedia = dynamic(() => import("@/utils/SocialMedia"))
const ChatSystem = dynamic(() => import("@/utils/ChatSystem"))
const Feedback = dynamic(() => import("@/utils/Feedback"))

const Home = () => {

  return (
    <Fragment>
      <Head>
        <title>DUONG Portfolio</title>
        {/* <!-- Primary Meta Tags --> */}
        <meta content="DUONG Portfolio" name="title" />
        {/* <meta content="Explore the best Next.js and React.js portfolio by Shivraj Gurjar. Featuring simple, dark and light theme designs and mobile responsiveness." name="description" /> */}

        {/* <!-- Open Graph / Facebook --> */}
        {/* <meta content="website" property="og:type" /> */}
        {/* <meta content="https://my-portfolio-one-red-25.vercel.app" property="og:url" /> */}
        {/* <meta content="DUONG Portfolio" property="og:title" /> */}
        {/* <meta content="Explore the best Next.js and React.js portfolio by Shivraj Gurjar. Featuring simple, dark and light theme designs and mobile responsiveness." property="og:description" /> */}
        {/* <meta content="https://my-portfolio-one-red-25.vercel.app/images/wellcome.png" property="og:image" /> */}

        {/* <!-- Twitter --> */}
        {/* <meta content="https://my-portfolio-one-red-25.vercel.app/images/wellcome.png" property="twitter:card" /> */}
        {/* <meta content="https://my-portfolio-one-red-25.vercel.app" property="twitter:url" /> */}
        {/* <meta content="DUONG Portfolio" property="twitter:title" /> */}
        {/* <meta content="Explore the best Next.js and React.js portfolio by Shivraj Gurjar. Featuring simple, dark and light theme designs and mobile responsiveness." property="twitter:description" /> */}
        {/* <meta content="https://my-portfolio-one-red-25.vercel.app/images/wellcome.png" property="twitter:image" /> */}

        {/* <!-- Other Meta Tags --> */}
        {/* <meta content="portfolio, Next.js, React.js, web development, dark theme, light theme, best portfolio github, best next js portfolio, how to make a portfolio, best react js portfolio github, best react js portfolio, best next js portfolio, react js developer in Kota, react js developer in Jaipur, react js developer in India, react js developer in Rajasthan" name="keywords" /> */}
        <meta content="DUONG" name="author" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />

        {/* <!-- Favicon --> */}
        {/* <link href="https://my-portfolio-one-red-25.vercel.app/images/107763946.png" rel="icon" type="image/x-icon" /> */}

      </Head>
      <div>
        <div>
          {/* Desktop Navbar */}
          <Navbar />
          {/* Welcome Page */}
          <Intro />
          {/* About */}
          <About />
          {/* Skills  */}
          <Skills />
          {/* Education */}
          <Education />
          {/* Experience */}
          {/* <Experience /> */}
          {/* Projects */}
          <Projects />
          {/* SocialMedia */}
          <SocialMedia />

          {/* LatestBlog */}
          {/* <LatestBlogs /> */}
          {/* Apps */}
          {/* <Apps /> */}
          {/* Send Mail */}
          <SendMail />
          {/* Footer */}
          <Footer />
          <div className="z-40">
            {/* tawk.to Chat System */}
            <ChatSystem />
          </div>
          {/* Feedback Modal */}
          <Feedback />
          {/* ShoveeModal */}
          {/* <ShoveeModal /> */}
        </div>
      </div>
    </Fragment>
  );
}

export default Home
