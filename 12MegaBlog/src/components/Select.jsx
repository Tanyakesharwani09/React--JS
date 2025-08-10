import React , {useId} from "react";


function Select({
    options,
    label,
    className,
    ...props
}, ref){
    const id = useId()
    return (
        <div className='w-full'>
            {label && <label htmlFor={id} className=''></label>}
            <select
            {...props}
            id={id}
            ref={ref}
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            >
{/* agar options ke andar value hi nhi h aur looop kroge to pacca crash krega   --> solution kya h ki optionally looop krlo agar h options hai to chalega warna nhi chalega */}
                {options?.map((option) =>(
                    <option key ={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>

        </div>
    )
}
export default React.forwardRef(Select);