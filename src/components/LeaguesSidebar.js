import React from 'react'

import { makeStyles } from '@material-ui/core'
import arrow from '../assets/arrow-down.png'
import close from '../assets/close.png'

const useStyles = makeStyles({
    sidebar: {
        color: "#fff",
        background: '#353942',
        marginBottom: '1rem',
        borderRadius: '3px',
        paddingBottom: '1rem'
    },
    sidebarTitle: {
        padding: '.5rem 1rem',

        fontWeight: 'bold'
    },
    sidebarContent: {

    },
    line: {
        borderBottom: 'thin solid #fff'
    },
    league: {
        padding: '.5rem 1rem',
        fontSize: '13px',
        lineHeight: '20px',
        fontWeight: 'bold',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        cursor: 'pointer',
        transition: '0.4s',

        '&:hover': {
            opacity: 0.5
        }        
    },
    leagueItems: {
        maxHeight: 0,
        overflow: 'hidden',
        transition: 'max-height 0.2s ease-out',
        padding: '0 1rem',
        display: 'none',

        '& div': {
            fontSize: '13px',
            lineHeight: '20px'
        }
    },
    itemWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    closeIcon: {
        color: '#858585',
        width: '.5rem',
        height: '.5rem'
    },
    arrowIconWrapper: {
        display: 'flex',
        alignItems: 'center',
        transform: 'rotate(0)',
        transition: 'all 1s ease-out'
    },
    arrowIcon: {
        color: '#fff',
        transform: 'rotate(0)',
        transition: 'rotate 1s ease-out'
    }
})

const LeaguesSidebar = (props) => {
    const styles = useStyles()

    const toggleLeagueList = (e) => {
        let list = e.currentTarget.nextElementSibling
        list.style.display === 'block'
            ? list.style.display = 'none'
            : list.style.display = 'block'
        list.style.maxHeight 
            ? list.style.maxHeight = null 
            : list.style.maxHeight = list.scrollHeight + 'px'
        
        let arrow = Array.from(e.currentTarget.childNodes)[1]
        arrow.style.transform === 'rotate(180deg)'
            ? arrow.style.transform = 'rotate(0)'
            : arrow.style.transform = 'rotate(180deg)'
        arrow.style.transition = 'all .3s ease-out'

        
    }
    const leagues = props.leagues.map(
        (league) =>
            <div key={league.id}>
                <div 
                    key={league.id} 
                    className={styles.league} 
                    onClick={e => toggleLeagueList(e)}
                >
                    {league.league}
                    <div>
                        <img src={arrow} alt="" className={styles.arrowIcon} />
                    </div>
                </div>
                <div className={styles.leagueItems}>
                    { league.items.map(
                        (item) => 
                        <div className={styles.itemWrapper}>
                            <div key={item.id}>
                                {item.item} 
                            </div>
                            <div className={styles.arrowIconWrapper}>
                                <img src={close} alt="" className={styles.closeIcon} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
    )

    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebarTitle}>
                { props.title }
            </div>
            <div className={styles.line}></div>
            <div className={styles.sidebarContent}>
                { leagues }
            </div>
        </div>
    )
}

export default LeaguesSidebar