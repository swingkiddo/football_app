import React from 'react'

import { makeStyles } from '@material-ui/core'

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
        overflowY: 'auto'
    },
    line: {
        borderBottom: 'thin solid #fff'
    },
    country: {
        padding: '.5rem 1rem',
        fontSize: '13px',
        lineHeight: '20px'
    }
})

const CountriesSidebar = (props) => {
    const styles = useStyles()

    const continents = props.countries.map(
        (continent) =>
            <div key={continent.id} className={styles.country}>
                {continent.country}
            </div>
        )
    
    const countries = props.leagues.map(
        (country) =>
            <div key={country.id} className={styles.country}>
                {country.league}
            </div>
    )

    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebarTitle}>
                { props.title }
            </div>
            <div className={styles.line}></div>
            <div className={styles.sidebarContent}>
                { continents }
                { countries }
            </div>
        </div>
    )
}

export default CountriesSidebar