import Header from "./layout/Header";
import { Input } from "@chakra-ui/react";
function App() {
  return (
    <div>
      <Header>
        <div style={{ width: 320 }}>
          <Input variant="filled" placeholder="@김땡땡" />
        </div>
      </Header>
    </div>
  );
}

export default App;
