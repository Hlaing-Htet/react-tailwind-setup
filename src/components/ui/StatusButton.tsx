import { useState, useEffect, memo } from "react";
import Paragraph from "./Paragraph";

const StatusButton = memo(
  ({ status, size = "default" }: { status: string; size?: any }) => {
    const [activeBackGroundColor, setActiveBackGroundColor] = useState("");
    const [activeTextColor, setActiveTextColor] = useState("");
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
      if (status === "a") {
        setActiveBackGroundColor("bg-green");
        setActiveTextColor("text-green");
        setDisplayText("Active");
      } else if (status === "p") {
        setActiveBackGroundColor("bg-yellow");
        setActiveTextColor("text-yellow");
        setDisplayText("Pending");
      } else if (status === "r") {
        setActiveBackGroundColor("bg-red");
        setActiveTextColor("text-red");
        setDisplayText("Reject");
      } else if (status === "c") {
        setActiveBackGroundColor("bg-red");
        setActiveTextColor("text-red");
        setDisplayText("Cancel");
      } else if (status === "ap") {
        setActiveBackGroundColor("bg-green");
        setActiveTextColor("text-green");
        setDisplayText("Published");
      } else if (status === "d") {
        setActiveBackGroundColor("bg-yellow");
        setActiveTextColor("text-yellow");
        setDisplayText("Draft");
      } else if (status === "del") {
        setActiveBackGroundColor("bg-red");
        setActiveTextColor("text-red");
        setDisplayText("Remove");
      } else if (status === "pb") {
        setActiveBackGroundColor("bg-green");
        setActiveTextColor("text-green");
        setDisplayText("Public");
      } else if (status === "pv") {
        setActiveBackGroundColor("bg-blue");
        setActiveTextColor("text-blue");
        setDisplayText("Private");
      } else if (status === "Reply") {
        setActiveBackGroundColor("bg-yellow");
        setActiveTextColor("text-yellow");
        setDisplayText("Reply");
      } else if (status === "Comment") {
        setActiveBackGroundColor("bg-green");
        setActiveTextColor("text-green");
        setDisplayText("Comment");
      } else if (status === "n") {
        setActiveBackGroundColor("bg-blue");
        setActiveTextColor("text-blue");
        setDisplayText("User");
      } else if (status === "on") {
        setActiveBackGroundColor("bg-green");
        setActiveTextColor("text-green");
        setDisplayText("On");
      } else if (status === "off") {
        setActiveBackGroundColor("bg-red");
        setActiveTextColor("text-red");
        setDisplayText("Off");
      }
    }, [status]);

    return (
      <div
        className={`flex items-center gap-2 px-2 py-1 md:px-4 ${
          size === "default" ? "min-w-[100px]" : ""
        }   bg-opacity-20 rounded-full ${activeTextColor} w-fit ${activeBackGroundColor}`}
      >
        <span className={`p-1 rounded-full ${activeBackGroundColor}`} />
        <Paragraph size={size}>{displayText}</Paragraph>
      </div>
    );
  }
);

export default StatusButton;
