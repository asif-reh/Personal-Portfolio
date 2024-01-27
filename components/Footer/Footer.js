import styled from "styled-components";
import { theme } from "../../constants";

const FooterContainer = styled.div`
  padding: 40px;
  text-align: center;
  width: 100%;
  background-color: ${theme.colors.white};
  color: ${theme.colors.darkGrey};
  @media (max-width: 800px) {
    font-size: 15px;
  }
`;

export function Footer() {
  return (
    <FooterContainer>
      <span>&copy; 2023 Asif. All rights reserved.</span>
    </FooterContainer>
  );
}
