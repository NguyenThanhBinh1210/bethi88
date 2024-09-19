// import ScrollToTop from './components/scrolltop/scrollTop'
import { Button } from '@nextui-org/react'
import useRouteElements from './routes/useRouteElements'
import { useState } from 'react'

const App = () => {
  const routeElements = useRouteElements()
  const [isDark, setDark] = useState<boolean>(false)
  return (
    <main className={` ${isDark && 'dark'} min-h-screen transition-colors text-foreground bg-background`}>
      <Button onClick={() => setDark(!isDark)}>Darkmode</Button>
      {routeElements}
    </main>
  )
}

export default App
