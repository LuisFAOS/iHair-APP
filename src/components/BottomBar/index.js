import React, { useState } from 'react'

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
import { baseURL } from '../../utils/baseURL'
import useSWR from 'swr'
import fetcher from '../../utils/fetcher'
import Link from 'next/link'

function ButtonBar(props) {

    const {data, error} = useSWR(`${baseURL}/normal-user`, fetcher)

    const [currentPageIndice, setCurrentPageIndice] = useState(0)
    const [lastPageIndice, setLastPageIndice] = useState(0)
    const [showProfileMenu, setShowProfileMenu] = useState(false)

    const onChangePage = (cPageIndice, closeProfileMenu) => {
        setShowProfileMenu(closeProfileMenu)
        setLastPageIndice(currentPageIndice)
        setCurrentPageIndice(cPageIndice)
    }

    return (
        <>
            <Container>
                <Link href="/lista-saloes">
                    <ButtonPage
                        onClick={() => onChangePage(0, false)}
                    >
                        {currentPageIndice === 0 && window.location.href.includes('/home') ? <HomeFillIcon/> : <HomeIcon/>}                
                        <span>Home</span>
                    </ButtonPage>
                </Link>
                <ButtonPage 
                    onClick={() => onChangePage(1, false)}
                    isActive={currentPageIndice === 1 || window.location.href.includes('/buscar')}
                >
                    <SearchIcon/>
                    <span>Buscar</span>
                </ButtonPage>
                <ButtonPage 
                    className="noClose"
                    onClick={() => onChangePage(2, true)}
                >
                    {currentPageIndice === 2 || window.location.href.includes('/perfil') ? <ProfileFillIcon/> : <ProfileIcon/>}
                    <span className="noClose">Perfil</span>
                </ButtonPage>
            </Container>
            {showProfileMenu && <ProfileMenu userName={data ? data.user.name : ''} showMe={goToProfile => {
                onChangePage(goToProfile ? 2 : lastPageIndice, false)
            }}/>}
        </>
    )
}

ButtonBar.propTypes = {

}

export default ButtonBar
