import { useState } from "react";
import Topbar from "./components/topbar";
import Home from "./components/pages/home";
import Shop from "./components/pages/shop";
import Account from "./components/pages/account";

function App() {
  // const [count, setCount] = useState(0)
  // const sendMessage = async () => {
  //   let [tab] = await chrome.tabs.query({ active: true });
  //   console.log(tab.id);
  //   chrome.scripting.executeScript({
  //     target: {tabId: tab.id },
  //     func: () => {
  //       alert("Hello from extension!");
  //     }
  //   });
  // }
  const [page, setPage] = useState("home");
  return (
    <div className="w-[800px] h-[650px]">
      <Topbar setPage={setPage} page={page} />
      {page === "home" && <Home />}
      {page === "shop" && <Shop />}
      {page === "account" && <Account />}
    </div>
  );
}

export default App;
