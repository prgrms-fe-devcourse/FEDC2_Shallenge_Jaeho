import React from "react";

type headerTypes = {
  children: React.ReactNode;
  backgroundColor?: string;
};

const Header = ({ children, backgroundColor = "#ffffff" }: headerTypes) => {
  const headerStyle: React.CSSProperties = {
    height: 80,
    width: "100%",
    maxWidth: 640,
    borderBottom: "1px solid #DADADA",
    backgroundColor,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const logoStyle: React.CSSProperties = {
    width: 40,
    height: 40,
    position: "absolute",
    left: "34px",
  };

  return <div style={headerStyle}>{children}</div>;
};

export default Header;
