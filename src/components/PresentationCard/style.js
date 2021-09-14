import styled from 'styled-components'

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    height: 220px;
    width: 180px;
    padding: 20px 10px;

    border: 1px solid var(--whiteborder);

    :not(:first-child){
        margin: 0px 40px;
    }

    & > div.card-icon-box{
        display: flex;
        justify-content: center;
        align-items: center;

        position: relative;
        width: 90px;
        height: 90px;
        margin-bottom: 10px;

        & > :first-child{
            position: absolute;
            z-index: -100000;
        }
    }

    & > span.card-title{
        font-size: 1.1rem;
    }

    & > p.card-description{
        text-align: center;
	font-weight: 300;
        font-size: .85rem;
    }

    transition: .15s;
    :hover{
        box-shadow: 1px 1px 2px var(--shadow);
    }
`