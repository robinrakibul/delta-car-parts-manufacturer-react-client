import React from 'react';
const Blogs = () => {
    return (
        <div className='mt-5 mb-5 ml-16 mr-16'>
            <h1 className='p-5 text-center font-[poppins] text-3xl font-bold'>Blogs</h1>
            <div class="collapse rounded">
                <input type="checkbox" class="peer" />
                <div class="collapse-title bg-slate-700 text-primary-content peer-checked:bg-slate-500 peer-checked:text-secondary-content">
                    1.  How will you improve the performance of a React Application?
                </div>
                <div class="collapse-content bg-slate-500 text-primary-content peer-checked:bg-slate-500 peer-checked:text-secondary-content">
                    <p>I will improve perfomance of react application by,</p>
                    <ul className='list-disc p-5'>
                        <li>Writing clean codes,</li>
                        <li>Optimizing website contents for loading light weight contents,</li>
                        <li>Trying to use state and effects as a custom hook, keeping component state local, which may remove hustle to write extra codes and save some memory,</li>
                        <li>Writing consistent react components for making future debugging easier</li>
                        <li>By using latest packages and using a faster server if available</li>
                    </ul>
                </div>
            </div>
            <div class="collapse rounded mt-2">
                <input type="checkbox" class="peer" />
                <div class="collapse-title bg-slate-700 text-primary-content peer-checked:bg-slate-500 peer-checked:text-secondary-content">
                    2.  What are the different ways to manage a state in a React application?
                </div>
                <div class="collapse-content bg-slate-500 text-primary-content peer-checked:bg-slate-500 peer-checked:text-secondary-content">
                    <p className='pl-5 pr-5'>There are many types of state we can use and manage in a React application. We can use state as hook, local state, global state, server state, url state, session state, control state etc</p>
                </div>
            </div>
            <div class="collapse rounded mt-2">
                <input type="checkbox" class="peer" />
                <div class="collapse-title bg-slate-700 text-primary-content peer-checked:bg-slate-500 peer-checked:text-secondary-content">
                    3. How does prototypical inheritance work?
                </div>
                <div class="collapse-content bg-slate-500 text-primary-content peer-checked:bg-slate-500 peer-checked:text-secondary-content">
                    <p className='pl-5 pr-5'>
                        In JavaScript, all the objects have a hidden property which is prototype, and it can be null or it can reference another object. That object is called a prototype. When we read a property from any object, and it is missing, JavaScript automatically takes it from the prototype and this is called the prototypal inheritance.
                    </p>
                </div>
            </div>
            <div class="collapse rounded mt-2">
                <input type="checkbox" class="peer" />
                <div class="collapse-title bg-slate-700 text-primary-content peer-checked:bg-slate-500 peer-checked:text-secondary-content">
                    4.  Why you do not set the state directly in React? For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts?
                </div>
                <div class="collapse-content bg-slate-500 text-primary-content peer-checked:bg-slate-500 peer-checked:text-secondary-content">
                    <ul className='list-disc p-5'>
                        <li>If you update it directly, calling the setState() afterward may just replace the update you made.</li>
                        <li>Directly updating the state does not change a state immediately. Instead, it creates a pending state transition and keep monitoring it, accessing it after calling this will only return the current value.</li>
                        <li>We can eventually lose controll to a state for all components</li>
                    </ul>
                </div>
            </div>
            <div class="collapse rounded mt-2">
                <input type="checkbox" class="peer" />
                <div class="collapse-title bg-slate-700 text-primary-content peer-checked:bg-slate-500 peer-checked:text-secondary-content">
                    5.  You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
                </div>
                <div class="collapse-content bg-slate-500 text-primary-content peer-checked:bg-slate-500 peer-checked:text-secondary-content">
                    <p> I will try to use map function, forEach function to run a loop through all the products name, price, description, etc and then using a condition to search products. Else we can also use filter function to directly do search by value.</p>
                </div>
            </div>
            <div class="collapse rounded mt-2">
                <input type="checkbox" class="peer" />
                <div class="collapse-title bg-slate-700 text-primary-content peer-checked:bg-slate-500 peer-checked:text-secondary-content">
                    6.  What is a unit test? Why should write unit tests?
                </div>
                <div class="collapse-content bg-slate-500 text-primary-content peer-checked:bg-slate-500 peer-checked:text-secondary-content">
                    <p>Unit testing is a testing process where each modules or components are tested to check if there are any bugs in the project. The main aim is to seperate each component or module of the system to identify, analyze and fix the issues.</p>
                    <br />
                    <p>Sometimes developers write unit tests first, then write the code. This method is also known as test-driven development.Here requirements are turned into specific test cases, then the software is improved to pass the new tests. Unit tests are usually written in the form of functions and check the value and behavior of these functions in various scenarios. We should write unit tests for identifying the errors, avoiding unwanted issues.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;