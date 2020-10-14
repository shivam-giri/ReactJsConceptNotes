import React from 'react';
const ChildComponent =() =>{
    return(
        <div>
            <h1>I am child Component</h1>
            <section>
                <ChildComponent user="shashi" />
            </section>
        </div>
    );
};

export default ChildComponent;