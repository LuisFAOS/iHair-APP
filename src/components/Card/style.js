import Image from 'next/image'
import styled from 'styled-components'


export const Container = styled.div`
    padding: 20px;

    display: flex;

    width: 350px;
    height: 130px;

    border: 1px solid var(--whiteborder);
    border-radius: 2px;

    cursor: pointer;

    transition: .15s;

    :hover{
        border: 1px solid gainsboro;
    }
`

export const ImageBox = styled.div`
    padding-right: 18px;

    border-right: 1px solid var(--whiteborder);
`

export const CardImage = styled(Image)`
    border-radius: 50%;

    background-color: var(--whiteborder);
`

export const TextDatas = styled.div`
    width: calc(350 - 150px);

    padding-left: 18px;
`

export const Title = styled.div`
    max-width: 100%;

    font-size: 1.1rem;
    font-weight: 500;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`
