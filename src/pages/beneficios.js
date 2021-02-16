import React from 'react'

import {
    Container,
    BenefitsList,
    RegisterButton,
} from '../styles/beneficios.style'

function Beneficios() {
    return (
        <Container>
             <BenefitsList>

             </BenefitsList>

             <Link href="/registrar_salao">
                <RegisterButton>

                </RegisterButton>
             </Link>
        </Container>
    )
}

export default Beneficios
