import React from 'react'

import { makeStyles } from '@material-ui/core'

import LeagueItem from './LeagueItem'

const useStyles = makeStyles({
    matchesTable: {
        width: '100%',
        background: '#fff',
        borderRadius: '3px',
        paddingBottom: '1rem'
    }
})

const MatchesTable = (props) => {
    const styles = useStyles() 
    const matches = props.matches
    
    const leagueHasMatches = (leagueID) => {
        if (matches && matches !== undefined) {
            return props.matches.some(
                match => match.league_id === leagueID
            )
        }
    }

    const leagues = props.leagues.map(
        (league) => league.items.map(
            (item) => {
                return leagueHasMatches(item.id)
                ?    <div key={item.id}>
                        <LeagueItem 
                            leagueName={league.league}
                            item={item}
                            matches={props.matches}
                            phoneScreen = {props.phoneScreen}
                        />
                        </div>
                :   null
            }
        )
    )

    return (
        <div className={styles.matchesTable}>
           { leagues }
        </div>
    )
} 

export default MatchesTable