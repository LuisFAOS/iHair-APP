import React, { useState } from 'react'

import {
    Container,
    SalonDetailsSide,
    SalonBanner,
    DescriptionAndRating,
    StarIcon,
    ShowMoreDetailsButton,
    KeyboardArrowDownIcon,
    MoreDetails,
    SalonOpeningHours,
    About,
    ScheduleSide,
    KeyboardArrowUpIcon,
    ServiceList,
    ShowMoreButton,
} from '../../styles/salon-details.style'

import SearchInput from '../../components/Fields/Search'
import withAuth from '../../HOCs/WithAuth'

function salonDetails() {

    const [showMoreDetails, setShowMoreDetails] = useState(false)

    return (
        <Container>
            <SalonDetailsSide>
                <SalonBanner/>
                <div className="salon-details">
                    <DescriptionAndRating>
                        <div className="salon-name">Cortelix</div>
                        <div className="description">Descrição: </div>
                        <div className="rating"><span><StarIcon/>3,5</span> (200 avaliações)</div>
                    </DescriptionAndRating>
                    <ShowMoreDetailsButton onClick={() => setShowMoreDetails(!showMoreDetails)}>
                        Mostrar mais {!showMoreDetails ? <KeyboardArrowDownIcon/> : <KeyboardArrowUpIcon/>}
                    </ShowMoreDetailsButton>
                    {showMoreDetails && (
                        <MoreDetails>
                            <SalonOpeningHours>
                                <div className="details-title">Horário de funcionamento</div>
                                <ul>
                                    <li>Segunda: </li>
                                    <li>Terça: </li>
                                    <li>Quarta: </li>
                                    <li>Quinta: </li>
                                    <li>Sexta: </li>
                                    <li>Sábado: </li>
                                    <li>Domingo: </li>
                                </ul>
                            </SalonOpeningHours>
                            <About>
                                <div className="details-box">
                                    <div className="details-title">Endereço</div>
                                    <p></p>
                                </div>
                                <div className="details-box">
                                    <div className="details-title">Outras informações</div>
                                    <p>CNPJ: </p>
                                    <p>Dono: </p>
                                    <p>Está conosco desde: </p>
                                </div>
                            </About>
                        </MoreDetails>
                    )}
                </div>
                <div className="salon-services">
                    <SearchInput id="search-services" placeholder="Busque um serviço"/>

                    <ServiceList> 

                    </ServiceList>
                    <ShowMoreButton>Mostrar mais</ShowMoreButton>
                </div>
            </SalonDetailsSide>
            <ScheduleSide>
                
            </ScheduleSide>
        </Container>
    )
}

export default withAuth(salonDetails, 'normalUser')
