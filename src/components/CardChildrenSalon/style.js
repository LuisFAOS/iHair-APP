import styled from 'styled-components'
import { StarFill } from 'styled-icons/bootstrap'

export const Container = styled.div`
    padding-top: 10px;

    height: calc(100% - 20px);
`

export const Wrapper = styled.div`
    display: flex;

    font-size: .9rem;

    @media screen and (max-width: 450px){
        font-size: .8rem;
    }

    :not(:first-child){
        margin-top: 5px;
    }

    & > ul{
        display: flex;
    }

    & > div.rate-box{
        color: #e7a74e;
        margin-right: 8px; 
        font-weight: 500!important;
    }

    & > span{
        color: gray;
        font-weight: 300;
        margin-right: 8px;
    }
`

export const RateIcon = styled(StarFill)`
    width: 15px;
    height: 15px;
`
