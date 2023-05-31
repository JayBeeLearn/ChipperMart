import React from 'react'

import FaqImage from '../images/faq.png'
import Questions from './FAQ/Questions'

function Faq() {
  return (
    <>
      <section className="faq">
        <div className="page-title">
          <h2>Frequently Asked Questions</h2>

        </div>

        <div className="faq-section">
          <div className="faq-title">
            <h2 className='text-left'>Got a question? We have answers</h2>
            <button className='faq-btn'>Ask a question</button>
          </div>

          <div className="faq-image">

            <img src={FaqImage} alt="FAQ Image" />
          </div>
        </div>

        <div className="questions">
          <h3>Frequently Ask Questions</h3>

          <div className="question-section">
            <Questions />
          </div>
        </div>
    </section>
    </>
  )
}

export default Faq