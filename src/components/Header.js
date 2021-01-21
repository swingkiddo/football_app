import React from 'react'
import { makeStyles } from '@material-ui/core/styles' 
import search from '../assets/search.png'
import burger from '../assets/burger.png'
import close from '../assets/close.png'

import { NavLink } from 'react-router-dom'


const useStyles = makeStyles( {
    header: {
        display: 'flex',
        alignItems: 'center',
        background: '#fff',
        padding: '0 2rem 0 1rem',
        marginBottom: '1.5rem'
    },
    mobileHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: '#fff',
        marginBottom: '1.5rem',
        width: '100vw',
        overflow: 'hidden'
    },
    burgerMenu: {
        padding: '1rem'
    },
    mobileMenu: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '85%',
        height: '100vh',
        background: '#353942',
        transformOrigin: '0% 0%',
        transform: 'translate(-100%, 0)',
        transition: 'transform .5s ease-out',
        color: '#fff',
        fontWeight: 'bold'


    },
    mobileMenuTop: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '1rem'
    },
    mobileMenuLinks: {
        display: 'flex',
        flexDirection: 'column',
        padding: '1rem',
        
        '& a, & a:visited': {
            color: '#fff',
            fontSize: '13px',
            fontWeight: 'bold',
            lineHeight: '20px',
            marginBottom: '1rem'
        }
    },
    line: {
        borderBottom: 'thin solid #fff'
    },
    title: {
        fontFamily: "'Lato', sans-serif",
        fontSize: '16px',
        fontWeight: 'bold',
        lineHeight: '24px',
        paddingLeft: '1rem',
        
    },
    linksWrapper: {
        display: 'flex',
        justifyContent: 'space-around',
        flexGrow: 1,
        padding: '0 4rem 0 0',
        "& a": {
            color: '#1E99C7',
            lineHeight: '24px',
            fontWeight: 'bold',
            margin: '0 2rem'
        },
        "& a:visited": {
            color: '#1E99C7'
        }
    },
    links: {
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'flex-start',

    },
    linkItem: {
        color: "#1E99C7",
        fontFamily: "'Lato', sans-serif",
        fontSize: '16px',
        fontWeight: 'bold',
        lineHeight: '24px',
        padding: '0 2rem'
    },
    buttonsWrapper: {
        margin: '0 1rem 0 2rem',
        display: 'flex',
        alignItems: 'center'
    },
    searchIcon: {
        color: '#1E99C7'
    },
    loginButton: {
        lineHeight: '24px',
        padding: '5px 1rem',
        border: '1px solid #1E99C7',
        borderRadius: '3px',
        marginLeft: '1rem',
        cursor: 'pointer'
    }
})


const Header = (props) => {
    const styles = useStyles()

    const toggleMenu = (e) => {
        const menu = document.getElementsByClassName(styles.mobileMenu)[0]
        menu.style.transform === 'none'
            ? menu.style.transform = 'translateX(-100%)'
            : menu.style.transform = 'none'
    }

    const mobileNav = (
        <div className={styles.mobileHeader}>
            <div className={styles.mobileMenu}>
                <div className={styles.mobileMenuTop}>
                    <div>Меню</div>
                    <div><img src={close} onClick={e => toggleMenu(e)} /></div>
                </div>
                <div className={styles.line}></div>
                <div className={styles.mobileMenuLinks}>
                    <NavLink to='/live'>
                        LIVE
                    </NavLink>
                    <NavLink to='/results'>
                        Результаты
                    </NavLink>
                    <NavLink to='/schedule'>
                        Расписание
                    </NavLink>
                    <NavLink to='/forecasts'>
                        Прогнозы
                    </NavLink>
                </div>
            </div>
            <div className={styles.burgerMenu}>
                <img src={burger} alt="" onClick={e => toggleMenu(e)} />

            </div>
            <div className={styles.buttonsWrapper}>

                <img src={search} alt=""/>
                <a className={styles.loginButton}><b>Войти</b></a>
            </div>
        </div>
    )

    return (
        <>
            {
                props.phoneScreen 
                    ? mobileNav
                    : <div className={styles.header}>
                        <div className={styles.title}>
                            <h2>РАСПИСАНИЕ МАТЧЕЙ</h2>
                        </div>
                        <div className={styles.linksWrapper}>
                            <NavLink exact={true} to='/' activeStyle={{ color: 'black' }}>
                                Все
                            </NavLink>
                            <NavLink to="/live" activeStyle={{ color: 'black' }}>
                                Live
                            </NavLink>
                            <NavLink to="/results" activeStyle={{ color: 'black' }}>
                                Результаты
                            </NavLink>
                            <NavLink to="/schedule" activeStyle={{ color: 'black' }}>
                                Расписание
                            </NavLink>
                            <NavLink to="/forecasts" activeStyle={{ color: 'black' }}>
                                Прогнозы
                            </NavLink>
                        </div>
                        <div className={styles.buttonsWrapper}>
                            <div>
                                <img src={search} alt=""/>
                            </div>
                            <a className={styles.loginButton}><b>Войти</b></a>
                        </div>
                    </div>
                        
            }
        </>
    )
}

export default Header