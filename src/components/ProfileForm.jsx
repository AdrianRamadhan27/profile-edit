import React from "react";

const ProfileForm = () => {

    return (
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
                        <input type="text" name="full_name" id="full_name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" />
                      </div>

                      <div className="md:col-span-6 ">
                        <label for="full_name">Title</label>
                        <input type="text" name="full_name" id="full_name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" />
                      </div>
        
                      <div className="md:col-span-6">
                        <label for="email">Email Address</label>
                        <input type="text" name="email" id="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="email@domain.com" />
                      </div>

                      <label className="md:col-span-6 text-center">Birthday</label>
                      <div className="md:col-span-2">
                        <input type="text" name="birthday" id="birthday" className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="01" value="" />
                      </div>
                      <div className="md:col-span-2">
                        <input type="text" name="birthmonth" id="birthmonth" className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="December" value="" />
                      </div>
                      <div className="md:col-span-2">
                        <input type="text" name="birthyear" id="birthyear" className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="1998" value="" />
                      </div>  
        
                      <div className="md:col-span-3">
                        <label for="country">Country / region</label>
                        <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                          <input name="country" id="country" placeholder="Country" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" value="" />
                          <button tabindex="-1" className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                            <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                              <line x1="18" y1="6" x2="6" y2="18"></line>
                              <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                          </button>
                          <button tabindex="-1" for="show_more" className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                            <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                          </button>
                        </div>
                      </div>
        
                      <div className="md:col-span-3">
                        <label for="state">State / province</label>
                        <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                          <input name="state" id="state" placeholder="State" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" value="" />
                          <button tabindex="-1" className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                            <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                              <line x1="18" y1="6" x2="6" y2="18"></line>
                              <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                          </button>
                          <button tabindex="-1" for="show_more" className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                            <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                          </button>
                        </div>
                      </div>
        
                      <div className="md:col-span-3">
                        <label for="zipcode">Zipcode</label>
                        <input type="text" name="zipcode" id="zipcode" className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" value="" />
                      </div>
                      <div className="md:col-span-3">
                        <label for="phone">Phone Number</label>
                        <input type="text" name="phone" id="phone" className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" value="" />
                      </div>
        
                      <div className="md:col-span-6">
                        <div className="inline-flex items-center">
                          <input type="checkbox" name="billing_same" id="billing_same" className="form-checkbox" />
                          <label for="billing_same" className="ml-2">I Agree to get notification emails.</label>
                        </div>
                      </div>
        
              
                      <div className="md:col-span-6 text-right">
                        <div className="inline-flex items-end">
                          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Save</button>
                        </div>
                      </div>
        
                    </div>
                  </div>
                </div>
              </div>        

    );
}

export default ProfileForm;