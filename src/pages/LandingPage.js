import React from 'react'
import Header from './parts/Header'
import Hero from './parts/Hero'
import landingPage from 'dummy/landingPage.json'

export default function LandingPage() {

    

  return (
    <>
        <Header/>
        <Hero data={landingPage.hero} />
    </>
  )
}
