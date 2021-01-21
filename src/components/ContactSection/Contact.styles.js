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
    width: 40rem;
    position: relative;
`

export const BannerText = styled.h2`
    font-size: 3.5rem;
    color: ${({ theme }) => theme.PrimaryTextColor};
    text-shadow: ${({ theme }) => theme.TextShadowBig};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -78%);
`

export const SectionContent = styled.div`
    height: fit-content;
    width: 100%;

    display: flex;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

`

export const ContactForm = styled.div`
    width: 50%;
    height: fit-content;

    @media screen and (max-width: 768px) {
        width: 80%;
    }
`

export const HiddenField = styled.div`
    display: none;
`

export const StyledField = styled.div`
    width: 80%;
    margin-bottom: 1rem;
`

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: minmax(min-content, max-content);
    justify-items: center;
    align-items: center;
`

export const Styledlabel = styled.label`
    font-size: 2.5rem;
    color: ${({ theme }) => theme.PrimaryTextColor};
    text-shadow: ${({ theme }) => theme.TextShadowBig};
    margin-bottom: -0.4rem;
`

export const StyledInput = styled.input`
    width: 100%;
    height: 4rem;
    background-color: ${({ theme }) => theme.PrimaryTextColor};
    box-shadow: ${({ theme }) => theme.ButtonBoxShadow};
    text-shadow: 1px 1px rgba(0,0,0,0.2);
    font-size: 2.2rem;
    letter-spacing: 0.5px;
    font-weight: 600;
    padding: 1rem;
    border: none;
    
    &:focus{
        outline: none;
        border: none;
    }
`

export const StyledTextArea = styled.textarea`
    width: 100%;
    height: 25rem;
    background-color: ${({ theme }) => theme.PrimaryTextColor};
    box-shadow: ${({ theme }) => theme.ButtonBoxShadow};
    text-shadow: 1px 1px rgba(0,0,0,0.2);
    font-size: 2.2rem;
    letter-spacing: 0.5px;
    font-weight: 600;
    padding: 1rem;
    border: none;
    
    &:focus{
        outline: none;
        border: none;
    }
`

export const SubmitField = styled.div`
    padding: 1rem;
`

export const StyledSubmitButton = styled.button`
    background-color: #6B4D30;
    padding: 0.7rem 5rem;
    color: ${({ theme }) => theme.PrimaryTextColor};
    box-shadow: ${({ theme }) => theme.ButtonBoxShadow};
    font-size: 2.2rem;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.1s ease-in;
    border-radius: 30px;
    text-align: center;
    letter-spacing: 1.1px;

    @media screen and (max-width: 768px) {
        margin: 0 0.5rem;
        font-size: 1.4rem;
    }
    
    
    &:hover {
        text-decoration: none;
        color: #DEA264;
        transform: translateY(-2px);
        box-shadow: 0px 15px 20px -10px #000000;
    }
    &:active{
        transform: translateY(0);
        box-shadow: 0px 10px 13px -7px #000000;
        outline: none;
    }
    &:focus{
        transform: translateY(0);
        box-shadow: 0px 10px 13px -7px #000000;
        outline: none;
    }
`

export const ContactDetails = styled.div`
    width: 50%;
    height: 50rem;
    padding: 2.2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Name = styled.p`
    font-size: 4rem;
    color: ${({ theme }) => theme.PrimaryTextColor};
    text-shadow: ${({ theme }) => theme.TextShadowBig};

`

export const Email = styled(Name)``
export const Phone = styled(Name)``
