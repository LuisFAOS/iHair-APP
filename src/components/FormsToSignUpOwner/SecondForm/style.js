import styled from "styled-components"

export const Container = styled.div`
    width: 100%;

    padding: 5px 40px;

    & > .wrapper-all-inputs{
        display: flex;
        justify-content: space-between; 
        
        padding: 5px 15px;

        & > picture.imgsWrapper{
            display: flex;
            justify-content: space-between;

            width: 60%;

            @media screen and (max-width: 350px){
                flex-direction: column;
                align-items: center;

                & > :first-child{
                    margin-bottom: 10px;
                }
            }
        }

        & > div.specialization-list-box{
            display: flex;
            flex-direction: column;
            align-items: center;

            margin: 0px 10px;
            margin-left: 15px;
            
            & > p{
                font-size: 1.2rem;

                margin-top: 5px;
                margin-bottom: 10px;
            }

            & > div.specialization-list-to-check{
                @media screen and (max-width: 590px){
                    display: flex;        
                    flex-wrap: wrap;
                    justify-content: center;
                }
            }

            & > div.specialization-list-to-check > div{
                width: 125px;
                margin: 8px 0px;
                margin-left: 10px;
                padding: 5px;                                

                border-radius: 1px;
                border: 1px solid whitesmoke;
            
            }
        }

    }

    @media screen and (max-width: 590px){
        & > .wrapper-all-inputs{
            flex-direction: column;
            & > picture.imgsWrapper{
                display: flex;
                justify-content: space-around;
                
                width: 100%;

                margin-bottom: 25px;
            }
            & > *{
                margin: 10px 0px;
            }
        }
    }
`
