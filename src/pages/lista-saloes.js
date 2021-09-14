import React, {useState} from 'react';

import HandlePageAuth from '../utils/pagesAuthHandlers/pageAuth.handler.js'
import { parseCookies } from 'nookies'
import Image from 'next/image'

import Head from '../components/Head'

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
import SelectInput from '../components/Fields/Select';

function SalonList(){

    const [pointFiltersMap, setPointFiltersMap] = useState({
        'Distância': false,
        'Preço': false, 
        'Avaliação': false

    })

    const [professionFiltersMap, setProfessionFiltersMap] = useState({
        'Cabelereiro': false,
        'Barbeiros': false,
        'Manicure': false,
        'Geral': true,
    })

    const professionFiltersKeys = Object.keys(professionFiltersMap)
    const pointFiltersKeys = Object.keys(pointFiltersMap)

    const handleSelectFilter = (filterType, newSelectedItem) => {
        let lastSelectedItem        

        const prevStateFunc = (prevState, lastSelectedItem, newSelectedItem) => {
            if(lastSelectedItem) return {...prevState, [lastSelectedItem]: false, [newSelectedItem]: true}
            else return {...prevState, [newSelectedItem]: true}
        }

        if(filterType === 'point'){
            lastSelectedItem = pointFiltersKeys.find(key => pointFiltersKeys[key] && key)
            console.log(lastSelectedItem)
            setPointFiltersMap(prevState => prevStateFunc(prevState, lastSelectedItem, newSelectedItem))
        }else{
            lastSelectedItem = professionFiltersKeys.find(key => professionFiltersKeys[key] && key)
            setProfessionMap(prevState => prevStateFunc(prevState, lastSelectedItem, newSelectedItem))
        }
        
    }

    return (
        <Container>
            <Head title="iHair | lista-salões"/>
            <ProjectApresentation>
                <div className="presentation-box">
                    <p className="presentation-project-name">iHair</p>
                    <p className="presentation-describe">    
                        Facilidade, Agilidade, Satisfação e Qualidade, você encontra aqui!<br/>
                        Encontre os melhores salões (Cabelereiros, Barbeiros e etc) da sua região<br/>e utilize seus diversos serviços.
                    </p>
                    <SeeListButton onClick={() => scrollTo(0,520)}>
                        <ArrowDownIcon/>
                    </SeeListButton>
                </div>
            </ProjectApresentation>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 230" className="wave-divide">
                <path fill="#273036" className="wave-path" fillOpacity="1" d="M0,160L30,154.7C60,149,120,139,180,133.3C240,128,300,128,360,128C420,128,480,128,540,133.3C600,139,660,149,720,160C780,171,840,181,900,160C960,139,1020,85,1080,74.7C1140,64,1200,96,1260,117.3C1320,139,1380,149,1410,154.7L1440,160L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path>
            </svg>
            <SalonListWrapper>
                <Header>
                    <Image 
                        width={120}
                        height={120}
                        src="/salonList/barbershop.png"/>
                    
                    <span className="salon-list-section-title"> 
                        Lista de salões
                    </span> 
                </Header>
                <FilterList>
                    <ul className="profession-filters-list">
                        {professionFiltersKeys.map((key) => {
                            return (
                                <li key={key} className="profession-item-key">{key}</li>
                            )
                        })}
                    </ul>
                    <ul className="site-point-filters-list">
                        {pointFiltersKeys.map((key) => {
                            return (
                                <li key={key} className="point-filters-item-key">{key}</li>
                            )
                        })}
                    </ul>
                </FilterList>

                <SelectsFiltersContainer>
                    <SelectInput
                        title="Filtrar por cargo"
                        items={professionFiltersKeys}
                        onSelected={() => {}}
                        selectedItem={professionFiltersKeys.find(key => professionFiltersMap[key] && key)}
                    />
                    <SelectInput
                        title="Filtrar prós"
                        items={pointFiltersKeys}
                        onSelected={(newSelectedItem) => handleSelectFilter('point', newSelectedItem)}
                        selectedItem={pointFiltersKeys.find(key => pointFiltersMap[key] && key)}
                    />
                </SelectsFiltersContainer>

                <SalonListContainer>
                    <Card 
                        title="Salão Cortelix"
                        isClickable
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
                        isClickable
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
                        isClickable
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
                        isClickable
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

export async function getServerSideProps(ctx){
    const possibleRedirect = HandlePageAuth(ctx, 'normalUser')

    if(possibleRedirect) return possibleRedirect    

    return {props:{}}
}

export default SalonList
