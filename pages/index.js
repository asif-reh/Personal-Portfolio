import Head from "next/head";
import styled from "styled-components";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { useState, useEffect, useCallback, useRef } from "react";
import { theme } from "../constants";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import { Image } from "antd";
import { HighLight } from "../components/HighLight/HighLight";
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
  display: flex;
  justify-content: space-between;
  & > div:first-child {
    padding: 60px 60px 80px 60px;
    width: 75vw;
    @media (max-width: 800px) {
      padding: 40px 25px 60px 25px;
      width: 100%;
    }
  }
  & > div:nth-child(2) {
    flex-shrink: 0;
    width: 330px;
    height: auto;
    padding: 0px;
    border-left: 1px solid ${theme.colors.grey};
    display: flex;
    align-items: flex-start;
    justify-content: center;
    overflow: hidden;

    @media (max-width: 991px) {
      width: 100vw;
      height: 500px;
      border-left: 0px solid ${theme.colors.grey};
      border-top: 1px solid ${theme.colors.grey};
    }

    & > div {
      height: 100%;
      width: 330px;

      @media (max-width: 991px) {
        height: 500px;
        width: 100vw;
      }

      & > img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
  }
  border-bottom: 1px solid ${theme.colors.grey};
  @media (max-width: 991px) {
    width: 100vw;
    flex-wrap: wrap;
  }
`;

const Title = styled.h2`
  font-size: 64px;
  line-height: 64px;
  display: flex;
  flex-direction: column;
  font-weight: 500;
  color: ${theme.colors.darkGrey};
  margin: 0;
  margin-bottom: 100px;
  & > span {
    padding: 0;
    @media (max-width: 800px) {
      font-size: 40px;
      line-height: 40px;
    }
  }
  & > span:nth-child(3) {
    font-size: 72px;
    line-height: 72px;
    font-weight: 700;
    border-radius: 100px;
    text-transform: uppercase;
    color: ${theme.colors.darkGrey};
    @media (max-width: 800px) {
      font-size: 48px;
      line-height: 48px;
    }
  }
  @media (max-width: 800px) {
    margin-bottom: 60px;
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
  margin-top: 40px;

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

const ContactSection = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: ${theme.colors.white};
  & > div {
    max-width: 750px;
    background-color: ${theme.colors.lightGrey};
    padding: 60px;
    border-left: 1px solid ${theme.colors.grey};
    border-right: 1px solid ${theme.colors.grey};

    @media (max-width: 800px) {
      padding: 35px 25px;
      border-left: 1px solid ${theme.colors.lightGrey};
      border-right: 1px solid ${theme.colors.lightGrey};
    }
  }
  text-align: center;
  border-bottom: 1px solid ${theme.colors.grey};

  @media (max-width: 800px) {
    background-color: ${theme.colors.lightGrey};
  }
`;

const SectionTitle = styled.div`
  font-size: 36px;
  font-weight: 600;
  color: ${theme.colors.darkGrey};
  margin-bottom: 40px;
  text-align: left;
  @media (max-width: 800px) {
    font-size: 25px;
  }
`;

const MailButton = styled.button`
  border: none;
  outline: none;
  border-radius: 100px;
  box-shadow: -12px 4px 0 ${theme.colors.grey};
  background-color: ${theme.colors.lightGrey};
  color: ${theme.colors.darkGrey};
  font-size: 18px;
  cursor: pointer;
  border: 1px solid ${theme.colors.grey};
  padding: 8px 18px;
  text-transform: uppercase;
  margin-bottom: 30px;

  @media (max-width: 800px) {
    font-size: 16px;
  }

  :hover {
    border: 1px solid ${theme.colors.darkGrey};
  }
`;

const Links = styled.div`
  display: flex;
  justify-content: center;
  & > a {
    cursor: pointer;
    font-size: 30px;
    background-color: ${theme.colors.lightGrey};
    color: ${theme.colors.darkGrey};
    margin: 0 15px;
    display: flex;
    width: max-content;
  }
`;

export default function Home() {
  const [isSSR, setIsSSR] = useState(true);
  const { push } = useRouter();
  const scrollRef = useRef(null);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  useAnimation(isSSR, ".scroll-container");

  return (
    !isSSR && (
      <div>
        <Head>
          <title>Asif</title>
          <meta name="description" content="Welcome to my personal website" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <MainContainer className="scroll-container">
          <Sidebar />
          <MainContent>
            <SwipeWrapper>
              <Header />
              <>
                <Content className="site-ani-group">
                  <div ref={scrollRef}>
                    <Title className="site-ani-auto site-ani__fade-in site-ani-group">
                      <span className="site-ani-auto site-ani__slide-up">
                        Hello,
                      </span>
                      <span className="site-ani-auto site-ani__slide-up">
                        My name is
                      </span>
                      <span className="site-ani-auto site-ani__slide-up">
                        Asif
                      </span>
                    </Title>
                    <Description className="site-ani-auto site-ani__fade-in">
                      <p>
                        I&rsquo;m a Frontend engineer who loves to develop
                        gorgeous UI & UX for websites & web applications.
                        <br />
                        <br />I usually develop websites or web applications
                        using <HighLight>ReactJS</HighLight> with{" "}
                        <HighLight>Next.js</HighLight>,{" "}
                        <HighLight>TypeScript</HighLight> and{" "}
                        <HighLight>SCSS</HighLight>.
                      </p>
                    </Description>
                    <ViewMore className="site-ani-auto site-ani__fade-in">
                      <a onClick={() => push("/about")}>
                        More about me{" "}
                        <Icon icon="ant-design:swap-right-outlined" />
                      </a>
                    </ViewMore>
                  </div>
                  <div>
                    <Image src="/image/namnd.jpg" alt="Namnd" preview={false} />
                  </div>
                </Content>
                <ContactSection className="site-ani-group">
                  <div>
                    <SectionTitle className="site-ani-auto site-ani__fade-in">
                      <span>Let&rsquo;s connect and make difference</span>
                    </SectionTitle>
                    <MailButton className="site-ani-auto site-ani__fade-in">
                      <a href="mailto:nguyennamnade22@gmail.com">Send email</a>
                    </MailButton>
                    <Links className="site-ani-group site-ani-auto site-ani__fade-in">
                      <a
                        href="https://github.com/nguyend-nam"
                        rel="noreferrer"
                        target="_blank"
                        className="site-ani-auto site-ani__fade-in"
                      >
                        <Icon icon="mdi:github" style={{ fontSize: 36 }} />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/nguyendinhnam0320/"
                        rel="noreferrer"
                        target="_blank"
                        className="site-ani-auto site-ani__fade-in"
                      >
                        <Icon icon="mdi:linkedin" style={{ fontSize: 36 }} />
                      </a>
                    </Links>
                  </div>
                </ContactSection>
              </>
            </SwipeWrapper>
            <Footer />
          </MainContent>
        </MainContainer>
      </div>
    )
  );
}
