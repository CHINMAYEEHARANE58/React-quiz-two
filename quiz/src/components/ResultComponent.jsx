import React, { Component } from 'react'

export default class ResultComponent extends Component {
  render() {
    return (
      <div className='resultScreen'>
        <div className='result'>
            <h1 className='resultTitle'>Result</h1>
            <div className='scorePage'>
                <h3 className='feedback'>You need more practice</h3>
                <h2 className='score'>Your score is 20%</h2>

                <div className='descriptionContainer'>
                  <div className='description1'>
                    <p className='description'>Total number of questions</p>
                    <p className='description'>Number of attempted questions</p>
                    <p className='description'>Number of correct answers</p>
                    <p className='description'>Number of wrong answers</p>
                  </div>
                  <div className='description2'>
                      <p className='description'>15</p>
                      <p className='description'>9</p>
                      <p className='description'>3</p>
                      <p className='description'>6</p>
                  </div>
                </div>
            </div>
            <div className='resultButton'>
                <button className='playAgain'>Play Again</button>
                <button className='back'>Back to home</button>
            </div>
        </div>
      </div>
    )
  }
}