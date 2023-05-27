import { useState, useEffect } from "react";
import Paragraph from "./Paragraph";

const StatusBotton = ({ status }: { status: string }) => {
  const [activeColor, setActiveColor] = useState("");
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    if (status === "a") {
      setActiveColor("bg-green");
      setDisplayText("Active");
    } else if (status === "p") {
      setActiveColor("bg-yellow");
      setDisplayText("Pending");
    } else if (status === "r") {
      setActiveColor("bg-red");
      setDisplayText("Reject");
    } else if (status === "c") {
      setActiveColor("bg-red");
      setDisplayText("Cancel");
    }
  }, [status]);

  return (
    <div
      className={`flex items-center gap-2 px-4 py-2 bg-opacity-20 rounded-full w-fit ${activeColor}`}
    >
      <span className={`p-2 rounded-full ${activeColor}`} />
      <Paragraph>{displayText}</Paragraph>
    </div>
  );
};

export default StatusBotton;
