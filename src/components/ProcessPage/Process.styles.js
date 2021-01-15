import styled from 'styled-components'
import Wood from '../../images/StepsBackground.png'

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(5, 40rem);
    gap: 1rem 1rem;
    grid-template-areas:
        "Text1 Img1"
        "Img2 Text2"
        "Text3 Img3"
        "Img4 Text4"
        "Text5 Img5";
    justify-items: center;
    align-items: center;
    margin-top: 5rem;
    margin-bottom: 5rem;
    align-self: center;
    justify-self: center;
    

    @media screen and (max-width: 1200px) {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(10, 40rem);
        gap: 1rem;;
        grid-template-areas:
        "Text1" 
        "Img1"
        "Text2"
        "Img2" 
        "Text3"
        "Img3"
        "Text4"
        "Img4" 
        "Text5" 
        "Img5";
    }
`
///////////////text area containers

export const ImgContainer1 = styled.img`
    grid-area: Img1;
    height: 80%;
    width: 80%;
    object-fit: cover;
    
`
export const ImgContainer2 = styled.img`
    height: 80%;
    width: 80%;
    object-fit: cover;
    
`
export const ImgContainer3 = styled.img`
    height: 80%;
    width: 80%;
    object-fit: cover;
    
`
export const ImgContainer4 = styled.img`
    height: 80%;
    width: 80%;
    object-fit: cover;
    
`
export const ImgContainer5 = styled.img`
    height: 80%;
    width: 80%;
    object-fit: cover;
`
///////////////Image containers

export const TextArea1 = styled.div`
    grid-area: Text1;
    height: fit-content;
    width: 80%;
`
export const TextArea2 = styled.div`
    grid-area: Text2;
    height: fit-content;
    width: 80%;
`
export const TextArea3 = styled.div`
    grid-area: Text3;
    height: fit-content;
    width: 80%;
`
export const TextArea4 = styled.div`
    grid-area: Text4;
    height: fit-content;
    width: 80%;
`
export const TextArea5 = styled.div`
    grid-area: Text5;
    height: fit-content;
    width: 80%;
`
//////////////////// other

export const StyledPtag = styled.p`
    font-size: 2.5rem;
    color: ${({ theme }) => theme.PrimaryTextColor};
    text-shadow: ${({ theme }) => theme.TextShadow};
`

export const WoodContainer = styled.div`
    height: 12rem;
    width: 12rem;
    float: left;
    shape-outside: circle(50%);
    margin-right: 1rem;
    position: relative;
    background: url(${Wood});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`

export const WoodImg = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`
export const StyledNum = styled.p`
    color: ${({ theme }) => theme.PrimaryTextColor};
    text-shadow: 3px 3px 6px rgba(0,0,0,0.73);
    font-size: 5rem;
    font-weight: 700;
    position: absolute;
    top:50%;
    left: 50%;
    transform:translate(-50%, -50%);
`
