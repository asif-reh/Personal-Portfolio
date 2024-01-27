import styled from "styled-components";
import { theme } from "../../constants";
import { SideBarContext } from "../../pages/_app";
import { useContext } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

const HeaderContainer = styled.div`
  border-bottom: 1px solid ${theme.colors.grey};
  padding: 25px 64px;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1000;
  background-color: ${theme.colors.lightGrey};
  display: flex;
  @media (max-width: 800px) {
    padding: 25px;
  }
`;

const HeaderTitle = styled.h1`
  margin: 0;
  font-weight: 400;
  background-color: ${theme.colors.lightGrey};
  color: ${theme.colors.darkGrey};
  display: flex;
  align-items: center;
  width: max-content;
  padding: 3px 0;
  font-size: 25px;
  & > span:nth-child(2) {
    font-weight: 700;
  }
  @media (max-width: 800px) {
    font-size: 23px;
  }
`;

const MobileToggleButton = styled.button`
  outline: none;
  flex-shrink: 0;
  border: none;
  max-height: 39px;
  align-items: center;
  background-color: transparent;
  cursor: pointer;
  color: ${theme.colors.darkGrey};
  & > * {
    font-size: 25px;
    padding: 0;
  }
  transition: 0.3s;
  margin-right: 25px;
  overflow: hidden;
  padding: 0;
  &:hover {
    transform: scale(1.1);
  }
  display: none;
  @media (max-width: 800px) {
    display: flex;
  }
`;

export function Header() {
  const contextValue = useContext(SideBarContext);
  const sideBar = contextValue.sideBar;
  const setSideBar = (sideBar) => contextValue.toggleSideBar(sideBar);
  return (
    <HeaderContainer>
      <MobileToggleButton onClick={() => setSideBar(!sideBar)}>
        {sideBar ? <Icon icon="cil:x" /> : <Icon icon="cil:menu" />}
      </MobileToggleButton>
      <Link href="/">
        <HeaderTitle>
          <span></span>
          <span>Asif</span>
        </HeaderTitle>
      </Link>
    </HeaderContainer>
  );
}
