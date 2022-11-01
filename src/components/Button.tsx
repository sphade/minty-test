import React, { ReactNode, FC } from "react";
interface IButton {
  children: ReactNode;
}
const Button: FC<IButton> = ({children}) => {
    return <button className='bg-[#27AE60] text-white rounded-[30px] py-2 px-4 font-semibold uppercase '>{ children}</button>;
};

export default Button;
