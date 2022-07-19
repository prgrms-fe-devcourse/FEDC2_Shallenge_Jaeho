import { Suspense } from "react";

import AppRouter from "./components/Router";
const App = () => {
  return (
    <Suspense fallback={<></>}>
      <AppRouter />
    </Suspense>
  );
};

export default App;
