"use client";

import styled from "styled-components";
import { useState, useMemo, useCallback, useEffect } from "react";

import { colors } from "components/variables";

const Bar = styled.div<{ percent: any }>`
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
    width: ${(props) => props.percent}%;
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
  const percentWidth: any = {
    3: 0,
    6: 18,
    9: 36,
    12: 54,
    15: 72,
    50: 100,
  };
  const width = useMemo(() => {
    let target: number = 0;
    if (props.percent <= 3) {
      target = percentWidth[3];
    } else if (props.percent <= 15) {
      const x = Math.floor(props.percent / 3) - 1;
      target =
        ((props.percent - x * 3) *
          (percentWidth[x * 3 + 3] - percentWidth[x * 3])) /
          3 +
        percentWidth[x * 3];
    } else if (props.percent <= 50) {
      target =
        ((props.percent - 15) * (percentWidth[50] - percentWidth[15])) / 35 +
        percentWidth[15];
    } else {
      target = 100;
    }
    return target;
  }, [props.percent]);

  return (
    <Bar percent={width}>
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
