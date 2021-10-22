import React, { FC } from "react";
 
export const Protected: FC = () => {
    return (
        <div className="protected">
            <input type="text" placeholder="Email" />
            <br />
            <input type="text" placeholder="Password" />        
        </div>
    )
}