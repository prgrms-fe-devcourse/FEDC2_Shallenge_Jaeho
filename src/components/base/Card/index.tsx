import { Avatar, Heading, Text, Box } from "@chakra-ui/react";

type CardTypes = {
  type: "challange" | "user" | "follow";
  heading: string;
  text: string;
  borderRadius?: number;
  avatarSrc?: string;
  avatarSize?: "2xs" | "xs" | "sm" | "lg" | "xl" | "2xl";
};

const Card = ({
  borderRadius = 5,
  type,
  avatarSize = "lg",
  avatarSrc,
  heading,
  text,
}: CardTypes) => {
  const CardStyle: React.CSSProperties = {
    borderRadius,
    maxWidth: 610,
    margin: "0 15px",
    height: type === "challange" ? 120 : 96,
    backgroundColor: "#ffffff",
    display: "flex",
    alignItems: "center",
    padding: 16,
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  };

  return (
    <Box style={CardStyle}>
      <Avatar size={avatarSize} src={avatarSrc}></Avatar>
      <Box marginLeft={"24px"}>
        <Heading
          size={"md"}
          marginBottom={type === "challange" ? "16px" : "8px"}
        >
          {heading}
        </Heading>
        <Text fontSize={"md"}>{text}</Text>
      </Box>
    </Box>
  );
};
export default Card;
