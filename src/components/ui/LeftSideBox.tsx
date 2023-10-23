import { ReactElement, ReactNode, memo, useEffect, useState } from "react";
import { MdClose } from "react-icons/md";

const LeftSideBox = memo(
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
<<<<<<< HEAD
            className={`fixed top-0 left-0 ${z} h-screen overflow-auto flex justify-start w-screen  bg-black bg-opacity-50 `}
=======
            className={` ${
              isClose ? " animate-left-out" : " animate-left-in"
            }   relative  ${w} dark:bg-black1 bg-white min-h-screen overflow-auto p-5 flex flex-col `}
>>>>>>> 4ab3db32156c318d6e05e09a2846a04a6d9e13d8
          >
            <div
              className={` ${
                isClose ? " animate-left-out" : " animate-left-in"
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
            <div onClick={() => closeBtn()} className="flex-grow "></div>
          </div>
        )}
      </div>
    );
  }
);

export default LeftSideBox;
