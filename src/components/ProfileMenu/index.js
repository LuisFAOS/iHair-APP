import React, { useContext } from 'react'

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
import AuthContext from '../../AuthContext'

function ProfileMenu(props){

    const {signOut} = useContext(AuthContext)

    return (
        <Container>
            <Header>
                <CloseButton
                    onClick={props.closeProfileMenu}
                >
                    <CloseIcon/>
                </CloseButton>
                Olá, {props.userName.substr(0, props.userName.indexOf(' '))}
            </Header>
            <Wrapper id="options">
                <Option>
                    <EditProfileIcon/>
                    Editar Dados
                </Option>
                <Option>
                    <UserSchedulesIcon/>
                    Agendamentos
                </Option>
                <Option>
                    <UserFavoritesSalonIcon/>
                    Favoritos
                </Option>
                <Option>
                    <UserRatesIcon/>
                    Avaliações
                </Option>
                <Option
                    onClick={signOut}
                >
                    <SignOutIcon/>
                    Sair
                </Option>
            </Wrapper>
        </Container>
    )
}

ProfileMenu.propTypes = {
    closeProfileMenu: PropTypes.func.isRequired,
    userName: PropTypes.string.isRequired,
}

export default ProfileMenu