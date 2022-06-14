/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import styled from "@emotion/styled";
import { Buffer } from "buffer";

type iconTypes = {
  name: string;
  size?: number;
  color?: string;
};

const IconWrapper = styled.i`
  display: inline-block;
`;

const Icon = ({ name, size = 38, color = "#000000" }: iconTypes) => {
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
      <img src={`data:image/svg+xml;base64,${base64}`} alt={name} />
    </IconWrapper>
  );
};

export default Icon;
