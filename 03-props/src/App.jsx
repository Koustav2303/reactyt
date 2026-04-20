import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card  user = 'Koustav' age = {25} img = "https://plus.unsplash.com/premium_photo-1774104897568-da865c7c60d5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDF8fHxlbnwwfHx8fHw%3D"/>
      <Card  user = 'Ricky' age = {22} img = "https://images.unsplash.com/photo-1773332598413-a6d5279d1ae8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D" />
      <Card  user = 'Sarah' age = {28} img = "https://images.unsplash.com/photo-1773332611528-566f16120979?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0M3x8fGVufDB8fHx8fA%3D%3D" />
    </div>
  )
}

export default App
