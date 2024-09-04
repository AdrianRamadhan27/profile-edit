import React from "react";
import { useRef } from 'react';

function ProfileForm({profileData, onSave}) {
    const nameRef = useRef(profileData.name);
    const titleRef = useRef(profileData.title);
    const emailRef = useRef(profileData.email);
    const birthdayRef = useRef(profileData.birthday);
    const birthmonthRef = useRef(profileData.birthmonth);
    const birthyearRef = useRef(profileData.birthyear);
    const countryRef = useRef(profileData.country);
    const stateRef = useRef(profileData.state);
    const zipcodeRef = useRef(profileData.zipcode);
    const phoneRef = useRef(profileData.phone);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({
        name: nameRef.current.value,
        title: titleRef.current.value,
        email: emailRef.current.value,
        birthday: birthdayRef.current.value,
        birthmonth: birthmonthRef.current.value,
        birthyear: birthyearRef.current.value,
        country: countryRef.current.value,
        state: stateRef.current.value,
        zipcode: zipcodeRef.current.value,
        phone: phoneRef.current.value,
        });
    };


    return (
            <form onSubmit={handleSubmit}>
              <div className="bg-white m-auto rounded shadow-lg md:p-8">
                <div className="grid gap-4 gap-y-2 text-sm">
                  <div className="text-gray-600">
                    <p className="font-medium text-lg">Profile Info</p>
                    <p>Edit Your Profile Info</p>
                  </div>
        
                  <div className="">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-6">
                      <div className="md:col-span-6 ">
                        <label for="full_name">Full Name</label>
                        <input ref={nameRef} defaultValue={profileData.name} disabled type="text" name="full_name" id="full_name" className="disabled:text-gray-400 h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                      </div>

                      <div className="md:col-span-6 ">
                        <label for="full_name">Title</label>
                        <input ref={titleRef} defaultValue={profileData.title} disabled type="text" name="full_name" id="full_name" className="disabled:text-gray-400 h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                      </div>
        
                      <div className="md:col-span-6">
                        <label for="email">Email Address</label>
                        <input ref={emailRef} defaultValue={profileData.email} disabled type="text" name="email" id="email" className="disabled:text-gray-400 h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="email@domain.com" />
                      </div>

                      <label className="md:col-span-6 text-center">Birthday</label>
                      <div className="md:col-span-2">
                        <input ref={birthdayRef} defaultValue={profileData.birthday} disabled type="text" name="birthday" id="birthday" className="disabled:text-gray-400 transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="01" />
                      </div>
                      <div className="md:col-span-2">
                        <input ref={birthmonthRef} defaultValue={profileData.birthmonth} disabled type="text" name="birthmonth" id="birthmonth" className="disabled:text-gray-400 transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="December" />
                      </div>
                      <div className="md:col-span-2">
                        <input ref={birthyearRef} defaultValue={profileData.birthyear} disabled type="text" name="birthyear" id="birthyear" className="disabled:text-gray-400 transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="1998" />
                      </div>  
        
                      <div className="md:col-span-3">
                        <label for="country">Country</label>
                        <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                          <input ref={countryRef} defaultValue={profileData.country} disabled name="country" id="country" placeholder="Country" className="disabled:text-gray-400 px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" />
                        </div>
                      </div>
        
                      <div className="md:col-span-3">
                        <label for="state">State</label>
                        <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                          <input ref={stateRef} defaultValue={profileData.state} disabled name="state" id="state" placeholder="State" className="disabled:text-gray-400 px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" />
                        </div>
                      </div>
        
                      <div className="md:col-span-3">
                        <label for="zipcode">Zipcode</label>
                        <input ref={zipcodeRef} defaultValue={profileData.zipcode} disabled type="text" name="zipcode" id="zipcode" className="disabled:text-gray-400 transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
                      </div>
                      <div className="md:col-span-3">
                        <label for="phone">Phone Number</label>
                        <input ref={phoneRef} defaultValue={profileData.phone} disabled type="text" name="phone" id="phone" className="disabled:text-gray-400 transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
                      </div>
        
                      <div className="md:col-span-6">
                        <div className="inline-flex items-center">
                          <input type="checkbox" name="billing_same" id="billing_same" className="form-checkbox" />
                          <label for="billing_same" className="ml-2">I Agree to get notification emails.</label>
                        </div>
                      </div>
        
              
                      <div className="md:col-span-6 text-right">
                        <div className="inline-flex items-end">
                          <input type="submit" disabled className="disabled:hidden bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" value="Save"/>
                        </div>
                      </div>
        
                    </div>
                  </div>
                </div>
              </div> 
            </form>


    );
}

export default ProfileForm;