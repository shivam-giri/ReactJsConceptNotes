import React, { Children } from "react";

const UserComponent =({
    name, age, company , salary, children
})=>{
    // console.log(children);
    return(
        <div>
            <h1>Name: {name}</h1>
            <p>Age: {age}</p>
            <p>Company: {company}</p>
            <p>Salary: {salary}</p>
            <p>{children}</p>
        </div>
    );
};
export default UserComponent;