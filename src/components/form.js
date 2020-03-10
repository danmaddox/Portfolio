import React, { useState } from 'react';
import styled from 'styled-components';

const Input = styled.input`
    padding: 0rem;
    margin: 1rem;
    font-size: 1rem;
    background-color: inherit;
    color: white;
    width: 100%;
    // border-radius: 30px;

    outline: 0;
    border-width: 0 0 2px;
    border-color: rgba(71,85,94,1);

    &:focus {
        border-color: white;

    }

    

    &::placeholder{
        color: dark-grey;
    }
`

const SubmitInput = styled.input`
    font-size: 1rem;
    margin: 1rem;

    margin-left: 2.5rem;
    margin-right: 2.5rem;
    // margin-right: 5rem;
    // padding: 0.25em 1em;
    // border-left: 2px solid white;
    // border-right: 2px solid white;
    border: 2px solid white;
    border-radius: 3px;
    background-color: inherit;
    width: 40%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    text-decoration: none;
    font-family: 'Open Sans', sans-serif;
    text-transform: uppercase;
    font-weight: bold;
    align-self: center;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    transition: 0.5s;
    &:hover{
    background: GREEN;
    border: 2px solid black;
    color: black;
    transform: scale(1.1);
    }
`

const Select = styled.select`
    background-color: inherit;
    border-color: rgba(71,85,94,1);
    padding: 0rem;
    margin: 1rem;
    font-size: 1rem;
    color: grey;
    width: 100%;
    
`


const TextArea = styled.textarea`
    padding: 0;
    background-color: inherit;
    font-size: 1rem;
    margin: 1rem;
    outline: 0;
    border-width: 2px;
    border-color: rgba(71,85,94,1);
    color: white;

    &:focus {
        border-color: white;

    }
`
const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0;
    margin: 0;

`

const NameContainer = styled.div`
        display: flex;
        flex-direction: row;
        
`

const DetailContainer = styled.div`
        display: flex;
        flex-direction: row;
        
`

const BusinessContainer = styled.div`
        display: flex;
        flex-direction: row;
        
`







const Form = () => {

    const [values, setValues] = useState({firstName: '', secondName: '', email: '', phone: '', company: '', info: '', honey: ''})

    const handleChange = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)
        setValues({
            ...values, 
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        submit();
        setValues({firstName: '', secondName: '', email: '', phone: '', company: '', info: '', honey: ''});

    }

    const submit = () => {
        console.log('Submit')
        console.log(values);
    }

    
    return(
        <FormContainer id='form' onSubmit={handleSubmit} name="contact"  method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                <label>
                    Don’t fill this out: <input name="bot-field" value={values.honey} onChange={handleChange} />
                </label>
                </p>
            <NameContainer>
            <Input type="text" name='firstName' placeholder='First name' value={values.firstName} onChange={handleChange} required/>
            <Input type="text" name='secondName' placeholder='Second name' value={values.secondName} onChange={handleChange} required/>
            </NameContainer>
            <DetailContainer>
            <Input type="email" name='email' placeholder='Email' value={values.email} onChange={handleChange} required/>
            <Input type="tel" name='phone' placeholder='Phone' value={values.phone} onChange={handleChange}/>
            </DetailContainer>
            <BusinessContainer>
            <Input type="text" name='company' placeholder='Company (optional)' value={values.company} onChange={handleChange}/>
            {/* <Select>
                <option value="" disabled selected hidden>Enquiry Type</option>
                <option value='1'>Freelance</option>
                <option value='2'>Business</option>
                <option value='3'>Feedback</option>
                <option value='4'>Query</option>
                <option value='5'>Other</option>
            </Select> */}
            </BusinessContainer>
            <TextArea form ="form" name="info" cols="35" rows='10' wrap="soft" placeholder='Info here...' value={values.info} onChange={handleChange} required></TextArea>
            <SubmitInput type="submit" value="Submit" />    
        </FormContainer>

        // add in phone and enquiry type then group and finish styling then add to netlify
    )
}



export default Form