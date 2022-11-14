import { Route, Routes } from "react-router-dom";
import { routesConfig } from "./config/routesConfig";
const App = () => {
  return (
    <Routes>
      {routesConfig.map((route) => (
        <Route key={route.id} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default App;
