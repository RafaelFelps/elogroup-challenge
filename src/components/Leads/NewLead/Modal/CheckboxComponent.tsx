import React from "react";

const Checkbox = (id: string, type: string, name: string, handleClick: any, isChecked: boolean) => {
    console.log(name);
    return (
        <tr>
            <td>
                <input
                    id={id}
                    name={name}
                    type="checkbox"
                    onChange={handleClick}
                    checked={isChecked}
                />
            </td>
            <td>
                {name}
            </td>
        </tr>
    );
};

export default Checkbox;
