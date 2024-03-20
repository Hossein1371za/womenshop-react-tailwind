import React from "react";
import Core from "./Core";
import { DataProvider } from "./Context";

const App = () => {
  return (
    <DataProvider>
      <div>
        <Core />
      </div>
    </DataProvider>
  );
};

export default App;
