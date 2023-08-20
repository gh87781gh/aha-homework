"use client";

import styled from "styled-components";
import { layout, colors } from "components/variables";

const StyledArticle = styled.article`
  margin-left: ${layout.sideBarWidth};
  background-color: ${colors.dark};
  color: ${colors.light};
  height: 100vh;
`;

export default function Article({ children }: { children: React.ReactNode }) {
  return <StyledArticle>{children}</StyledArticle>;
}
