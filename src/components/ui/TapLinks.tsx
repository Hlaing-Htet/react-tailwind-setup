import { NavLink } from "react-router-dom";
import Paragraph from "../ui/Paragraph";

export function TapLinks({
  links,
  underLine,
}: {
  links: string[];
  underLine?: boolean;
}) {
  return (
    <ul className="flex items-center gap-5 text-lg md:gap-5 ">
      {links?.map((link, index) => (
        <li key={index}>
          <NavLink
            to={`${link}`}
            className={({ isActive }) =>
              isActive
                ? ` py-1   ${
                    underLine
                      ? " border-b-2 border-primary"
                      : "text-white rounded-lg px-4 bg-primary"
                  } flex items-center gap-2`
                : "   flex items-center gap-2 "
            }
          >
            <Paragraph className="capitalize ">{link}</Paragraph>
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
