import React from 'react'
import Header from '../components/Header'
import Helmet from '../components/Helmet'
import Update from './Update'

const Setting = () => {
  return (
    <Helmet title="Setting">
      <div className="setting">
      <Header full={true}/>
      <h2>Name: Pham Van Nhan</h2>
      <Update/>
    </div>
    </Helmet>
  )
}

export default Setting