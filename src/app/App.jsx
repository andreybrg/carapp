import { AppProvider } from "app/providers"
import { AppRouter } from "app/routers"
import { AppInitialization } from "app/initialization"
import React from "react"

const App = () => {

  return (
    <AppProvider>
      <AppInitialization>
        <AppRouter/>
      </AppInitialization>
    </AppProvider>
  )
}

export default App