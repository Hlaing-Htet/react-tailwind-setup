import { ReactElement, ReactNode, useState } from "react";
import { MdClose } from "react-icons/md";

const LeftSideBox = ({
  children,
  btn,
}: {
  children?: ReactNode;
  btn: ReactElement;
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
        <div className="fixed top-0 left-0 z-50 flex justify-start w-screen h-screen bg-black bg-opacity-50 ">
          <div
            className={` ${
              isClose ? " animate-left-out" : " animate-left-in"
            }  relative min-h-screen w-[320px]  bg-white p-5 max-h-screen overflow-y-auto overflow-x-hidden `}
          >
            <div className="sticky top-0 left-0 flex justify-end w-full ">
              <MdClose className="cursor-pointer " onClick={() => closeBtn()} />
            </div>

            <div className="overflow-auto ">{children}</div>
          </div>
          <div onClick={() => closeBtn()} className="flex-grow h-full"></div>
        </div>
      )}
    </div>
  );
};

export default LeftSideBox;
