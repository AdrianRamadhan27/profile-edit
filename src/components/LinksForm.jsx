import React from "react";

const LinksForm = () => {

    return (
              <div className="bg-white w-full m-auto rounded shadow-lg md:p-8 h-full">
                <div className="grid gap-4 gap-y-2 text-sm">
                  <div className="text-gray-600">
                    <p className="font-medium text-lg">External Links</p>
                    <p>Edit Your External Links</p>
                  </div>
        
                  <div className="">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1">
                      <div className="">
                        <label for="facebook">Facebook URL</label>
                        <input type="text" name="facebook" id="facebook" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="Paste your link here" />
                      </div>

                      <div className="">
                        <label for="twitter">Twitter URL</label>
                        <input type="text" name="twitter" id="twitter" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="Paste your link here" />
                      </div>

                      <div className="">
                        <label for="blogger">Blogger URL</label>
                        <input type="text" name="blogger" id="blogger" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="Paste your link here" />
                      </div>

                      <div className="">
                        <label for="googleplus">Google+ URL</label>
                        <input type="text" name="googleplus" id="googleplus" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="Paste your link here" />
                      </div>

                      <div className="">
                        <label for="linkedin">LinkedIn URL</label>
                        <input type="text" name="linkedin" id="linkedin" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="Paste your link here" />
                      </div>

                      <div className="">
                        <label for="website">Website URL</label>
                        <input type="text" name="website" id="website" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="Paste your link here" />
                      </div>

      
        
              
                      <div className=" text-right">
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

export default LinksForm;