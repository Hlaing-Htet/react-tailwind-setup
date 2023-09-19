import { ReactElement, ReactNode, useState } from "react";
import { MdClose } from "react-icons/md";

const RightSideBox = ({
  children,
  btn,
  z = "z-[1000]",
  w = "w-[320px]",
}: {
  children?: ReactNode;
  btn: ReactElement;
  z?: string;
  w?: string;
}) => {
  const [isOpen, setisOpen] = useState(false);
  const [isClose, setisClose] = useState(false);
  const closeBtn = () => {
    setisClose(true);
    setTimeout(() => {
      setisOpen(false);
    }, 290);
  };

  return (
    <div>
      <div
        onClick={() => {
          setisOpen(true);
          setisClose(false);
        }}
      >
        {btn}
      </div>
      {isOpen && (
        <div
          className={`fixed top-0 left-0 ${z} flex  justify-end w-screen min-h-screen bg-black bg-opacity-50 `}
        >
          <div
            onClick={() => closeBtn()}
            className="flex-grow min-h-screen"
          ></div>
          <div
            className={` ${
              isClose ? " animate-right-out" : " animate-right-in"
            }  relative  ${w}  bg-white min-h-screen overflow-auto p-5 flex flex-col`}
          >
            <div className="sticky top-0 right-0 flex justify-end w-full ">
              <MdClose
                className="text-2xl cursor-pointer"
                onClick={() => closeBtn()}
              />
            </div>

            <div className="flex-grow h-full">{children}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RightSideBox;
