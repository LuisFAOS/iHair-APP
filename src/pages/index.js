import Link from 'next/link'
import Image from 'next/image'

import Head from '../components/Head'
import { Button } from '../components/Button.style'
import PresentationCard from '../components/PresentationCard'

import {
    Presentation,
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

import HandleUnAuthPage from '../utils/pagesAuthHandlers/pageUnAuth.handler'

function Home() {
    return (
        <>
            <Head title="iHair | home"/>
            <Presentation>
                <ImageBox>
                    <Image
                        width={450}
                        height={450}
                        src='/home/welcome.svg'
                    />
                </ImageBox>
                <ProjectDescription>
                    <p className="pseudo-slogan">
                        iHair facilita a conexão salões-cliente
                    </p> 
                    <p className="small-description">
                        Esses "Salões" representao os seguintes profissionais:
                        cabelereiros(as), barbeiros(as), manicures ou qualquer 
                        profissional que trabalhe na área da beleza.<br/>
                        Se junte a nós e encontre os melhores!
                    </p>
                    <Link href="/login">
                        <LoginButton>
                            Logar-me
                        </LoginButton>
                    </Link>
                </ProjectDescription>
            </Presentation>
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300">
                <path fill="#273036" fillOpacity="1" d="M0,96L48,128C96,160,192,224,288,229.3C384,235,480,181,576,133.3C672,85,768,43,864,64C960,85,1056,171,1152,208C1248,245,1344,235,1392,229.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
             <SalonRegistrationBenefits>
                 <p className="salon-registration-benefits-title">Por que registrar meu salão?</p>
                 <BenefitsList className="wrapper">
                    <div className="wrapper-two-cards">
                        <PresentationCard
                            title="Praticidade"
                            iconComponent={<PracticalityIcon/>}
                            description="Total controle sobre seu negócio. Gerencie desde seus horários á seus serviços."
                        />
                        <PresentationCard
                            title="Visibilidade"
                            iconComponent={<VisibilityIcon/>}
                            description="Com um bom serviço oferecido, você ficará entre os melhores de sua região."
                        />
                    </div>
                    <div className="wrapper-two-cards">
                        <PresentationCard
                            title="Críticas"
                            iconComponent={<RateIcon/>}
                            description="Receba críticas e saiba no que deve melhorar para continuar evoluindo."
                        />
                        <PresentationCard
                            title="Custos"
                            iconComponent={<WalletIcon/>}
                            description="O preço de todos esses beneficios é somente R$ 10,00 mensais, aproveite!"
                        />
                        
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
        </>
    )
}

export async function getServerSideProps(ctx){
    const possibleRedirect = HandleUnAuthPage(ctx)

    return possibleRedirect || {props: {}}
}

export default Home
