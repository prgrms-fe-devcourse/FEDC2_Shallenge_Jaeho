import { Input } from "@chakra-ui/react";
import Header from "../components/Header";
export default {
  title: "Component/Header",
  component: "Header",
};

export const Default = () => {
  return (
    <Header>
      <div
        style={{
          fontWeight: 700,
          fontSize: 36,
          lineHeight: "120%",
          color: "#ff7900",
        }}
      >
        Shallange
      </div>
    </Header>
  );
};
// chakra ui 적용 안됨
export const WithInput = () => {
  return (
    <div>
      <Header>
        <div style={{ width: 320 }}>
          <Input variant="filled" placeholder="@김땡땡" />
        </div>
      </Header>
    </div>
  );
};
