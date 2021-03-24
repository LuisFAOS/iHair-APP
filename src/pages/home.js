import React from 'react'

import Link from 'next/link'
import Image from 'next/image'

import Head from '../components/Head'
import { Button } from '../components/Button.style'
import {
    Container,
    Apresentation,
    ImageBox,
    ProjectDescription,
    LoginButton,
    SalonRegistrationBenefits,
    BenefitsList,
    BenefitCard,
    PracticalityIcon,
    VisibilityIcon,
    RateIcon,
    ButtonBox,
    WalletIcon,
} from '../styles/home.style'

import WithUnAuth from '../HOCs/WithUnAuth'

function Home() {
    return (
        <Container>
            <Head title="iHair | home"/>
             <Apresentation>
                <ImageBox>
                    <Image
                        width={450}
                        height={450}
                        src='/home/welcome.svg'
                    />
                </ImageBox>
                <ProjectDescription>
                    <p>
                        iHair facilita a conexão salões-cliente
                    </p> 
                    <p>
                        Tais "Salões" nada mais são que
                        cabelereiros(as), barbeiros(as), manicures ou qualquer 
                        profissional que trabalhe na área da beleza.<br/>
                        Se junte a nós!
                    </p>
                    <Link href="/login">
                        <LoginButton>
                            Logar-me
                        </LoginButton>
                    </Link>
                </ProjectDescription>
             </Apresentation>
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300">
                <path fill="#273036" fillOpacity="1" d="M0,96L48,128C96,160,192,224,288,229.3C384,235,480,181,576,133.3C672,85,768,43,864,64C960,85,1056,171,1152,208C1248,245,1344,235,1392,229.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
             <SalonRegistrationBenefits>
                 <p>Por que registrar meu salão?</p>
                 <BenefitsList className="Wrapper">
                     <div>
                        <BenefitCard>
                            <span>
                                Praticidade
                            </span>
                            <div>
                                <svg viewBox="0 0 160 150" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#DC3545" d="M35.8,-45.1C48.2,-40.3,61.4,-32.2,67.3,-20.4C73.3,-8.5,72,7.3,64.2,17.5C56.3,27.8,41.7,32.6,29.9,43.9C18.1,55.3,9.1,73.1,-2.8,76.9C-14.6,80.7,-29.2,70.5,-38.6,58.4C-48.1,46.3,-52.4,32.4,-52.5,19.9C-52.6,7.5,-48.4,-3.4,-42.5,-11.4C-36.6,-19.4,-29,-24.5,-21.7,-30.9C-14.3,-37.4,-7.1,-45.3,2.3,-48.4C11.7,-51.5,23.4,-49.9,35.8,-45.1Z" transform="translate(70 70)" />
                                </svg>
                                <PracticalityIcon/>
                            </div>
                            <p>
                                Será mais fácil a gerenciamento dos horários, pois
                                ajudaremos com isso.
                            </p>
                        </BenefitCard>
                        <BenefitCard>
                            <span>
                                Visibilidade
                            </span>
                            <div>
                                <svg viewBox="0 0 160 150" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#DC3545" d="M35.8,-45.1C48.2,-40.3,61.4,-32.2,67.3,-20.4C73.3,-8.5,72,7.3,64.2,17.5C56.3,27.8,41.7,32.6,29.9,43.9C18.1,55.3,9.1,73.1,-2.8,76.9C-14.6,80.7,-29.2,70.5,-38.6,58.4C-48.1,46.3,-52.4,32.4,-52.5,19.9C-52.6,7.5,-48.4,-3.4,-42.5,-11.4C-36.6,-19.4,-29,-24.5,-21.7,-30.9C-14.3,-37.4,-7.1,-45.3,2.3,-48.4C11.7,-51.5,23.4,-49.9,35.8,-45.1Z" transform="translate(70 70)" />
                                </svg>
                                <VisibilityIcon/>
                            </div>
                            <p>
                                Com um bom serviço pregado, você ficará entre os 
                                melhores de sua região.
                            </p>
                        </BenefitCard>
                     </div>
                     <div>
                        <BenefitCard>
                            <span>
                                Críticas
                            </span>
                            <div>
                                <svg viewBox="0 0 160 150" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#DC3545" d="M35.8,-45.1C48.2,-40.3,61.4,-32.2,67.3,-20.4C73.3,-8.5,72,7.3,64.2,17.5C56.3,27.8,41.7,32.6,29.9,43.9C18.1,55.3,9.1,73.1,-2.8,76.9C-14.6,80.7,-29.2,70.5,-38.6,58.4C-48.1,46.3,-52.4,32.4,-52.5,19.9C-52.6,7.5,-48.4,-3.4,-42.5,-11.4C-36.6,-19.4,-29,-24.5,-21.7,-30.9C-14.3,-37.4,-7.1,-45.3,2.3,-48.4C11.7,-51.5,23.4,-49.9,35.8,-45.1Z" transform="translate(70 70)" />
                                </svg>
                                <RateIcon/>
                            </div>
                            <p>
                                Receba criticas e saiba
                                no que deve melhorar e continuar aprimorando.
                            </p>
                        </BenefitCard>
                        <BenefitCard>
                            <span>
                                Custos
                            </span>
                            <div>
                                <svg viewBox="0 0 160 150" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#DC3545" d="M35.8,-45.1C48.2,-40.3,61.4,-32.2,67.3,-20.4C73.3,-8.5,72,7.3,64.2,17.5C56.3,27.8,41.7,32.6,29.9,43.9C18.1,55.3,9.1,73.1,-2.8,76.9C-14.6,80.7,-29.2,70.5,-38.6,58.4C-48.1,46.3,-52.4,32.4,-52.5,19.9C-52.6,7.5,-48.4,-3.4,-42.5,-11.4C-36.6,-19.4,-29,-24.5,-21.7,-30.9C-14.3,-37.4,-7.1,-45.3,2.3,-48.4C11.7,-51.5,23.4,-49.9,35.8,-45.1Z" transform="translate(70 70)" />
                                </svg>
                                <WalletIcon/>
                            </div>
                            <p>
                                O preço de todos esses beneficios é somente R$ 10,00 mensais, aproveite!
                            </p>
                        </BenefitCard>
                     </div>
                 </BenefitsList>
                 <ButtonBox>
                    <Link href="registrar-salao">
                        <Button>
                            Registrar meu salão!
                        </Button>
                    </Link>
                 </ButtonBox>
             </SalonRegistrationBenefits>
        </Container>
    )
}

export default WithUnAuth(Home)
