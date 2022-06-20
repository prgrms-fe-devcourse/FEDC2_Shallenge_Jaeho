import React from "react";

type headerTypes = {
  children: React.ReactNode;
  backgroundColor?: string;
};

const Header = ({ children, backgroundColor = "#ffffff" }: headerTypes) => {
  const headerStyle: React.CSSProperties = {
    height: 80,
    width: "100%",
    maxWidth: "640px",
    borderBottom: "1px solid #DADADA",
    backgroundColor,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  };

  const logoStyle: React.CSSProperties = {
    width: 40,
    height: 40,
    position: "absolute",
    left: "34px",
  };

  return (
    <div style={headerStyle}>
      <div style={logoStyle}>
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="20.813"
            y="20.6558"
            width="19.187"
            height="19.3443"
            rx="8"
            fill="#3FDCFF"
          />
          <rect
            x="20.813"
            width="19.187"
            height="19.3443"
            rx="8"
            fill="#83FF57"
          />
          <rect
            y="20.6558"
            width="19.187"
            height="19.3443"
            rx="8"
            fill="#FF2E00"
          />
          <path
            d="M11.6431 25.6044C11.472 25.5573 11.3235 25.4687 11.2184 25.351C11.1133 25.2333 11.0569 25.0924 11.0569 24.9478C11.0569 21.7755 11.8545 19.2385 13.4284 17.4067C15.33 15.1935 18.3296 14.0018 22.3577 13.8538V10.3664C22.3578 10.2304 22.4077 10.0975 22.5015 9.984C22.5953 9.87053 22.7287 9.78153 22.8852 9.72807C23.0417 9.6746 23.2144 9.65901 23.3819 9.68322C23.5494 9.70744 23.7043 9.77041 23.8274 9.86431L33.3896 17.155C33.4746 17.2198 33.5423 17.2978 33.5885 17.3841C33.6347 17.4704 33.6585 17.5632 33.6585 17.6571C33.6585 17.751 33.6347 17.8439 33.5885 17.9302C33.5423 18.0165 33.4746 18.0944 33.3896 18.1592L23.8274 25.4499C23.7043 25.5438 23.5494 25.6068 23.3819 25.631C23.2144 25.6552 23.0417 25.6396 22.8852 25.5861C22.7287 25.5327 22.5953 25.4437 22.5015 25.3302C22.4077 25.2167 22.3578 25.0838 22.3577 24.9478V21.486C19.9128 21.545 18.0656 21.8614 16.5948 22.4685C15.0057 23.1247 13.8533 24.105 12.6113 25.3761C12.4999 25.4901 12.3467 25.5734 12.1731 25.6145C11.9996 25.6556 11.8143 25.6523 11.6431 25.6053V25.6044Z"
            fill="#FF7900"
          />
        </svg>
      </div>
      {children}
    </div>
  );
};

export default Header;
