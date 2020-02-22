import React, { useState } from 'react';

const Form = () => {

    const [firstName, setFirstName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    
    return(
        <form id='form'>
            <label>First Name:<input type="text" value={firstName} onChange={e => setFirstName(e.target.value)}/></label>
            <label>Second Name:<input type="text"/></label>
            <label>Email<input type="email"/></label>
            <label>Message<textarea form ="form" name="taname" cols="35" wrap="soft"></textarea></label>
            <input type="submit" value="Submit" />    
        </form>
    )
}



export default Form