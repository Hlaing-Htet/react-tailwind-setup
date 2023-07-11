import { ReactElement, ReactNode, useState } from "react";
import { MdClose } from "react-icons/md";

const ModalBox = ({
  children,
  btn,
  closebtn,
  actionBtn,
  z = 1000,
}: {
  children?: ReactNode;
  btn: ReactElement;
  closebtn?: ReactElement;
  actionBtn?: ReactElement;
  z?: number;
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
          className={`fixed top-0 left-0 z-[${z}] flex items-center justify-center w-screen h-screen bg-black bg-opacity-50 `}
        >
          <div
            className={` ${
              isClose ? "animate-top-out" : "animate-top-in"
            } w-full relative  m-5 md:w-1/2 lg:w-1/3 rounded-lg bg-white px-5 py-5 max-h-screen overflow-y-auto overflow-x-hidden `}
          >
            <div className="sticky top-0 right-0 flex justify-end w-full ">
              <MdClose className="cursor-pointer " onClick={() => closeBtn()} />
            </div>

            <div className="overflow-auto ">{children}</div>

            <div className="flex items-center justify-center gap-5 mb-5 ">
              {closebtn && <div onClick={() => closeBtn()}>{closebtn}</div>}
              {actionBtn && <div>{actionBtn}</div>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalBox;
