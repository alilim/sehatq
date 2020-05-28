import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ReactGA from 'react-ga'

import { GAKEY } from '../../../configs/key'

ReactGA.initialize(GAKEY.initializeKey)

const GAListener = ({children}) => {
  const location = useLocation()

  useEffect(() => {
    ReactGA.ga('send', 'pageview', location.pathname)
  }, [location])

  return children
}


export default GAListener