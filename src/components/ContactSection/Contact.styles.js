import styled from 'styled-components';
import WoodBanner from '../../images/SectionBanners/sectionbanner1.png'

export const ContactSection = styled.section`
    height: fit-content;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const WoodenBanner = styled.div`
    background-image: url(${WoodBanner});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    height: 20rem;
    width: 30rem;
    position: relative;
`

export const BannerText = styled.h2`
    font-size: 3.5rem;
    color: ${({ theme }) => theme.PrimaryTextColor};
    text-shadow: ${({ theme }) => theme.TextShadowBig};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -73%);
`

export const SectionContent = styled.div`
    height: fit-content;
    width: 100%;
`

export const ContactForm = styled.div`
    width: 50%;
    height: fit-content;
`

export const HiddenField = styled.div``

export const StyledField = styled.div``

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: minmax(min-content, max-content);
`

export const Styledlabel = styled.label``

export const StyledInput = styled.input``

export const StyledTextArea = styled.textarea``

export const SubmitField = styled.div``

export const StyledSubmitButton = styled.button``

export const ContactDetails = styled.div``

