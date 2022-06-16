import InputLayout from "@layout/InputLayout";
import AppRouter from "./components/Router";
function App() {
  return (
    <div>
      <InputLayout placeholder="@김땡땡">
        <AppRouter />
      </InputLayout>
    </div>
  );
}

export default App;
