import Image from 'next/image'
import styled,{css} from 'styled-components'


export const Container = styled.div`
    position: relative;    
    padding: 20px;

    display: flex;

    width: 350px;
    height: 115px;

    border: 1px solid var(--whiteborder);
    border-radius: 2px;

    ${props => props.isClickable ? css`cursor: pointer;` : css`cursor: auto;`}

    transition: .15s;

    :hover{
        border: 1px solid gainsboro;
    }

    @media screen and (max-width: 550px){
        width: 100%;
    }

    @media screen and (max-width: 400px){
        padding: 8px 8px 8px 10px;

        height: 90px;
    }
`

export const ImageBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    padding-right: 18px;

    border-right: 1px solid var(--whiteborder);

    width: 94px;
    height: 73px;    

    & > div{
        position: unset!important;
    }

    .image{
        object-fit: contain;
        width: 75px!important;
        position: relative!important;
        height: 75px!important;
    }

    @media screen and (max-width: 400px){
        padding-right: 10px;
        width: 69px;
    
        .image{
            width: 58px!important;
            height: 58px!important;
        }
    }

`

export const CardImage = styled(Image)`
    border-radius: 50%;

    background-color: var(--whiteborder);

    width: 40px;
    height: 40px;
`

export const DetailsBox = styled.div`
    width: calc(350 - 150px);

    padding-left: 18px;
`

export const Title = styled.div`
    max-width: 100%;

    font-weight: 500;
    color: var(--black);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`
