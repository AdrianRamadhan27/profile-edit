import React from "react";
import { CiMail } from "react-icons/ci";
import { FaBirthdayCake } from "react-icons/fa";
import { CiFlag1 } from "react-icons/ci";
import { FaCity } from "react-icons/fa6";
import { TbMailbox } from "react-icons/tb";
import { FaPhone } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaBlogger } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";


function ProfileCard({ profileData, linksData, onEditProfile, onEditLinks })  {

    return (
        <div
            className="w-full sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto bg-white shadow-xl rounded-lg text-gray-900">
            <div className="rounded-t-lg h-32 overflow-hidden">
                <img className="object-cover object-top w-full" src='https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='Mountain'/>
            </div>
            <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                <img className="object-cover object-center h-32" src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='Woman looking front'/>
            </div>
            <div className="text-center mt-2">
                <h2 className="font-semibold">{profileData.name}</h2>
                <p className="text-gray-500">{profileData.title}</p>
            </div>
            <ul className="py-4 mt-2 text-gray-700 flex items-center justify-around">
                <li className="flex flex-col items-center justify-around">
                    <div>86</div>
                    <div>Posts</div>
                </li>
                <li className="flex flex-col items-center justify-between">
                    <div>10k</div>
                    <div>Messages</div>
                </li>
                <li className="flex flex-col items-center justify-around">
                    <div>4k</div>
                    <div>Members</div>

                </li>
            </ul>
            <div className="grid grid-cols-2 px-3">
                <div>
                <div className="flex text-center">
                    <CiMail className="my-auto mr-2"/>
                    <p>{profileData.email}</p>
                </div>
                <div className="flex">
                    <FaBirthdayCake className="my-auto mr-2"/>
                    <p>{profileData.birthday} {profileData.birthmonth} {profileData.birthyear}</p>
                </div>
                <div className="flex">
                    <CiFlag1 className="my-auto mr-2"/>
                    <p>{profileData.country}</p>
                </div>
                <div className="flex">
                    <FaCity className="my-auto mr-2"/>
                    <p>{profileData.state}</p>
                </div>
                <div className="flex">
                    <TbMailbox className="my-auto mr-2"/>
                    <p>{profileData.zipcode}</p>
                </div>
                <div className="flex">
                    <FaPhone className="my-auto mr-2"/>
                    <p>{profileData.phone}</p>
                </div>
                </div>
                <div>
                <a href={linksData.facebook} target="_blank" className="flex hover:text-green-600">
                    <FaFacebookSquare className="my-auto mr-2"/>
                    <p>Facebook</p>
                </a>
                <a href={linksData.twitter} target="_blank" className="flex hover:text-green-600">
                    <FaSquareXTwitter className="my-auto mr-2"/>
                    <p>Twitter</p>
                </a>
                <a href={linksData.blogger} target="_blank" className="flex hover:text-green-600">
                    <FaBlogger className="my-auto mr-2"/>
                    <p>Blogger</p>
                </a>
                <a href={linksData.googleplus} target="_blank" className="flex hover:text-green-600">
                    <FaGooglePlusG className="my-auto mr-2"/>
                    <p>Google+</p>
                </a>
                <a href={linksData.linkedin} target="_blank" className="flex hover:text-green-600">
                    <FaLinkedin className="my-auto mr-2"/>
                    <p>LinkedIn</p>
                </a>
                <a href={linksData.website} target="_blank" className="flex hover:text-green-600">
                    <FaExternalLinkAlt className="my-auto mr-2"/>
                    <p>Website</p>
                </a>
                </div>
            </div>
            
            <div className="p-4 border-t mx-8 mt-2 flex">
                <button onClick={onEditProfile} className="w-1/2 block mx-auto mr-3 rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2 active:bg-blue-500">Edit Profile</button>
                <button onClick={onEditLinks} className="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">Edit Links</button>
            </div>
        </div>
    );
}

export default ProfileCard;