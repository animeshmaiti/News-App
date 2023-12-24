import React, { Component } from 'react'
import spinner from '../ZZ5H.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={spinner} alt="loader" width={"40px"}/>
      </div>
    )
  }
}

export default Spinner