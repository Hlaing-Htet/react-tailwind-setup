import { ReactElement, ReactNode, memo, useEffect, useState } from "react";
import { MdClose } from "react-icons/md";

const RightSideBox = memo(
  ({
    children,
    btn,
    z = "z-[1000]",
    openBox,
    setOpenBox,
    w = "w-[320px]",
  }: {
    children?: ReactNode;
    btn: ReactElement;
    z?: string;
    openBox?: boolean;
    setOpenBox?: (value: React.SetStateAction<boolean>) => void;
    w?: string;
  }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isClose, setIsClose] = useState(false);
    const closeBtn = () => {
      setIsClose(true);
      setTimeout(() => {
        setIsOpen(false);
        if (setOpenBox) {
          setOpenBox(false);
        }
      }, 290);
    };
    useEffect(() => {
      if (openBox) {
        setIsOpen(true);
        setIsClose(false);
      } else {
        closeBtn();
      }
    }, [openBox]);
    return (
      <div>
        <div
          onClick={() => {
            setIsOpen(true);
            setIsClose(false);
            if (setOpenBox) {
              setOpenBox(true);
            }
          }}
        >
          {btn}
        </div>
        {isOpen && (
          <div
            className={`fixed top-0 left-0 ${z} h-screen overflow-auto flex justify-start w-screen  bg-black bg-opacity-50 `}
          >
            <div onClick={() => closeBtn()} className="flex-grow "></div>
            <div
              className={` ${
                isClose ? " animate-right-out" : " animate-right-in"
              }    relative ${w} `}
            >
              <div className="min-h-screen p-5 bg-white ">
                <div className="sticky right-0 flex justify-end w-full top-5 ">
                  <MdClose
                    className="cursor-pointer "
                    onClick={() => closeBtn()}
                  />
                </div>

                <div className="">{children}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
);

export default RightSideBox;
