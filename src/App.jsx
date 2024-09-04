import { useState, useRef } from 'react'

import './App.css'
import ProfileCard from './components/ProfileCard'
import ProfileForm from './components/ProfileForm'
import LinksForm from './components/LinksForm'

function App() {
  const [profileData, setProfileData] = useState({
    name: 'Danielle Rogers',
    title: 'Enthusiast',
    email: 'danielle@gmail.com',
    birthday: '27',
    birthmonth: 'October',
    birthyear: '2004',
    country: 'Indonesia',
    state: 'DKI Jakarta',
    zipcode: '21345',
    phone: '+62 48534453',
  });

  const [linksData, setLinksData] = useState({
    facebook: 'https://facebook.com/johndoe',
    twitter: 'https://twitter.com/johndoe',
    blogger: 'https://blogger.com/johndoe',
    googleplus: 'https://google.com/johndoe',
    linkedin: 'https://linkedin.com/in/johndoe',
    website: 'https://youtube.com/',
  });

  const profileFormRef = useRef(null);
  const linksFormRef = useRef(null);

  const handleEditProfile = () => {
    const formElements = profileFormRef.current.querySelectorAll('input');
    formElements.forEach((input) => (input.disabled = false));
  };

  const handleEditLinks = () => {
    const formElements = linksFormRef.current.querySelectorAll('input');
    formElements.forEach((input) => (input.disabled = false));
  };

  const handleSaveProfile = (newData) => {
    setProfileData((prevData) => ({ ...prevData, ...newData }));
    const formElements = profileFormRef.current.querySelectorAll('input');
    formElements.forEach((input) => (input.disabled = true));
  };

  const handleSaveLinks = (newData) => {
    setLinksData((prevData) => ({ ...prevData, ...newData }));
    const formElements = linksFormRef.current.querySelectorAll('input');
    formElements.forEach((input) => (input.disabled = true));
  };


  return (
    <>
      <div className="bg-white grid grid-cols-3 gap-2 p-3">
        <ProfileCard profileData={profileData} linksData={linksData} onEditProfile={handleEditProfile} onEditLinks={handleEditLinks}/>
        <div ref={profileFormRef}>
          <ProfileForm profileData={profileData} onSave={handleSaveProfile}/>
        </div>
        
        <div ref={linksFormRef}>
          <LinksForm linksData={linksData} onSave={handleSaveLinks}/>
        </div>

      </div>
    </>
  );
}

export default App
