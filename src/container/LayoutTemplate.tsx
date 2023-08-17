"use client";

import { ConfigProvider } from "antd";

import { GlobalStyle, GlobalResetStyle } from "components/Common/GlobalStyles";
import { colors, fontSizeBase } from "components/variables";

export default function LayoutTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontSize: fontSizeBase,
          colorPrimary: colors.primary,
          colorPrimaryHover: colors.primaryHover,
          colorPrimaryActive: colors.primaryActive,
          colorBorder: colors.borderBase,
        },
      }}
    >
      <GlobalStyle />
      <GlobalResetStyle />
      {children}
    </ConfigProvider>
  );
}
