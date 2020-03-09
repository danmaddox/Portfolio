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

    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [company, setCompany] = useState('');
    const [info, setInfo] = useState('');
    const [honey, setHoney] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        // alert(`Submitting ${firstName}`)
        setFirstName('');
        setSecondName('');
        setEmail('');
        setPhone('');
        setCompany('');
        setInfo('');
    }

    
    return(
        <FormContainer id='form' onSubmit={handleSubmit} name="contact"  method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                <label>
                    Don’t fill this out: <input name="bot-field" value={honey} onChange={e => setHoney(e.target.value)} />
                </label>
                </p>
            <NameContainer>
            <Input type="text" placeholder='First name' value={firstName} onChange={e => setFirstName(e.target.value)} required/>
            <Input type="text" placeholder='Second name' value={secondName} onChange={e => setSecondName(e.target.value)} required/>
            </NameContainer>
            <DetailContainer>
            <Input type="email" placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} required/>
            <Input type="tel" placeholder='Phone' value={phone} onChange={e => setPhone(e.target.value)}/>
            </DetailContainer>
            <BusinessContainer>
            <Input type="text" placeholder='Company (optional)' value={company} onChange={e => setCompany(e.target.value)}/>
            {/* <Select>
                <option value="" disabled selected hidden>Enquiry Type</option>
                <option value='1'>Freelance</option>
                <option value='2'>Business</option>
                <option value='3'>Feedback</option>
                <option value='4'>Query</option>
                <option value='5'>Other</option>
            </Select> */}
            </BusinessContainer>
            <TextArea form ="form" name="taname" cols="35" rows='10' wrap="soft" placeholder='Info here...' value={info} onChange={e => setInfo(e.target.value)} required></TextArea>
            <SubmitInput type="submit" value="Submit" />    
        </FormContainer>

        // add in phone and enquiry type then group and finish styling then add to netlify
    )
}



export default Form