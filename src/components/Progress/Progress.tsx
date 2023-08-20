"use client";

import styled from "styled-components";

import { colors } from "components/variables";

const percentWidth: any = {
  3: 0,
  6: 18,
  9: 36,
  12: 54,
  15: 72,
  50: 100,
};
const Bar = styled.div<{ percent: number }>`
  width: 100%;
  height: 8px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  position: relative;

  em {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    display: block;

    width: ${(props) =>
      props.percent <= 3
        ? percentWidth[3]
        : props.percent <= 6
        ? percentWidth[6]
        : props.percent <= 9
        ? percentWidth[9]
        : props.percent <= 12
        ? percentWidth[12]
        : props.percent <= 15
        ? percentWidth[15]
        : props.percent <= 50
        ? percentWidth[50]
        : 0}%;

    background: linear-gradient(to left, #ffd25f, #ff5c01);
    border-radius: 10px;

    &::before {
      content: "";
      display: block;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      border: 8px solid #ffd25f;
      background-color: ${colors.dark};
      position: absolute;
      top: 50%;
      right: -15px;
      transform: translateY(-50%);
    }
  }

  span.percent-dot {
    display: inline-block;
    position: absolute;
    top: 2rem;
    color: ${colors.light};
    font-size: 16px;
    line-height: 24px;
    opacity: 0.5;
    transform: translateX(-50%);

    &.percent-dot-3 {
      left: 0%;
    }
    &.percent-dot-6 {
      left: 18%;
    }
    &.percent-dot-9 {
      left: 36%;
    }
    &.percent-dot-12 {
      left: 54%;
    }
    &.percent-dot-15 {
      left: 72%;
    }
    &.percent-dot-50 {
      left: 100%;
    }
  }
`;

export default function Progress(props: { percent: number }) {
  return (
    <Bar percent={props.percent}>
      <em></em>
      <span className="percent-dot percent-dot-3">3</span>
      <span className="percent-dot percent-dot-6">6</span>
      <span className="percent-dot percent-dot-9">9</span>
      <span className="percent-dot percent-dot-12">12</span>
      <span className="percent-dot percent-dot-15">15</span>
      <span className="percent-dot percent-dot-50">50</span>
    </Bar>
  );
}
