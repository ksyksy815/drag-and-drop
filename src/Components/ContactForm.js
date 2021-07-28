import React from 'react'
import styled from 'styled-components'
import { TopBar, Contents} from './Layer.style.js'

const FormWrapper = styled.div`
  position: absolute;
  top: 30%;
  left: 20%;
  border: 3px solid black;
  border-radius: 15px;

  form {
    height: 100%;
  }
`

export default function ContactForm( {closeContactForm} ) {
  const handleSubmit = () => {
    console.log(`fomr submitted`)
  }

  return (
    <FormWrapper>
      <TopBar>
        <li onClick={closeContactForm}></li>
        <li></li>
        <li></li>
      </TopBar>
      <Contents>
        <form onSubmit={handleSubmit}>
          <label htmlFor="from">From.</label>
          <input type="text" id="from"/>
          <label htmlFor="contact-contents"/>
          <textarea type="text" id="contact-contents"/>
        </form>
      </Contents>
    </FormWrapper>
  )
}
