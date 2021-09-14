import styled from 'styled-components'

export const ConclusionParagraph = styled.p`

    & > button{
        display: none;
    }

    & > p {
        text-align: center;
        font-weight: 300;
        font-size: 1.1rem;
    }

    & > span.conclusion-title{
        display: block;
        text-align: center;

        font-weight: 400;
        font-size: 1.4rem;
    
        padding-bottom: 10px;
    }
`
