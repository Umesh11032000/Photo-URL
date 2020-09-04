import React, { useState, useRef, useEffect } from 'react'
import '../assets/css/pic.css'

// export default class Images extends Component {
//   componentWillUnmount () {
//     console.log('App unmount')
//   }

//   render () {
//     return (
//       <img
//         alt='bike' src='https://images.unsplash.com/photo-1598345595580-799df37bb312?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
//       />
//     )
//   }
// }

export default function Images () {
  const [images, setimages] = useState([
    'https://images.unsplash.com/photo-1598194809258-bc9375f063b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1598124389219-0519abfaaea6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1598258008881-b8fca9a447e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1528293319334-2b98c83a27fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1567591391293-f9a99c77e128?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
  ])

  const [newImageUrl, setNewImageUrl] = useState('')

  function handleAdd () {
    setimages([
      newImageUrl, ...images
    ])
    setNewImageUrl('')
  }

  function handleChange (event) {
    setNewImageUrl(event.target.value)
  }

  const inputRef = useRef(null)
  useEffect(() => {
    inputRef.current.focus()
  }, [])

  function ShowImages () {
    return images.map((image, index) => {
      return (
        <div key={index}>
          <div>
            <img alt='' src={image} className='imgsrc' />
          </div>
        </div>
      )
    })
  }

  return (
    <section>
      <div className='flex space-around my-5'>
        <div className='w-full'>
          <input
            id='inputBox'
            ref={inputRef}
            type='text'
            className='p-2 border border-grey-600 shadow rounded w-full'
            value={newImageUrl}
            onChange={handleChange}
          />
        </div>
        <div className='btn'>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' onClick={handleAdd}>ADD</button>
        </div>
      </div>
      <div className='flex flex-wrap justify-center'>
        <ShowImages />
      </div>
    </section>
  )
}
