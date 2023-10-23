import { ReactNode, memo } from "react";

const Divider = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex items-center w-full">
      <div className="flex-grow border-t border-gray-300"></div>
      <div className="mx-4 text-gray-500">{children}</div>
      <div className="flex-grow border-t border-gray-300"></div>
    </div>
  );
};

export default memo(Divider);
