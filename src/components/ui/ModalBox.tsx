import { ReactElement, ReactNode, memo, useEffect, useState } from "react";
import { MdClose } from "react-icons/md";

const ModalBox = memo(
  ({
    children,
    btn,
    closebtn,
    actionBtn,
    z = 1000,
    openBox,
    setOpenBox,
    wlg = "lg:w-1/3",
    wmd = "md:w-1/2",
    heightFull = false,
    animateIn = "animate-top-in",
    animateOut = "animate-top-out",
  }: {
    children?: ReactNode;
    btn?: ReactElement;
    closebtn?: ReactElement;
    actionBtn?: ReactElement;
    z?: number;
    openBox?: boolean;
    setOpenBox?: (value: React.SetStateAction<boolean>) => void;
    wlg?: string;
    wmd?: string;
    heightFull?: boolean;
    animateIn?: string;
    animateOut?: string;
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
        {btn && (
          <div
            onClick={() => {
              setIsOpen(true);
              setIsClose(false);
              // if (setOpenBox) {
              //   setOpenBox(true);
              // }
            }}
          >
            {btn}
          </div>
        )}
        {isOpen && (
          <div
<<<<<<< HEAD
            className={`fixed top-0 left-0 z-[${z}] flex items-center justify-center w-screen h-screen bg-black bg-opacity-50 p-5 `}
=======
            className={` ${
              isClose ? `${animateOut}` : `${animateIn}`
            } w-full relative  ${wmd} ${wlg} rounded-lg bg-white dark:bg-black2 px-5 py-5 ${
              heightFull ? "h-2/3 sm:h-full" : "max-h-full"
            } overflow-y-auto overflow-x-hidden `}
>>>>>>> 4ab3db32156c318d6e05e09a2846a04a6d9e13d8
          >
            <div
              className={` ${
                isClose ? `${animateOut}` : `${animateIn}`
              } w-full relative  ${wmd} ${wlg} rounded-lg bg-white px-5 py-5 ${
                heightFull ? "h-2/3 sm:h-full" : "max-h-full"
              } overflow-y-auto overflow-x-hidden `}
            >
              <div className="sticky top-0 right-0 z-50 flex justify-end w-full mb-5 ">
                <div className="p-2 rounded-full w-fit bg-grey2">
                  <MdClose
                    className="cursor-pointer "
                    onClick={() => closeBtn()}
                  />
                </div>
              </div>

              <div className="overflow-auto ">{children}</div>

              {closebtn && (
                <div className="flex items-center justify-center gap-5 mb-5 ">
                  {closebtn && <div onClick={() => closeBtn()}>{closebtn}</div>}
                  {actionBtn && <div>{actionBtn}</div>}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
);

export default ModalBox;
