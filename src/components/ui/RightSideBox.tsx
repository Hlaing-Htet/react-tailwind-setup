import { ReactElement, ReactNode, useState } from "react";
import { MdClose } from "react-icons/md";

const RightSideBox = ({
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
        <div className="fixed top-0 left-0 z-50 flex justify-end w-screen h-screen bg-black bg-opacity-50 ">
          <div
            className={` ${
              isClose ? " animate-right-out" : " animate-right-in"
            }  relative min-h-screen w-[320px]  bg-white p-5 max-h-screen overflow-y-auto overflow-x-hidden `}
          >
            <div className="sticky top-0 right-0 flex justify-end w-full ">
              <MdClose className="cursor-pointer " onClick={() => closeBtn()} />
            </div>

            <div className="overflow-auto ">{children}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RightSideBox;
