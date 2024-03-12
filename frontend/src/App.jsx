import { useState, useEffect } from "react";
import { axiosInstance } from "./config/axios";
import { Message } from "./components/message";

function App() {
  const [message, setMessage] = useState("no message");

  useEffect(() => {
    async function fetchMessage() {
      try {
        const response = await axiosInstance("/message");
        console.log(response);
        setMessage(response.data.message);
      } catch (error) {
        console.log(error);
      }
    }

    fetchMessage();
  }, [message]);
  return (
    <>
      <h1>App</h1>
      <Message message={message} color={"purple"}/>
      <Message message= "Bye World" color={'pink'} />

    </>
  );
}

export default App;
