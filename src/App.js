//root component
import React from 'react';

import UserComponent from './component/UserComponent';
const App = () =>{
    return(
        <section id = "ParentBlock">
            <article>
                <UserComponent
                    name = "mani"
                    age = {20}
                    company = "cgi"
                    salary = {100000}
                    >
                    <button>Hire Me</button>
                </UserComponent>
                
                <UserComponent
                    name = "shivam"
                    age = {25}
                    company = "google"
                    salary = {100022200}
                    >
                    <button>Hire Me</button>
                </UserComponent>

                
                <UserComponent
                    name = "subham"
                    age = {27}
                    company = "RBI"
                    salary = {10005500}
                    >
                    <button>Hire Me</button>
                </UserComponent>
            </article>

        </section>
    )}
export default App;