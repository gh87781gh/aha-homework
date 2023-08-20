"use client";

import { useState } from "react";
import styled from "styled-components";
import { colors, layout, mixins } from "components/variables";

import { IconLogo, IconFiles } from "utility/icon";

const Aside = styled.aside`
  background-color: ${colors.darkSideBar};
  position: fixed;
  top: 0;
  left: 0;
  width: ${layout.sideBarWidth};
  height: 100vh;
  color: ${colors.lightDarker};
`;
const Logo = styled.div`
  width: 100%;
  height: 88px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Nav = styled.ul`
  ${mixins.resetUl}

  li {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    margin-bottom: 20px;
    cursor: pointer;

    &.active {
      color: ${colors.light};
    }

    em {
      width: 100%;
      font-style: normal;
      display: block;
      font-size: 12px;
      line-height: 18px;
      text-align: center;
      margin-top: 5px;
    }
  }
`;

export default function SideBar() {
  const menu: string[] = ["Home", "Tags"];
  const [selectedKey, setSelectedKey] = useState(menu[0]);

  return (
    <Aside>
      <Logo>
        <IconLogo />
      </Logo>
      <Nav>
        {menu.map((key: string) => (
          <li
            key={key}
            className={`${key === selectedKey ? "active" : ""}`}
            onClick={() => setSelectedKey(key)}
          >
            <IconFiles />
            <em
              style={{ visibility: key === selectedKey ? "visible" : "hidden" }}
            >
              {key}
            </em>
          </li>
        ))}
      </Nav>
    </Aside>
  );
}
