import React from "react";
import { useRef } from "react";

function LinksForm({linksData, onSave}) {
    const facebookRef = useRef(linksData.facebook);
    const twitterRef = useRef(linksData.twitter);
    const bloggerRef = useRef(linksData.blogger);
    const googleplusRef = useRef(linksData.googleplus);
    const linkedinRef = useRef(linksData.linkedin);
    const websiteRef = useRef(linksData.website);
    

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({
        facebook: facebookRef.current.value,
        twitter: twitterRef.current.value,
        blogger: bloggerRef.current.value,
        googleplus: googleplusRef.current.value,
        linkedin: linkedinRef.current.value,
        website: websiteRef.current.value,
        });
    };


    return (
            <form onSubmit={handleSubmit}>
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
                        <input ref={facebookRef} defaultValue={linksData.facebook} disabled type="text" name="facebook" id="facebook" className="disabled:text-gray-400 h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Paste your link here" />
                      </div>

                      <div className="">
                        <label for="twitter">Twitter URL</label>
                        <input ref={twitterRef} defaultValue={linksData.twitter} disabled type="text" name="twitter" id="twitter" className="disabled:text-gray-400 h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Paste your link here" />
                      </div>

                      <div className="">
                        <label for="blogger">Blogger URL</label>
                        <input ref={bloggerRef} defaultValue={linksData.blogger} disabled type="text" name="blogger" id="blogger" className="disabled:text-gray-400 h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Paste your link here" />
                      </div>

                      <div className="">
                        <label for="googleplus">Google+ URL</label>
                        <input ref={googleplusRef} defaultValue={linksData.googleplus} disabled type="text" name="googleplus" id="googleplus" className="disabled:text-gray-400 h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Paste your link here" />
                      </div>

                      <div className="">
                        <label for="linkedin">LinkedIn URL</label>
                        <input ref={linkedinRef} defaultValue={linksData.linkedin} disabled type="text" name="linkedin" id="linkedin" className="disabled:text-gray-400 h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Paste your link here" />
                      </div>

                      <div className="">
                        <label for="website">Website URL</label>
                        <input ref={websiteRef} defaultValue={linksData.website} disabled type="text" name="website" id="website" className="disabled:text-gray-400 h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Paste your link here" />
                      </div>

      
        
              
                      <div className=" text-right">
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

export default LinksForm;