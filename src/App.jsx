import React, { useState } from 'react'

import SearchAndFilter from './components/SearchAndFilter'
import Header from './components/Header'
import CountryCardContainer from './components/CountryCardContainer'

function App() {

  const [query , setQuery] = useState("");

  return (
    <>
      <Header />
      <main>
      <SearchAndFilter setQuery={setQuery}  />
      <CountryCardContainer query={query} />
      </main>
    </>
  )
}

export default App