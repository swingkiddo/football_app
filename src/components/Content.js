import React from 'react'

import { makeStyles } from '@material-ui/core'
import CountriesSidebar from './CountriesSidebar'
import LeaguesSidebar from './LeaguesSidebar'

import Dashboard from './Dashboard'

const useStyles = makeStyles((theme) => ({
    content: {
        padding: '0 1rem',
        display: 'flex',

        [theme.breakpoints.down('sm')]: {
            padding: '0',
            flexDirection: 'column'
        }
    },
    sidebarsWrapper: {
        width: '10%',
        marginRight: '1rem',
        minWidth: '220px'
    },
    mainWrapper: {
        flex: 1
    }
}))

const Content = (props) => {
    const styles = useStyles()

    const mobileView = (
        <Dashboard leagues={props.leagues} matches={props.matches} phoneScreen={props.phoneScreen} />
    )

    return (
        <div className={styles.content}>
            {
                props.phoneScreen 
                ? mobileView
                :    <>
                        <div className={styles.sidebarsWrapper}>
                            <LeaguesSidebar title="Мои лиги" leagues={props.leagues} />
                            <CountriesSidebar title="Страны" countries={props.countries} leagues={props.leagues}/>
                        </div>
                        <div className={styles.mainWrapper}>
                            <Dashboard leagues={props.leagues} matches={props.matches} />
                        </div>
                    </>
            }


        </div>
    )
}

export default Content