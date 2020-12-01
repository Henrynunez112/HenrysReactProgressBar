import React, { useState } from 'react';
import ProgressBar from './ProgressBar.js'

const FormAndProgressBar = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    let percent = 0

    if(firstName){
        percent += 25;
    }
    if(lastName){
        percent += 25
    }
    if(email){
        let splitArr = email.split("");
        if(splitArr.includes("@")){
            percent += 50
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("congrats you made it!!!!");
        setEmail("");
        setFirstName("");
        setLastName("");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder="first name" value={firstName} required onChange={(e) => {
                    setFirstName(e.currentTarget.value)
                }} />
                <input type='text' placeholder="last name" value={lastName} required onChange={(e) => {
                    setLastName(e.currentTarget.value)
                }} />
                <input type='text' placeholder="email" value={email} required onChange={(e) => {
                    setEmail(e.currentTarget.value)
                }} />
            </form>
            <ProgressBar bgColor={"#04395E"} completed={percent} />
            {percent === 100 ? <button onClick={handleSubmit}>Submit</button> : null}
        </div>
    )

};
export default FormAndProgressBar; 