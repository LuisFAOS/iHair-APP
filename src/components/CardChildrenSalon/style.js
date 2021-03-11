import styled from 'styled-components'
import { StarFill } from 'styled-icons/bootstrap'

export const Container = styled.div`
    padding-top: 10px;

    height: calc(100% - 20px);
`

export const Wrapper = styled.div`
    display: flex;

    font-size: .9rem;

    :not(:first-child){
        margin-top: 10px;
    }

    & > ul{
        display: flex;
    }

    & > div.rate-box{
        color: #e7a74e;
        margin-right: 8px; 
    }

    & > span{
        color: gray;
        margin-right: 8px;
    }
`

export const SalonRate = styled.div`
    display: flex;
`

export const RateIcon = styled(StarFill)`
    width: 15px;
    height: 15px;
`