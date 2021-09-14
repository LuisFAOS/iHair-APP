import React, { useContext, useEffect } from 'react'

import PropTypes from 'prop-types'
import { useRouter } from 'next/router'

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

import AuthContext from '../../context/Auth'

function ProfileMenu(props){

    const {signOut} = useContext(AuthContext)
    const router = useRouter()

    useEffect(() => {
        window.document.onclick = value => {
            const className = value.target.className?.animVal || value.target.className            
            if(typeof className === "string" && !className.includes('noClose'))
                props.showMe()
        }

    },[])
    
    const handleNavigation = key => {
        props.showMe()
        router.push(key)
    }

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
                <Option 
                    isActive={window.location.href.includes('editar-dados')}
                    onClick={() => handleNavigation('/perfil/editar-dados')}>
                        <EditProfileIcon/>
                        Editar Dados
                </Option>
                <Option 
                    isActive={window.location.href.includes('agendamentos')}
                    onClick={() => handleNavigation('/perfil/agendamentos')}>
                        <UserSchedulesIcon/>
                        Agendamentos
                </Option>
                <Option 
                    isActive={window.location.href.includes('#')}
                    onClick={() => handleNavigation('#')}>
                        <UserFavoritesSalonIcon/>
                        Favoritos
                </Option>
                <Option onClick={() => handleNavigation('#')}>
                    <UserRatesIcon/>
                    Avaliações
                </Option>
                <Option onClick={() => {
                    signOut()
                    handleNavigation('/login')
                }}>
                    <SignOutIcon/>
                    Sair
                </Option>
            </Wrapper>
        </Container>
    )
}

ProfileMenu.propTypes = {
    showMe: PropTypes.func.isRequired,
    userName: PropTypes.string.isRequired,
}

export default ProfileMenu
