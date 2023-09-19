import { ReactElement, ReactNode, useEffect, useState } from "react";
import { MdClose } from "react-icons/md";

const LeftSideBox = ({
  children,
  btn,
  z = 1000,
  openBox,
  setOpenBox,
  w = "w-[320px]",
}: {
  children?: ReactNode;
  btn: ReactElement;
  z?: number;
  openBox?: boolean;
  setOpenBox?: (value: React.SetStateAction<boolean>) => void;
  w?: string;
}) => {
  const [isOpen, setisOpen] = useState(false);
  const [isClose, setisClose] = useState(false);
  const closeBtn = () => {
    setisClose(true);
    setTimeout(() => {
      setisOpen(false);
      if (setOpenBox) {
        setOpenBox(false);
      }
    }, 290);
  };
  useEffect(() => {
    if (openBox) {
      setisOpen(true);
      setisClose(false);
    } else {
      closeBtn();
    }
  }, [openBox]);
  return (
    <div>
      <div
        onClick={() => {
          setisOpen(true);
          setisClose(false);
          if (setOpenBox) {
            setOpenBox(true);
          }
        }}
      >
        {btn}
      </div>
      {isOpen && (
        <div
          className={`fixed top-0 left-0 z-[${z}] flex justify-start w-screen min-h-screen bg-black bg-opacity-50 `}
        >
          <div
            className={` ${
              isClose ? " animate-left-out" : " animate-left-in"
            }   relative  ${w} dark:bg-black1 bg-white min-h-screen overflow-auto p-5 flex flex-col `}
          >
            <div className="sticky top-0 right-0 flex justify-end w-full ">
              <MdClose className="cursor-pointer " onClick={() => closeBtn()} />
            </div>

            <div className="flex-grow h-full">{children}</div>
          </div>
          <div
            onClick={() => closeBtn()}
            className="flex-grow min-h-screen"
          ></div>
        </div>
      )}
    </div>
  );
};

export default LeftSideBox;
