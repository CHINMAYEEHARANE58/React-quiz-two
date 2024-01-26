import React, { Component } from 'react'

export default class HomeComponent extends Component {
  render() {
    return (
      <>
        <div className='Home'>
          <h1 className='heading'>Quiz App</h1>
          <button className='play'>Play</button>
        </div>
      </>
    )
  }
}