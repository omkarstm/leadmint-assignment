import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { MdNotificationsNone, MdFlag } from "react-icons/md"; // Icons for notifications and flag

const Header = ({ handleLogout }) => {
    const [searchQuery, setSearchQuery] = useState('');
    
    return (
        <header className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-4 w-1/2">
                <h1 className="text-lg font-semibold">Dashboard</h1>
                <div className="flex items-center gap-2 border rounded-full overflow-hidden h-9 w-1/2 px-4">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="h-full focus:outline-none bg-transparent w-full"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <CiSearch />
                </div>
            </div>

            <div className="flex items-center gap-4">
                {/* Flag Icon */}
                <button className="p-2 rounded-full hover:bg-gray-200">
                    <MdFlag className="h-6 w-6 text-gray-600" />
                </button>
                
                {/* Notification Icon */}
                <button className="p-2 rounded-full hover:bg-gray-200">
                    <MdNotificationsNone className="h-6 w-6 text-gray-600" />
                </button>

                <div className="dropdown relative">
                    <button className="flex items-center gap-2 p-2 rounded-full">
                        <img src="https://i.pravatar.cc/150?img=30" alt="avatar" className="h-8 w-8 rounded-full" />
                        <span>Sandra Marx</span>
                    </button>
                    <div className="dropdown-menu absolute right-0 mt-2 bg-white border rounded-lg shadow-lg p-2 w-48">
                        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Profile</a>
                        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Account settings</a>
                        <a href='/login' onClick={handleLogout} className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">Logout</a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
