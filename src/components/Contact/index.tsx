import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Subheading from "@/components/Subheading"
import Paragraph from "@/components/Paragraph"
import Button from "@/components/Button"
import {
  Wrapper,
  InnerWrapper,
  ContactForm,
  InputContainer,
  StyledInput,
  StyledLabel,
  TextAreaContainer,
  MessageTextArea,
  TextContent,
  SubmitBtn,
} from "@/components/Contact/styles"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

type QueryData = {
  contactYaml: {
    heading: string
    text: string
  }
}

const Contact: React.FC = () => {
  const data: QueryData = useStaticQuery(graphql`
    query {
      contactYaml {
        heading
        text
      }
    }
  `)
  const { contactYaml: contact } = data

  const { ref, controls, variants } = useScrollAnimation("slide")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  // for convenience sake and to prevent logic duplication
  const changeFunctions: {
    [index: string]: React.Dispatch<React.SetStateAction<string>>
  } = {
    name: setName,
    email: setEmail,
    message: setMessage,
  }

  const onInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    // get the type of input
    const inputName: string = event.target.getAttribute("name")
    const newValue = event.target.value

    // call the appropriate action dispatcher
    changeFunctions[inputName](newValue)
  }

  return (
    <Wrapper>
      <InnerWrapper ref={ref} animate={controls} variants={variants}>
        <TextContent animate={controls} variants={variants}>
          <Subheading center>{contact.heading}</Subheading>
          <Paragraph>{contact.text}</Paragraph>
        </TextContent>

        <ContactForm animate={controls} variants={variants}>
          <InputContainer animate={controls} variants={variants}>
            <StyledInput
              id="name"
              name="name"
              type="text"
              value={name}
              onChange={onInputChange}
              isNotEmpty={name.length > 0}
              required
            />
            <StyledLabel htmlFor="name">Your name</StyledLabel>
          </InputContainer>

          <InputContainer animate={controls} variants={variants}>
            <StyledInput
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={onInputChange}
              isNotEmpty={email.length > 0}
              required
            />
            <StyledLabel htmlFor="email">Your email</StyledLabel>
          </InputContainer>

          <TextAreaContainer animate={controls} variants={variants}>
            <MessageTextArea
              id="message"
              name="message"
              value={message}
              onChange={onInputChange}
              required
            />
            <StyledLabel htmlFor="message">Tell me your story</StyledLabel>
          </TextAreaContainer>

          <SubmitBtn animate={controls} variants={variants}>
            <Button tertiary>Send</Button>
          </SubmitBtn>
        </ContactForm>
      </InnerWrapper>
    </Wrapper>
  )
}

export default Contact
