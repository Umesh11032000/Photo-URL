import React from 'react'
import './assets/css/style.css'
import Images from "./compontents/Images"

/*
function App({title}){
  return (
    <div>
      <div className="bg-purple-600 text-white p-5 border red">{title}</div>
    </div>
    );
} */
class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { title: 'Enter Photo URL In Input Box And Click On Add', isShowing: false }
  }

  handleClick = () => {
    this.setState({isShowing: !this.state.isShowing })
  }
  render () {
    return (
      <section className='flex justify-center'>
        <div className='w-10/12'>
          <div className='text-center'> 
            <div className='my-4 justify-center flex'><h1 className='h1-Font'>{this.state.title}</h1>
            </div>
            <Images/>
          </div>
        </div>
      </section>

    )
  }
}

export default App
