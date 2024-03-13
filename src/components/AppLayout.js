import Header from "./Header";
import Body from "./Body";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import UserContext from "../utils/UserContext";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";

const AppLayout = () => {
  const [userName, setUserName] = useState();

  // Authenticate User
  useEffect(() => {
    // Send User name & Password
    const data = {
      name: "Kapil",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ logedInUser: userName, setUserName }}>
        <div className="app font-mono">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

export default AppLayout;
