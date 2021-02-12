import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import AppsIcon from '@material-ui/icons/Apps';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export default function Header() {
    return (
        <section className="p-5 flex items-center">
            <div className="Header--VerticalBar">
                <MenuIcon />
            </div>
            <div className="Header--Logo">
                <span className="Header--Red">You</span>
                <span className="Header--White">Tube</span>
            </div>
            <div className="flex-grow flex justify-center">
                <input type="text" placeholder="Search..."/>
                <button><SearchIcon /></button>
            </div>
            <div className="Header--TopbarMenu">
                <AccountCircleIcon />
                <AppsIcon />
            </div>
        </section>
    )
}