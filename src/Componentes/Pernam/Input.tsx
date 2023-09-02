import React from "react";
import { InputHTMLAttributes } from "react";

export const input = (props: InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <div className="relative mt-2">
            <input {...props} className=" peer rounded-md w-full px-4 yp-3 text-sm text-gray-700 border-gray-200 border-2
            focus:bg-white bg-white
             placeholder-shoun:bg-gray-200 placeholder-shown:border-none placeholder-transparent" />;
            <label htmlFor={props?.id}
                className="absolute left-2 -top-2.5 px-1 text-sm transition-all bg-white rounded text-gray-500 
                peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400
                peer-placeholder-shown:top-3  peer-placeholder-shown:left-4 peer-placeholder-shown:bg-gray-200
                peer-focus:-top2.5 peer-focus:left-2 peer-focus:text-blue-500 peer-focus:bg-white peer-focus:font-semibold "
            >{props?.placeholder}</label>
        </div>

    )
};