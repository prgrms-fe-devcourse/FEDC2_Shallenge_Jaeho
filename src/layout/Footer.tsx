import React from "react";
import styled from "@emotion/styled";
import Icon from "@base/Icon";
import ChakraText from "@base/ChakraText";

type footerTypes = {
  width: number;
  height: number;
};

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 640px;
  width: 100%;
  max-height: 96px;
  height: 100%;
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

const Footer = ({ width = 640, height = 96 }: footerTypes) => {
  const FooterStyle: React.CSSProperties = {
    width,
    height,
  };

  const footerList = [
    {
      name: "home",
      nameKor: "홈",
    },
    {
      name: "compass",
      nameKor: "채널",
    },
    {
      name: "bell",
      nameKor: "알림",
    },
    {
      name: "user",
      nameKor: "로그인",
    },
  ];

  return (
    <Container style={FooterStyle}>
      {footerList.map((item) => (
        <SubContainer key={item.name}>
          <Icon name={item.name} />
          <ChakraText size="md" align="center">
            {item.nameKor}
          </ChakraText>
        </SubContainer>
      ))}
    </Container>
  );
};

export default Footer;
