import { ReactElement } from "react";

interface ISelectorFormField {
  headerText: string;
  children?: ReactElement;
};

export function SelectorFormField({ headerText, children }: ISelectorFormField) {

  return (
    <div className='mb-4 bg-blue-50 rounded-lg p-4'>
      <p className='mb-2 font-semibold'>{headerText}</p>
      {children}
    </div>
  )
}