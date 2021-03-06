/* eslint-disable @typescript-eslint/no-var-requires */
import { Buffer } from "buffer";

import React from "react";

import styled from "@emotion/styled";

interface Props {
  name: string;
  size?: number;
  color?: string;
}

const Icon = ({ name, size = 38, color = "#000000" }: Props) => {
  const iconStyle: React.CSSProperties = {
    width: size,
    height: size,
    stroke: color,
  };

  const icon = require("feather-icons").icons[name];
  const svg = icon ? icon.toSvg(iconStyle) : "";
  const base64 = Buffer.from(svg, "utf8").toString("base64");

  return (
    <IconWrapper>
      <img
        src={`data:image/svg+xml;base64,${base64}`}
        alt={name}
        data-icon="icon"
      />
    </IconWrapper>
  );
};

export default Icon;

const IconWrapper = styled.i`
  display: inline-block;
`;
