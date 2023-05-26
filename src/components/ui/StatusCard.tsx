import { numberWithCommas } from "@/utils/numberWithCommas";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import { ComponentType } from "react";

interface StatusCardProps {
  textColor: string;
  borderColor: string;
  bgColor: string;
  shadowColor: string;
  totalUser: number;
  Icon: ComponentType<{ className: string }>; // Update Icon prop type
  text: string;
}

const StatusCard = ({
  textColor,
  borderColor,
  bgColor,
  shadowColor,
  totalUser,
  Icon,
  text,
}: StatusCardProps) => {
  return (
    <article
      className={`flex flex-col bg-white hover:shadow-lg ${shadowColor} items-center justify-center gap-2 p-5 border rounded-xl ${borderColor}`}
    >
      <div className={`p-3 bg-opacity-25 rounded-full ${bgColor}`}>
        <Icon className={`text-3xl ${textColor}`} />{" "}
        {/* Pass className as a spread attribute */}
      </div>
      <Heading size={"large1"}>{numberWithCommas(totalUser)}</Heading>
      <Paragraph opacity={"opacity50"}>{text}</Paragraph>
    </article>
  );
};

export default StatusCard;
