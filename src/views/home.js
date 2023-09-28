import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Investor Optimization Associate</title>
        <meta property="og:title" content="Investor Optimization Associate" />
      </Helmet>
    </div>
  )
}

export default Home
