import React, { useState } from "react"
import useForm from "./useForm"
import validate from "./validateInfo"
//Styles
import {
  ContactSection,
  WoodenBanner,
  BannerText,
  SectionContent,
  ContactForm,
  HiddenField,
  StyledField,
  StyledForm,
  Styledlabel,
  StyledInput,
  StyledTextArea,
  SubmitField,
  StyledSubmitButton,
  ContactDetails,
  Name,
  Email,
  Phone,
  StyledErrorMessage,
  StyledSuccesMessage,
} from "./Contact.styles"
//Animations
import { fadeInOutOnScroll } from "../../framerMotionAnimations/animation"
import { useScroll } from "../../framerMotionAnimations/useScroll"

const Contact = () => {
  const [element, controls] = useScroll()
  const [isSubmitted, setIsSubmitted] = useState(false)

  function submitForm() {
    setIsSubmitted(true)
  }

  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  )

  return (
    <ContactSection
      variants={fadeInOutOnScroll}
      ref={element}
      animate={controls}
      initial="hidden"
    >
      <WoodenBanner>
        <BannerText>CONTACT US</BannerText>
      </WoodenBanner>
      <SectionContent>
        <ContactForm>
          <StyledForm
            method="post"
            name="contact"
            onSubmit={handleSubmit}
            action="/thanks"
            data-netflify="true"
            netlify-honeypot="bot"
          >
            <input type="hidden" name="form-name" value="contact" />
            <HiddenField>
              <Styledlabel>Don't fill this out, human</Styledlabel>
              <StyledInput name="bot" />
            </HiddenField>
            <StyledField>
              <Styledlabel>Name:</Styledlabel>
              <StyledInput
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
              />
              {errors.name && (
                <StyledErrorMessage>{errors.name}</StyledErrorMessage>
              )}
            </StyledField>
            <StyledField>
              <Styledlabel>Email:</Styledlabel>
              <StyledInput
                type="text"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && (
                <StyledErrorMessage>{errors.email}</StyledErrorMessage>
              )}
            </StyledField>
            <StyledField>
              <Styledlabel>Message:</Styledlabel>
              <StyledTextArea
                rows="6"
                name="message"
                value={values.message}
                onChange={handleChange}
              />
              {errors.message && (
                <StyledErrorMessage>{errors.message}</StyledErrorMessage>
              )}
            </StyledField>
            <SubmitField>
              <StyledSubmitButton>Send</StyledSubmitButton>
            </SubmitField>
          </StyledForm>
          {isSubmitted && (
            <StyledSuccesMessage>
              Your Email has been sent! Thank you
            </StyledSuccesMessage>
          )}
        </ContactForm>
        <ContactDetails>
          <Name>Wood Joiners</Name>
          <Email>wood.joiners@gmail.com</Email>
          <Phone>Phone: 0 700 800 900</Phone>
        </ContactDetails>
      </SectionContent>
    </ContactSection>
  )
}

export default Contact
