import React from 'react'

const TodoAdd = () => {
  return (
    <div>
      <form className="form">
    <div>
      <label className="form__label" for="todo">~ Today I need to ~</label>
      <input className="form__input"
           type="text" 
           id="todo" 
           name="to-do"
           size="30"
           required/>
      <button className="button"><span>Submit</span></button>
    </div>
  </form>
    </div>

  )
}

export default TodoAdd
