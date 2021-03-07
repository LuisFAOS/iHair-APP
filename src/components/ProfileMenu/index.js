import React, { useContext, useEffect } from 'react'

import PropTypes from 'prop-types'

import {
    Container,
    Header,
    Wrapper,
    Option,
    EditProfileIcon,
    UserSchedulesIcon,
    UserFavoritesSalonIcon,
    UserRatesIcon,
    SignOutIcon,
    CloseButton,
    CloseIcon,
} from './style'
import Link from 'next/link'

import AuthContext from '../../AuthContext'

function ProfileMenu(props){

    const {signOut} = useContext(AuthContext)

    useEffect(() => {
        window.document.onclick = value => {
            console.log(value.target)
            if(typeof value.target.className === "string" && !value.target.className.includes('noClose')){
                props.showMe(true)
            } 
        }

    },[])

    return (
        <Container className="profileMenu">
            <Header className="noClose">
                <CloseButton
                    onClick={props.showMe}
                >
                    <CloseIcon/>
                </CloseButton>
                Olá, {props.userName.includes(" ") ? props.userName.substr(0, props.userName.indexOf(' ')) : props.userName}
            </Header>
            <Wrapper id="options" className="noClose">
                <Link href="/perfil/editar-dados">
                    <Option 
                        isActive={window.location.href.includes('editar-dados')}
                        onClick={() => props.showMe(true)}>
                        <EditProfileIcon/>
                        Editar Dados
                    </Option>
                </Link>
                <Link href="/perfil/agendamentos">
                    <Option 
                        isActive={window.location.href.includes('agendamentos')}
                        onClick={() => props.showMe(true)}>
                        <UserSchedulesIcon/>
                        Agendamentos
                    </Option>
                </Link>
                <Link href="#">
                    <Option 
                        isActive={window.location.href.includes('#')}
                        onClick={() => props.showMe(true)}>
                        <UserFavoritesSalonIcon/>
                        Favoritos
                    </Option>
                </Link>
                <Link href="#">
                    <Option onClick={() => props.showMe(true)}>
                        <UserRatesIcon/>
                        Avaliações
                    </Option>
                </Link>
                <Link
                    href="/login"
                >
                    <Option onClick={() => {
                        props.showMe()
                        signOut()
                    }}>
                        <SignOutIcon/>
                        Sair
                    </Option>
                </Link>
            </Wrapper>
        </Container>
    )
}

ProfileMenu.propTypes = {
    showMe: PropTypes.func.isRequired,
    userName: PropTypes.string.isRequired,
}

export default ProfileMenu