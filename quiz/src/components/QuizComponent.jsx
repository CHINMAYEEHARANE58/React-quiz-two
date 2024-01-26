import React, { Component } from 'react'
import '../resources/quizQuestion.json'

export default class QuizComponent extends Component {
    constructor() {
        super();
        this.state = {
            index: 0,
        };
    }

    handlePrev = () => {
        const { index } = this.state;
        const lastIndex = questions.length - 1;
        const newIndex = index === 0 ? lastIndex : index - 1;

        this.setState({ index: newIndex });
    };

    handleNext = () => {
        const { index } = this.state;
        const lastIndex = questions.length - 1;
        const newIndex = index === lastIndex ? 0 : index + 1;

        this.setState({ index: newIndex });
    };

    handleQuit = () => {
        window.confirm('Do you want to quit?');
    };

  render() {

    const { index } = this.state;
    const current = questions[index];

    return (
      <div className='quiz'>
        <div className='questionContainer'>
            <h1 className='questionTitle'>Question</h1>
            <h3 className='questionNo'>{index + 1} of {questions.length}</h3>
            <h2 className='question'>{current.question}</h2>
            <div className='options'>
                <div className='option'>{current.optionA}</div>
                <div className='option'>{current.optionB}</div>
                <div className='option'>{current.optionC}</div>
                <div className='option'>{current.optionD}</div>
            </div>
            <div className='buttons'>
                <button className='previous' onClick={this.handlePrev}>Previous</button>
                <button className='next' onClick={this.handleNext}>Next</button>
                <button className='quit' onClick={this.handleQuit}>Quit</button>
            </div>
        </div>
        
      </div>
    )
  }
}