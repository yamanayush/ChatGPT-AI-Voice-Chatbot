import { useState } from "react";
import axios from "axios";

type Props = {
  setMessages: any;
};

function Title({ setMessages }: Props) {
  const [isResetting, setIsResetting] = useState(false);

  // Reset conversation
  const resetConversation = async () => {
    setIsResetting(true);

    await axios
      .get("https://chatgpt-ai-voice-chatbot.onrender.com/reset")
      .then((res) => {
        if (res.status == 200) {
          setMessages([]);
        } else {
          console.error(
            "There was an error with the API request to backend."
          );
        }
      })
      .catch((err) => {
        console.error(err.message);
      });

    setIsResetting(false);
  };

  return (
    <div className="flex justify-between items-center w-full p-4 bg-white text-gray-800 shadow-md">
      <h1 className="font-bold text-2xl">AI Voice Assistant</h1>
      <button
        onClick={resetConversation}
        className={
          "transition-all duration-300 hover:text-gray-400 " +
          (isResetting && "animate-pulse")
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0011.664 0M2.985 19.644A8.25 8.25 0 0116.023 9.348"
          />
        </svg>
      </button>
    </div>
  );
}

export default Title;
