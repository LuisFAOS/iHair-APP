import styled, { css } from 'styled-components'
import { Facebook, Instagram, Twitter } from 'styled-icons/bootstrap'


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    height: 150px;

    background-color: var(--black);

    padding: 20px 50px;
    color: white;

    @media screen and (max-width: 900px){
        display: none;
    }
`

export const LogoBox = styled.div`
    display: flex;
    align-items: flex-end;

    & > span{
        margin-left: 5px;

        font-size: 1.3rem;
        font-weight: 600;
    }

    & > div{
        display: flex;
        justify-content: center;
        align-items: center;

        width: 30px;
        height: 30px;

        background-color: gray;
        border-radius: 50%;
    }
`

export const SocialMedias = styled.div`
    display: flex;
`

const iconsCSS = css`
    width: 17px;
    height: 17px;

    transition: .15s;
    cursor: pointer;
    :hover{
        color: var(--red);
    }

    margin: 0px 5px;
`

export const FacebookIcon = styled(Facebook)`${iconsCSS}`
export const TwitterIcon = styled(Twitter)`${iconsCSS}`
export const InstagramIcon = styled(Instagram)`${iconsCSS}`