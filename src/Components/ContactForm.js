import React from 'react'
import styled from 'styled-components'
import emailjs from 'emailjs-com'
import { TopBar, Contents} from './Layer.style.js'

const FormWrapper = styled.div`
  position: absolute;
  top: 15%;
  left: 20%;
  border: 3px solid black;
  border-radius: 15px;

  form {
    height: 100%;
    display: flex;
    flex-direction: column;
    max-width: 400px;
    width: 100vw;
    row-gap: 0.5rem;

    input, textarea {
      padding: 0.5rem;
      border: 3px solid black;

      &::placeholder {
        font-family: 'Poppins', sans-serif;
      }

      &:focus {
        outline: none;
      }
    }

    textarea {
      resize: none;
      height: 10rem;
      overflow-y: scroll;
    }

    input[type=submit] {
      background-color: #a2b4fe;
      font-family: 'Poppins', sans-serif;
      font-weight: bold;
      letter-spacing: 1.2px;
      border-radius: 15px;
      width: 120px;
      align-self: center;

      &:hover {
        cursor: pointer;
        background-color: #ec9ed6;
        color: #fff;
      }
    }

  }
`

export default function ContactForm( {closeContactForm} ) {

  const sendEmail = (e) => {
    e.preventDefault();
    console.dir(e.target)

    emailjs.sendForm('service_6hao1lc', 'template_1zubnf9', e.target, 'user_qRNtvHSVMDUVHuxYSwp4q')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      })
      e.target.reset()
  }

  return (
    <FormWrapper>
      <TopBar>
        <li onClick={closeContactForm}></li>
        <li></li>
        <li></li>
      </TopBar>
      <Contents>
        <form onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Name"/>
          <input type="email" name="email" placeholder="Email"/>
          <input type="text" name="subject" placeholder="Title"/>
          <textarea type="text" name="message" placeholder="Contents"/>
          <input type="submit" value="Send" />
        </form>
      </Contents>
    </FormWrapper>
  )
}
