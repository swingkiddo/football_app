import React from 'react'

import { makeStyles } from '@material-ui/core'
import flag from '../assets/england.png'
import greyStar from '../assets/grey-star.png'
import goldenStar from '../assets/golden-star.png'

const useStyles = makeStyles((theme) => ({

    leagueInfo: {
        display: 'grid',
        gridTemplate: '1fr / .5fr 5.5fr 2fr 2fr',
        borderBottom: '1px solid rgba(53, 57, 66, .25)',
        padding: '.5rem 0',
        marginBottom: '.25rem',

        [theme.breakpoints.down('sm')]: {
            gridTemplate: '1fr / 1fr 9fr'
        }
    },
    leagueName: {
        textAlign: 'left',
        paddingLeft: '1rem',

        [theme.breakpoints.down('sm')]: {
            padding: 0
        }
    },
    leagueItem: {
        display: 'grid',
        gridTemplate: 'auto / .5fr 5.5fr 1.5fr 1fr',
        marginBottom: '.25rem',
        paddingTop: '.25rem',
        
        [theme.breakpoints.down('sm')]: {
            gridTemplate: 'auto / 1fr 9fr'
        }
    },
    matchTime: {
        textAlign: 'center', 
        borderRight: '1px solid rgba(53, 57, 66, .25)', 
        marginBottom: '.25rem',
        color: 'rgba(53, 57, 66, .5)',
        lineHeight: '20px',

        [theme.breakpoints.down('sm')]: {
            padding: '.5rem'
        }
    },
    matchName: {
        display: 'flex',
        justifyContent: 'space-between',
        borderRight: '1px solid rgba(53, 57, 66, .25)',
        marginBottom: '.25rem',
        color: '#1E99C7',
        padding: '0 1rem',
        fontWeight: 'bold',

        [theme.breakpoints.down('sm')]: {
            fontSize: '14px',
            border: 'none'
        }
    },
    matchStatus: {
        color: 'rgba(45, 40, 94, .56)',
        lineHeight: '20px',
        borderRight: '1px solid rgba(53, 57, 66, .25)',
        marginBottom: '.25rem',
        padding: '0 1rem'
    },
    matchLink: {
        color: '#1E99C7',
        lineHeight: '20px',
        fontWeight: 'bold',
        padding: '0 1rem'
    }

}))

const LeagueItem = (props) => {
    const styles = useStyles()
    const item = props.item
    const matches = props.matches

    const getLeagueMatches = () => {
        if (matches && matches !== undefined) {
            return props.matches.filter((match) =>  {
                return match.league_id === item.id
            })
        }
    }

    const getMatchTime = (matchDate) => {
        return matchDate.split(' ')[1].slice(0, -3)
    } 

    const renderMatches = getLeagueMatches().map(
        (match) =>
            <div className={styles.leagueItem} key={match.id}>
                <div className={styles.matchTime}>
                    { getMatchTime(match.time) }
                </div>
                <div className={styles.matchName}>
                    <div>
                        { match.name }
                    </div>
                    <div>
                        <img src={match.favorite ? goldenStar : greyStar} alt=""/>
                    </div>
                </div>
                <div className={styles.matchStatus}>
                    {match.status}
                </div>
                <div>
                    <a href={match.link} className={styles.matchLink}>
                        Подробнее
                    </a>
                </div>
            </div>
        )

    const renderMatchesMobile = getLeagueMatches().map(
        (match) => 
            <div className={styles.leagueItem} key={match.id}>
                <div className={styles.matchTime}>
                    { getMatchTime(match.time) }
                </div>
                <div className={styles.matchName}>
                    <div>
                        { match.name }
                    </div>
                    <div>
                        <img src={match.favorite ? goldenStar : greyStar} alt=""/>
                    </div>
                </div>
            </div>
    )
    
    return (
        <div className={styles.league}>
            <div className={styles.leagueInfo}>
                <div style={{ textAlign: 'center' }}>
                    <img src={flag} alt=""/>
                </div>
                <div className={styles.leagueName}>
                    <b>{props.leagueName}: {props.item.item}</b>
                </div>
            </div>
            <div>
                {     
                    props.phoneScreen 
                    ? renderMatchesMobile
                    : renderMatches
                }
            </div>
        </div> 

    )
} 

export default LeagueItem