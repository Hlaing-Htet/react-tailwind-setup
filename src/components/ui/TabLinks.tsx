import { useState, useRef, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Paragraph from "./Paragraph";

export function TabLinks({
  links,
  underLine = false,
}: {
  links: string[];
  underLine?: boolean;
}) {
  const location = useLocation();
  const initialActiveIndex = links.findIndex((link) =>
    location.pathname.includes(link)
  );

  const [activeIndex, setActiveIndex] = useState<number>(
    initialActiveIndex >= 0 ? initialActiveIndex : 0
  );
  function formatLinkName(name: string) {
    if (!name?.includes("-")) {
      return name;
    }
    return name.replace(/-/g, " ");
  }

  const [activeLinkName, setActiveLinkName] = useState<string>(
    formatLinkName(links[activeIndex])
  );
  const [backgroundPosition, setBackgroundPosition] = useState({
    left: 0,
    width: 0,
  });
  const [animateFakeIn, setAnimateFakeIn] = useState(false);
  const navLinkRefs = useRef<Array<HTMLAnchorElement | null>>([]);

  useEffect(() => {
    const pathSegments = location.pathname.split("/");

    const activeIndexupdate = links.findIndex((link) =>
      pathSegments.includes(link)
    );
    setActiveIndex(activeIndexupdate);
  }, [location.pathname]);

  useEffect(() => {
    if (navLinkRefs.current[activeIndex]) {
      // @ts-expect-error
      const { offsetLeft, offsetWidth } = navLinkRefs.current[activeIndex];
      setBackgroundPosition({ left: offsetLeft, width: offsetWidth });
      setActiveLinkName(formatLinkName(links[activeIndex]));
      setAnimateFakeIn(true);
    }
  }, [activeIndex, links]);

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setAnimateFakeIn(false);
    }, 300); // Adjust this value to match your animation duration

    return () => {
      clearTimeout(animationTimeout);
    };
  }, [animateFakeIn]);

  return (
    <div className="relative">
      <ul className="flex items-center gap-3 text-lg md:gap-3 ">
        {links?.map((link, index) => (
          <li key={index}>
            <NavLink
              ref={(el) => (navLinkRefs.current[index] = el)}
              to={`${link}`}
              onClick={() => setActiveIndex(index)}
              className={`py-1  ${
                activeIndex === index ? "text-black  " : "text-black "
              } flex items-center gap-2 px-2  xl:px-4 transition duration-300 ease-in-out`}
            >
              <Paragraph className="capitalize whitespace-nowrap">
                {formatLinkName(link)}
              </Paragraph>
            </NavLink>
          </li>
        ))}
      </ul>
      <div
        className={`absolute ${
          underLine
            ? " h-1"
            : "top-0 flex  items-center justify-center h-6 md:h-7 lg:h-8 text-white"
        }   transition-all overflow-hidden duration-300 ease-in-out rounded-lg bg-brandColor1`}
        style={{
          width: `${backgroundPosition.width}px`,
          transform: `translateX(${backgroundPosition.left}px)`,
        }}
      >
        <Paragraph
          opacity="opacity100"
          className={`capitalize ${animateFakeIn ? "" : ""}`}
        >
          {underLine ? null : activeLinkName}
        </Paragraph>
      </div>
    </div>
  );
}
