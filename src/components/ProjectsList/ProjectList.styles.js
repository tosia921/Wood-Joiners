import styled from 'styled-components';
import Img from 'gatsby-image';
import {Link} from 'gatsby'

export const ProjectGridStyles = styled.div`
    display: grid;
    grid-gap: 3rem;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-auto-rows: auto;
    margin-top: 5rem;
    margin-bottom: 5rem;
`

export const ProjectStyles = styled.div`
    
    border-radius: 20px;
    background-color: rgba(255,255,255, 0.25);
    padding: 1rem;
`

export const ProjectTitle = styled.h2`
    font-size: 4rem;
    margin-bottom: 0;
    text-align: center;
    &:hover {
        text-decoration: none;
        color: #DEA264;
    }

`
export const ProjectLink = styled(Link)`
    font-size: 4rem;
    margin-bottom: 0;
    text-decoration: none;
    display: grid;
    grid-template-rows: auto auto 300px;
    grid-gap: 1rem;
    &:hover {
        text-decoration: none;
        color: #DEA264;
    }
`
export const ProjectCategory = styled.p`
    font-size: 2rem;
    margin-bottom: 0;
    text-align: center;
    font-style: italic;
`
export const ProjectImage = styled(Img)`
    border: 2px solid rgba(255,255,255, 0.8);
    border-radius: 20px;
    box-shadow: 2px 2px 5px rgba(0,0,0,0.5);
`