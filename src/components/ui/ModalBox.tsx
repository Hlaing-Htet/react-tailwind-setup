import { ReactElement, ReactNode, useEffect, useState } from "react";
import { MdClose } from "react-icons/md";

const ModalBox = ({
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
      {btn && (
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
      )}
      {isOpen && (
        <div
          className={`fixed top-0 left-0 z-[${z}] flex items-center justify-center w-screen h-screen bg-black bg-opacity-50 p-5 `}
        >
          <div
            className={` ${
              isClose ? `${animateOut}` : `${animateIn}`
            } w-full relative  ${wmd} ${wlg} rounded-lg bg-white dark:bg-black2 px-5 py-5 ${
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
};

export default ModalBox;
