import { useState, useEffect } from 'react'
import Content from './components/Content'
import Header from './components/Header'
import { useMediaQuery } from '@material-ui/core'

import AppService from './components/AppService'
const service = new AppService()

function App() {
  const [matches, setMatches] = useState([])
  const [leagues, setLeagues] = useState([])
  const [countries, setCountries] = useState([])
  const [loaded, setLoaded] = useState(false)
  const phoneScreen = useMediaQuery('(max-width: 425px')

  useEffect(() => {
    service.getMatches()
    .then(matches => setMatches(matches))
    .catch(err => console.error(err))

    service.getLeagues()
    .then(leagues => setLeagues(leagues))
    .catch(err => console.error(err))

    service.getCountries()
    .then(countries => setCountries(countries))
    .catch(err => console.error(err))

    if (matches && leagues && countries) setLoaded(true)
  }, [])

  return (
    <div>
      {
        loaded ?
          <>
            <Header phoneScreen={phoneScreen} />
            <Content matches={matches} leagues={leagues} countries={countries} phoneScreen={phoneScreen} />
          </>
          : null
      }
    </div>
  );
}

export default App;
