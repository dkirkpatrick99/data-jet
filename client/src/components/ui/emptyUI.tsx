import { ReactElement } from "react";

interface IEmptyUI {
  headText?: string;
  subText?: string;
  children?: ReactElement;
};

function EmptyUI({headText, subText, children}: IEmptyUI) {

  return (
    <>
      <div className="w-full h-full flex flex-col justify-center items-center">
        {children}
        <p className="font-semibold text-2xl mb-4">{headText}</p>
        <p>{subText}</p>

      </div>
    </>
  )
};

export default EmptyUI;