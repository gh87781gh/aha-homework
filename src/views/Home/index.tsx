"use client";

import styled from "styled-components";

import { colors } from "components/variables";
import { H1 } from "components/Common/Typography";
import { Input } from "components/Form";
import { Progress } from "components/Progress";

const StyledHome = styled.div`
  padding: 54px 120px;
`;
const HR = styled.hr`
  border: 0;
  height: 1px;
  background: ${colors.light};
  opacity: 0.1;
  margin-top: 30px;
  margin-bottom: 30px;
`;
const Number = styled.span`
  font-size: 48px;
  line-height: 72px;
  margin-right: 10px;
`;

export default function Home() {
  const onSearch = (value: string) => console.log(value);

  return (
    <StyledHome>
      <H1>Search</H1>
      <Input
        allowClear={true}
        onChange={() => console.log("onChange")}
        onPressEnter={() => console.log("onPressEnter")}
        placeholder="Keyword"
      />
      <HR />
      <H1># of results per page</H1>
      <Number>30</Number>results
      <Progress percent={23} />
    </StyledHome>
  );
}
