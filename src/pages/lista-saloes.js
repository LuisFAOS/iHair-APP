import React from 'react';
import withAuth from '../HOCs/WithAuth';

import Image from 'next/image'

import {
    ProjectApresentation,
    SalonListWrapper,
    Header,
    SalonListContainer,
    SeeMoreSalonsButton,
    Container,
    SeeListButton,
    ArrowDownIcon,
    SelectsFiltersContainer,
    FilterList,
} from '../styles/lista-saloes.style'
import Card from '../components/Card';
import CardChildrenSalon from '../components/CardChildrenSalon';
import SelectInput from '../components/SelectInput';

function SalonList(){
    return (
        <Container>
            <ProjectApresentation>
                <div>
                    <p>iHair</p>
                    <p>    
                        Facilidade, Agilidade, Satisfação e Qualidade, você encontra aqui!<br/>
                        Encontre os melhores salões (Cabelereiros, Barbeiros e etc) da sua região<br/>e utilize seus diversos serviços.
                    </p>
                    <SeeListButton onClick={() => scrollTo(0,520)}>
                        <ArrowDownIcon/>
                    </SeeListButton>
                </div>
            </ProjectApresentation>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 230">
                <path fill="#273036" fillOpacity="1" d="M0,160L30,154.7C60,149,120,139,180,133.3C240,128,300,128,360,128C420,128,480,128,540,133.3C600,139,660,149,720,160C780,171,840,181,900,160C960,139,1020,85,1080,74.7C1140,64,1200,96,1260,117.3C1320,139,1380,149,1410,154.7L1440,160L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path>
            </svg>
            <SalonListWrapper>
                <Header>
                    <Image 
                        width={120}
                        height={120}
                        src="/registerSalon/barbershop.png"/>
                    
                    <span> 
                        Lista de salões
                    </span> 
                </Header>
                <FilterList>
                    <ul className="profession-filters">
                        <li>
                            Cabelereiro
                        </li>
                        <li>
                            Manicure
                        </li>
                        <li>
                            Barbeiro
                        </li> 
                    </ul>
                    <ul className="site-points-filters">
                        <li>
                            Distância
                        </li>
                        <li>
                            Preço
                        </li>
                        <li>
                            Avaliação    
                        </li> 
                    </ul>
                </FilterList>

                <SelectsFiltersContainer>
                    <SelectInput
                        filterBy="Filtrar por cargo"
                        filters={['Cabeleleiro', 'Barbeiro', 'Manicure', 'Geral']}
                    />
                    <SelectInput
                        filterBy="Filtrar pros"
                        filters={['Distância', 'Preço', 'Avaliação', 'Geral']}
                    />
                </SelectsFiltersContainer>

                <SalonListContainer>
                    <Card
                        title="Salão Cortelix"
                    >
                        <CardChildrenSalon
                            distanceToUserHome={2.5}
                            typeService="Geral"
                            rate={3.2}
                            waitingTime={20}
                        />
                    </Card>
                    <Card
                        title="Salão Cortelix"
                    >
                        <CardChildrenSalon
                            distanceToUserHome={2.5}
                            typeService="Geral"
                            rate={3.2}
                            waitingTime={20}
                        />
                    </Card>
                    <Card
                        title="Salão Cortelix"
                    >
                        <CardChildrenSalon
                            distanceToUserHome={2.5}
                            typeService="Geral"
                            rate={3.2}
                            waitingTime={20}
                        />
                    </Card>
                    <Card
                        title="Salão Cortelix"
                    >
                        <CardChildrenSalon
                            distanceToUserHome={2.5}
                            typeService="Geral"
                            rate={3.2}
                            waitingTime={20}
                        />
                    </Card>
                </SalonListContainer>
                <SeeMoreSalonsButton>
                    Ver mais salões
                </SeeMoreSalonsButton>
            </SalonListWrapper>
        </Container>
    )
} 

export default withAuth(SalonList)