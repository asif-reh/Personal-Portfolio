import Head from "next/head";
import styled from "styled-components";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { useState, useEffect } from "react";
import { theme } from "../constants";
import { HighLight } from "../components/HighLight/HighLight";
import { Icon } from "@iconify/react";
import { Image } from "antd";
import { useIsMDSize } from "../hooks/useIsMDSize";
import { SwipeWrapper } from "../components/SwipeWrapper/SwipeWrapper";
import { useAnimation } from "../hooks/useAnimation";

const MainContainer = styled.div`
  background-color: ${theme.colors.white};
  display: flex;
  height: 100vh;
  overflow-x: hidden;
  @media (max-width: 800px) {
    width: 100vw;
  }
`;

const MainContent = styled.div`
  width: calc(100vw - 70px);
  height: max-content;
  @media (max-width: 800px) {
    width: 100vw;
  }
`;

const Content = styled.div`
  background-color: ${theme.colors.white};
  width: calc(100vw - 70px);
  & > div {
    padding: 60px 64px 30px;
    @media (max-width: 800px) {
      padding: 40px 25px 20px;
      width: 100%;
    }
  }
  border-bottom: 1px solid ${theme.colors.grey};
  @media (max-width: 800px) {
    width: 100vw;
    flex-direction: column;
    & > span img {
      object-position: top !important;
    }
    & > div {
      border-left: 0px solid ${theme.colors.grey};
    }
  }
`;

const Title = styled.h2`
  font-size: 64px;
  line-height: 64px;
  display: flex;
  flex-direction: column;
  font-weight: 700;
  color: ${theme.colors.darkGrey};
  margin: 0;
  margin-bottom: 60px;
  text-align: left;
  & > span {
    padding: 0;
    @media (max-width: 800px) {
      font-size: 40px;
      line-height: 40px;
    }
  }
  @media (max-width: 800px) {
    margin-bottom: 40px;
  }
`;

const Description = styled.div`
  color: ${theme.colors.darkGrey};
  font-size: 17px;
  line-height: 22px;
  max-width: 500px;
  @media (max-width: 800px) {
    font-size: 16px;
  }
`;

const ViewMore = styled.div`
  margin-top: 30px;

  & a {
    color: ${theme.colors.darkGrey};
    font-size: 18px;
    cursor: pointer;
    border-bottom: 1px solid ${theme.colors.darkGrey};
    padding-bottom: 8px;

    @media (max-width: 800px) {
      font-size: 16px;
    }
  }

  & svg {
    vertical-align: sub;
  }
`;

const ProjectsContainer = styled.div`
  padding: 30px 100px 60px !important;
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  & > div {
    width: calc(50% - 25px) !important;
    & > a > div {
      height: 100%;
      width: 100%;
      & > img {
        height: 100% !important;
        width: 100% !important;
      }
    }
  }
  @media (max-width: 991px) {
    padding: 20px 64px 50px !important;
    gap: 40px;
    & > div {
      width: 100% !important;
    }
  }
  @media (max-width: 800px) {
    padding: 20px 25px 50px !important;
  }
`;

const ProjectCard = styled.div`
  border: 1px solid ${theme.colors.grey};
  background-color: ${theme.colors.lightGrey};
  overflow: hidden;
  & > div {
    padding: 30px;
  }
  & > div:nth-child(2) {
    border-top: 1px solid ${theme.colors.grey} !important;
    padding-bottom: 0;
  }
  & > div:nth-child(n + 2) {
    padding-bottom: 0px;
  }
  & > div:nth-child(4) {
    padding-bottom: 30px;
    padding-top: 20px;
    display: flex;
    flex-wrap: wrap;
  }
  @media (max-width: 800px) {
    & > div {
      padding: 20px;
    }
    & > div:nth-child(4) {
      padding-bottom: 20px;
      padding-top: 10px;
    }
  }
`;

const ProjectTitle = styled.div`
  font-size: 21px;
  font-weight: 600;
  color: ${theme.colors.darkGrey};

  & > a {
    transition: opacity 0.25s;
  }

  & > a:hover {
    opacity: 0.6;
  }
  @media (max-width: 800px) {
    font-size: 19px;
  }
`;

const ProjectDescription = styled.div`
  color: ${theme.colors.darkGrey};
  font-size: 16px;
  @media (max-width: 800px) {
    font-size: 15px;
  }
`;

const ProjectTags = styled.div`
  background-color: ${theme.colors.white};
  color: ${theme.colors.darkGrey};
  border-radius: 100px;
  font-size: 15px;
  font-weight: 400;
  border: 1px solid ${theme.colors.grey};
  padding: 6px 8px;
  margin-right: 10px;
  margin-top: 10px;
  @media (max-width: 800px) {
    font-size: 16px;
  }
  @media (max-width: 800px) {
    font-size: 13px;
    margin-right: 7px;
    margin-top: 7px;
  }
`;

const projects = [
  {
    name: "Scrollery",
    img: "/image/proj-scrollery.png",
    projectUrl: "https://scrollery.js.org",
    repoUrl: "https://github.com/nguyend-nam/scrollery",
    description: (
      <>
        React TypeScript library that empowers developers to effortlessly
        animate contents on scroll. View the library on{" "}
        <HighLight>
          <a
            href="https://www.npmjs.com/package/@nguyend-nam/scrollery-ts"
            rel="noreferrer"
            target="_blank"
          >
            NPM
            <Icon
              icon="mdi:link"
              style={{
                fontSize: 20,
                verticalAlign: "sub",
                marginLeft: 2,
              }}
            />
          </a>
        </HighLight>{" "}
        or{" "}
        <HighLight>
          <a
            href="https://github.com/nguyend-nam/scrollery"
            rel="noreferrer"
            target="_blank"
          >
            GitHub
            <Icon
              icon="mdi:link"
              style={{
                fontSize: 20,
                verticalAlign: "sub",
                marginLeft: 2,
              }}
            />
          </a>
        </HighLight>
        .
      </>
    ),
    techStack: ["Next.js", "TypeScript", "NPM", "TailwindCSS"],
  },
  {
    name: "Google Fonts app clone",
    img: "/image/proj-ggfonts.png",
    projectUrl: "https://nextjs-google-fonts.netlify.app",
    repoUrl: "https://github.com/nguyend-nam/google-fonts-clone",
    description: (
      <>
        <HighLight>
          <a href="https://fonts.google.com" rel="noreferrer" target="_blank">
            Google Fonts app
            <Icon
              icon="mdi:link"
              style={{
                fontSize: 20,
                verticalAlign: "sub",
                marginLeft: 2,
              }}
            />
          </a>
        </HighLight>{" "}
        clone.
      </>
    ),
    techStack: ["Next.js", "TypeScript", "TailwindCSS"],
  },
  {
    name: "React three fiber image gallery",
    img: "/image/proj-r3fimages.png",
    projectUrl: "https://dwarvesf-r3f.netlify.app",
    repoUrl: "https://github.com/nguyend-nam/r3f-image-gallery",
    description: (
      <>
        Grid image gallery made with{" "}
        <HighLight>
          <a
            href="https://docs.pmnd.rs/react-three-fiber/getting-started/introduction"
            rel="noreferrer"
            target="_blank"
          >
            React three fiber
            <Icon
              icon="mdi:link"
              style={{
                fontSize: 20,
                verticalAlign: "sub",
                marginLeft: 2,
              }}
            />
          </a>
        </HighLight>{" "}
        and{" "}
        <HighLight>
          <a href="https://nextjs.org/" rel="noreferrer" target="_blank">
            Next.js
            <Icon
              icon="mdi:link"
              style={{
                fontSize: 20,
                verticalAlign: "sub",
                marginLeft: 2,
              }}
            />
          </a>
        </HighLight>
        .
      </>
    ),
    techStack: ["Next.js", "TypeScript", "React three fiber", "GLSL"],
  },
  {
    name: "Which holiday?",
    img: "/image/proj-holiday.png",
    projectUrl: "https://whichholiday.vercel.app/",
    repoUrl: "https://github.com/nguyend-nam/which-holiday",
    description: <>View holidays of each country and their date on calendar.</>,
    techStack: ["Next.js", "SWR", "styled-components", "TailwindCSS"],
  },
  {
    name: "Aggregation App",
    img: "/image/proj-aggapp.png",
    projectUrl: "https://aggregation-app.vercel.app/",
    repoUrl: "https://github.com/nguyend-nam/Aggregation-app",
    description: (
      <>
        Simple aggregation app using{" "}
        <HighLight>
          <a
            href="https://docs.github.com/en/rest/guides/getting-started-with-the-rest-api"
            rel="noreferrer"
            target="_blank"
          >
            GitHub APIs
            <Icon
              icon="mdi:link"
              style={{
                fontSize: 20,
                verticalAlign: "sub",
                marginLeft: 2,
              }}
            />
          </a>
        </HighLight>
        .
      </>
    ),
    techStack: ["ReactJS", "CSS"],
  },
  {
    name: "Next.js calendar page UI",
    img: "/image/proj-calui.png",
    projectUrl: "https://dwarvesf-boilerplate.netlify.app/calendar",
    repoUrl: "https://github.com/nguyend-nam/nextjs-calendar",
    description: (
      <>
        Calendar section for dashboard UI built with{" "}
        <HighLight>
          <a
            href="https://github.com/dwarvesf/nextjs-boilerplate"
            rel="noreferrer"
            target="_blank"
          >
            dwarvesf&rsquo;s Next.js boilerplate
            <Icon
              icon="mdi:link"
              style={{
                fontSize: 20,
                verticalAlign: "sub",
                marginLeft: 2,
              }}
            />
          </a>
        </HighLight>
        .
      </>
    ),
    techStack: ["Next.js", "TypeScript", "TailwindCSS"],
  },
  {
    name: "CSES Downloader",
    img: "/image/proj-cses.png",
    projectUrl: "https://csessolutions.netlify.app",
    repoUrl: "https://github.com/DecSP/cses-downloader",
    description: (
      <>
        <HighLight>
          <a href="https://cses.fi/" rel="noreferrer" target="_blank">
            CSES
            <Icon
              icon="mdi:link"
              style={{
                fontSize: 20,
                verticalAlign: "sub",
                marginLeft: 2,
              }}
            />
          </a>
        </HighLight>{" "}
        problemset solutions downloader + packager with user-friendly web
        interface.
      </>
    ),
    techStack: ["JavaScript", "HTML", "CSS", "Python"],
  },
];

export default function Projects() {
  const [isSSR, setIsSSR] = useState(true);

  const isMD = useIsMDSize();

  useEffect(() => {
    setIsSSR(false);
  }, []);

  useAnimation(isSSR, ".scroll-container");

  return (
    !isSSR && (
      <div>
        <Head>
          <title>Projects | Asif</title>
          <meta name="description" content="My projects" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <MainContainer className="scroll-container">
          <Sidebar />
          <MainContent>
            <SwipeWrapper>
              <Header />
              <>
                <Content className="site-ani-group">
                  <div className="site-ani-auto site-ani__fade-in">
                    <Title className="site-ani-auto site-ani__fade-in">
                      <span>Projects</span>
                    </Title>
                    <Description className="site-ani-auto site-ani__fade-in">
                      <p>Some of my open sources and personal projects.</p>
                    </Description>
                    <ViewMore className="site-ani-auto site-ani__fade-in">
                      <a
                        href="https://github.com/nguyend-nam/?tab=repositories"
                        rel="noreferrer"
                        target="_blank"
                      >
                        View more on GitHub{" "}
                        <Icon icon="ant-design:swap-right-outlined" />
                      </a>
                    </ViewMore>
                  </div>
                  <ProjectsContainer className="site-ani-auto site-ani__fade-in">
                    {projects.map((project) => (
                      <ProjectCard
                        key={project.name}
                        className="site-ani-auto site-ani__slide-up"
                      >
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href={project.projectUrl}
                          style={{
                            display: "block",
                            height: isMD ? 200 : 300,
                          }}
                        >
                          <Image
                            src={project.img}
                            alt={project.img}
                            preview={false}
                            style={{
                              objectFit: "cover",
                            }}
                          />
                        </a>
                        <div>
                          <ProjectTitle>
                            <a
                              href={project.repoUrl}
                              rel="noreferrer"
                              target="_blank"
                            >
                              {project.name}
                            </a>
                          </ProjectTitle>
                        </div>
                        <ProjectDescription>
                          {project.description}
                        </ProjectDescription>
                        <div>
                          {project.techStack.map((tech, i) => (
                            <ProjectTags key={i}>{tech}</ProjectTags>
                          ))}
                        </div>
                      </ProjectCard>
                    ))}
                  </ProjectsContainer>
                </Content>
              </>
            </SwipeWrapper>
            <Footer />
          </MainContent>
        </MainContainer>
      </div>
    )
  );
}
