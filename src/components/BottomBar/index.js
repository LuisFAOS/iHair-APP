import React, { useState } from 'react'
import PropTypes from 'prop-types'

import {
    Container,
    HomeIcon,
    SearchIcon,
    ButtonPage,
    ProfileIcon,
    HomeFillIcon,
    ProfileFillIcon,
} from './style'
import ProfileMenu from '../ProfileMenu'

function ButtonBar(props) {
    const [currentPageIndice, setCurrentPageIndice] = useState(0)
    const [lastPageIndice, setLastPageIndice] = useState(0)
    const [showProfileMenu, setShowProfileMenu] = useState(false)

    const onChangePage = cPageIndice => {
        setShowProfileMenu(cPageIndice === 2)
        setLastPageIndice(currentPageIndice)
        setCurrentPageIndice(cPageIndice)
    }

    return (
        <>
            <Container>
                <ButtonPage
                    onClick={() => onChangePage(0)}
                >
                    {currentPageIndice === 0 ? <HomeFillIcon/> : <HomeIcon/>}                
                    <span>Home</span>
                </ButtonPage>
                <ButtonPage 
                    onClick={() => onChangePage(1)}
                    isActive={currentPageIndice === 1}
                >

                    <SearchIcon/>
                    <span>Buscar</span>
                </ButtonPage>
                <ButtonPage 
                    onClick={() => onChangePage(2)}
                >

                    {currentPageIndice === 2 ? <ProfileFillIcon/> : <ProfileIcon/>}
                    <span>Perfil</span>
                </ButtonPage>
            </Container>
            {showProfileMenu && <ProfileMenu closeProfileMenu={() => {
                setShowProfileMenu(false)
                onChangePage(lastPageIndice)
            }}/>}
        </>
    )
}

ButtonBar.propTypes = {

}

export default ButtonBar
