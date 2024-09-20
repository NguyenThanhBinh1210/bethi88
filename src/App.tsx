// import ScrollToTop from './components/scrolltop/scrollTop'
// import { Button } from '@nextui-org/react'
import { useContext } from 'react'
import useRouteElements from './routes/useRouteElements'
import { AppContext } from './contexts/app.context'
// import { useState } from 'react'

const App = () => {
  const routeElements = useRouteElements()
  const { isDark } = useContext(AppContext)
  return (
    <main className={` ${isDark && 'dark'} min-h-screen transition-colors text-foreground  bg-background`}>
      {/* <Button onClick={() => setDark(!isDark)}>Darkmode</Button> */}
      {routeElements}
    </main>
  )
}

export default App
