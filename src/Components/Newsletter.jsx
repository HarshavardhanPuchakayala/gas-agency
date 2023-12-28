import React from 'react'
import "./Newsletter.css"
export default function Newsletter() {
  return (
    <section className="Newsletter">
      <div className="Banner">
        <h1>Subscribe for Newsletter and Drop your number an agent will getback to you</h1>
        <div className='form'>
          <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
          <button> submit</button>
        </div>
      </div>
    </section>
  )
}
