import React, { useState } from "react"
import { motion } from "framer-motion"
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
  BottomContainer,
  SubmitBtn,
  BtnText,
} from "@/components/Contact/styles"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import theme from "@/themes/theme"

type QueryData = {
  contactYaml: {
    heading: string
    text: string
    email: string
  }
}

const API_URL =
  process.env.NODE_ENV === "production"
    ? process.env.GATSBY_API_URL
    : "http://localhost:3000"

const Contact: React.FC = () => {
  const data: QueryData = useStaticQuery(graphql`
    query {
      contactYaml {
        heading
        text
        email
      }
    }
  `)
  const { contactYaml: contact } = data

  const { ref, controls, variants } = useScrollAnimation("slide")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSending, setIsSending] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

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

  const onFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // reset to default values
    setHasError(false)
    setSubmitMessage("")

    setIsSending(true)
    const data = {
      name,
      email,
      message,
    }

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      const responseData = await response.json()

      if (response.status !== 200) {
        setHasError(true)
      }

      setSubmitMessage(responseData.message)
    } catch (err) {
      setHasError(true)
      setSubmitMessage("Something went wrong. Please try again later.")
    }

    setIsSending(false)
  }

  return (
    <Wrapper>
      <InnerWrapper ref={ref} animate={controls} variants={variants}>
        <TextContent animate={controls} variants={variants}>
          <Subheading center>{contact.heading}</Subheading>
          <Paragraph>
            {contact.text}: {contact.email}
          </Paragraph>
        </TextContent>

        <ContactForm
          animate={controls}
          variants={variants}
          onSubmit={onFormSubmit}
        >
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

          <BottomContainer>
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

            <motion.p
              initial={{
                translateY: "-1rem",
                opacity: 0,
              }}
              animate={{
                translateY: submitMessage ? "0rem" : "-2rem",
                opacity: submitMessage ? 1 : 0,
                color: hasError ? "#F00" : theme.colors.text,
              }}
            >
              {submitMessage}
            </motion.p>
          </BottomContainer>

          <SubmitBtn animate={controls} variants={variants}>
            <Button tertiary disabled={isSending}>
              <BtnText isSending={isSending}>
                {isSending ? "Sending..." : "Send"}
              </BtnText>
            </Button>
          </SubmitBtn>
        </ContactForm>
      </InnerWrapper>
    </Wrapper>
  )
}

export default Contact
