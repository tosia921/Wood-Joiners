import styled from 'styled-components';
import WoodenBanner from '../../images/SectionBanners/sectionbanner3.png'

export const SectionContainer = styled.div`
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const BannerText = styled.h2`
    font-size: 3rem;
    font-weight: 600;
    position: absolute;
    top: 57%;
    left: 50%;
    transform: translate(-50%,-50%);
    color: ${({ theme }) => theme.PrimaryTextColor};
    text-shadow: ${({ theme }) => theme.TextShadowBig};
`
export const SectionBanner = styled.div`
    height: 15rem;
    width: 40rem;
    margin-top: 4rem;
    background-image: url(${WoodenBanner});
    background-position:center;
    background-size: contain;
    background-repeat: no-repeat;
    position: relative;
    margin-bottom: 6rem;
    
`

