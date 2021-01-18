import React from 'react'

import { ContactSection, WoodenBanner, BannerText, SectionContent, ContactForm, HiddenField, StyledField, StyledForm, Styledlabel, StyledInput,
         StyledTextArea, SubmitField, StyledSubmitButton, ContactDetails } from './Contact.styles';

const Contact = () => {
    return (
        <ContactSection>
        <WoodenBanner>
            <BannerText>CONTACT US</BannerText>
        </WoodenBanner>
            <SectionContent>
                <ContactForm>
                    <StyledForm method='post' name='contact' action='/thanks' data-netflify='true' netlify-honeypot='bot'>
                        <input type='hidden' name='form-name' value='contact'/>
                        <HiddenField>
                            <Styledlabel>Don't fill this out, human</Styledlabel>
                            <StyledInput name='bot'/>
                        </HiddenField>
                        <StyledField>
                            <Styledlabel>Name</Styledlabel>
                            <StyledInput type='text' name='name'/>
                        </StyledField>
                        <StyledField>
                            <Styledlabel>Email</Styledlabel>
                            <StyledInput type='text' name='email'/>
                        </StyledField>
                        <StyledField>
                            <Styledlabel>Message</Styledlabel>
                            <StyledTextArea rows='6' name='message'/>
                        </StyledField>
                        <SubmitField>
                            <StyledSubmitButton>Send</StyledSubmitButton>
                        </SubmitField>
                    </StyledForm>
                </ContactForm>
                <ContactDetails>
                </ContactDetails>
            </SectionContent>
    </ContactSection>
    )
}

export default Contact