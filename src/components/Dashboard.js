import React, { useState, useEffect } from 'react'

import { makeStyles } from '@material-ui/core'
import calendar from '../assets/calendar.png'
import MatchesTable from './MatchesTable'

import moment from 'moment'
import 'moment/locale/ru'
moment.locale('ru')


const useStyles = makeStyles((theme) => ({
    panel: {
        background: '#fff',
        borderRadius: '3px',
        marginBottom: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%'
    },
    tabs:{
        display: 'flex',

    },
    tab: {
        padding: '1rem 2rem',
        fontWeight: 'bold',
        color: '#1E99C7',
        cursor: 'pointer',

        '& span': {
            color: 'rgba(45, 40, 94, .56)'
        },

        [theme.breakpoints.down('sm')]: {
            padding: '.5rem 1rem',
            fontSize: '12px',

            '& span': {
                fontSize: '12px'
            }
        }
    },
    activeTab: {
        color: '#353942',
        fontWeight: 'bold',
        borderBottom: '4px solid #1E99C7'
    },
    date: {
        display: 'flex',
        alignItems: 'center',
        paddingRight: '1rem',

        '& span': {
            margin: '0 2rem',
            color: '#1E99C7',
            fontWeight: 'bold',
            lineHeight: '16px'
        }
    },
    icon: {
        backgroundImage: "url('../assets/englang.png')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }
}))

const Dashboard = (props) => {
    const [activedTabIndex, setActivedTabIndex] = useState(0)
    const styles = useStyles() 
    const tabs = Array.from(document.getElementsByClassName(styles.tab))
    const matches = props.matches

    useEffect(() => {
        matchesToRender = filterMatchesByTab()
    }, [activedTabIndex])

    const getTodayMatches = () => {
        if (matches && matches !== undefined) {
            return props.matches.filter(
                (match) => {
                    return match.time.split(' ')[0] === moment().format("YYYY-MM-DD")
                }
            )
        }
    }

    const getTomorrowMatches = () => {
        if (matches && matches !== undefined) {
            return props.matches.filter(
                (match) => {
                    return match.time.split(' ')[0] === moment().add(1, 'days').format("YYYY-MM-DD")
                }
            )
        }
    }

    const filterMatchesByTab = () => {
        let matches
        const activedTab = tabs.find(tab => tab.classList.contains(styles.activeTab))
        switch(tabs.indexOf(activedTab)) {
            case 0:
                matches = Array.from(getTodayMatches())
                return matches
            case 1: 
                matches = Array.from(getTomorrowMatches())
                return matches
            case 2:
                matches = Array.from(props.matches)
                return matches
        }
    }
    
    const toggleTab = (e) => {
        let actived = document.getElementsByClassName(styles.activeTab)[0]
        actived.classList.remove(styles.activeTab)
        e.currentTarget.classList.add(styles.activeTab)
        setActivedTabIndex(tabs.indexOf(e.currentTarget))
    }

    let matchesToRender = filterMatchesByTab()

    const mobileView = (
        <>
            <div className={styles.panel}>
                <div className={styles.tabs}>
                    <div className={styles.tab + ' ' + styles.activeTab} onClick={e => toggleTab(e)}>
                        Сегодня <span>{getTodayMatches().length}</span>
                    
                    </div>
                    <div className={styles.tab} onClick={e => toggleTab(e)}>
                        Завтра <span>{getTomorrowMatches().length}</span>
                    </div>
                    <div className={styles.tab} onClick={e => toggleTab(e)}>
                        Все матчи <span>{props.matches.length}</span>
                    </div>
                </div>
                <div className={styles.date}>
                    <img src={calendar} alt=""/>
                </div>
            </div>
            <MatchesTable leagues={props.leagues} matches={matchesToRender} phoneScreen={props.phoneScreen} />
        </>
    )

    return (
        <>  
            {
                props.phoneScreen 
                ? mobileView
                : <div>
                    <div className={styles.panel}>
                        <div className={styles.tabs}>
                            <div className={styles.tab + ' ' + styles.activeTab} onClick={e => toggleTab(e)}>
                                Сегодня <span>{getTodayMatches().length}</span>
                            </div>
                            <div className={styles.tab} onClick={e => toggleTab(e)}>
                                Завтра <span>{getTomorrowMatches().length}</span>
                            </div>
                            <div className={styles.tab} onClick={e => toggleTab(e)}>
                                Все матчи <span>{props.matches.length}</span>
                            </div>
                        </div>
                        <div className={styles.date}>
                            <img src={calendar} alt=""/>
                            <span >{ moment().format("DD.MM dd") }</span>
                        </div>
                    </div>
                    <MatchesTable 
                        leagues={props.leagues} 
                        matches={matchesToRender}  
                    />
                </div>
            }

        </>
    )
}
export default Dashboard