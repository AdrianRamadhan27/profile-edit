import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfileCard from './components/ProfileCard'
import ProfileForm from './components/ProfileForm'
import LinksForm from './components/LinksForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-white grid grid-cols-3 gap-2 p-3">
      <ProfileCard />
      <ProfileForm />
      <LinksForm />

      </div>
    </>
  );
}

export default App
