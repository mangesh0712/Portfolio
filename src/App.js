import React,{useEffect} from "react";
import { useHistory } from 'react-router-dom'
import SideBar from "./components/SideBar";
import Router from "./components/Router";

function App() {
  const history = useHistory();
  useEffect(() => {
    history.push("/aboutme")

  }, [history])
  return (
    <div>
      <div className="flex lg:flex-row  flex-col ">
        {/* SIDEBAR */}
        <SideBar />
        <span className="w-full lg:h-screen h-auto lg:w-3/12"></span>
        {/* ROUTER */}
        <Router />
      </div>
    </div>
  );
}

export default App;
