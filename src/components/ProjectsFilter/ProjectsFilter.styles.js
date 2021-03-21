import styled from 'styled-components'

export const CategoriesStyles = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 6rem;
    margin-top: 4rem;
    a {
        font-size: 5rem;
        text-decoration: none;
        color: ${({ theme }) => theme.PrimaryTextColor};
        display: grid;
        grid-template-columns: auto 1fr;
        grid-gap: 0 1rem;
        padding: 4px 20px;
        background: ${({ theme }) => theme.SecondaryColor};
        border-radius: 15px;
        box-shadow: 5px 5px 20px rgba(0,0,0,0.5);
        align-items: center;
        text-shadow: ${({ theme }) => theme.TextShadowBig};
        letter-spacing: 0.5px;

        .count {
            background: white;
            padding: 0px 10px;
            color: ${({ theme }) => theme.SecondaryColor};
            border-radius: 5px;
        }
        &.active {
            background: #b86411;
        }
    }
`