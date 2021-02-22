import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import AppsIcon from '@material-ui/icons/Apps';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export default function Header() {
    return (
        <section className="p-5 flex items-center">
            <div className="mr-5">
                <a href="#">
                    <MenuIcon 
                    className="transition ease-in-out transform hover:scale-125"/>
                </a>
            </div>
            <div className="font-bold text-lg transition ease-in-out transform hover:-translate-y-1">
                <a href="/">
                    <span className="text-red-600">Your</span>
                    <span>Flickr</span>
                </a>
            </div>
            <div className="flex-grow flex justify-center">
                <input className="p-1 focus:ring-4 focus:ring-offset-purple-600 rounded-lg outline-none" type="text" placeholder="Search..."/>
                <button className="ml-2 focus:outline-none"><SearchIcon /></button>
            </div>
            <div className="children:mx-2">
                <AccountCircleIcon />
                <AppsIcon />
            </div>
        </section>
    )
}

