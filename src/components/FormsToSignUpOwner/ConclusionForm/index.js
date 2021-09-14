import { ConclusionParagraph } from './style'

import { useRouter } from 'next/router'

export default function ConclusionForm(){
    const router = useRouter()

    return (
        <ConclusionParagraph>
            <span className="conclusion-title">Parabéns!</span>
            <p>
                Seu cadastro foi realisado com sucesso!<br/>
                Basta logar-se como dono de salao e configurar seu painel!
            </p>

            <button
                id='btn-form3'
                onClick={() => router.push('/login')}
            ></button>
        </ConclusionParagraph>
    )
}
