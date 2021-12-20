import React from 'react';
import menu from './menu.scss';

const Menu = ({items, active, setActive}) => {
    return (
        <div className={active ? 'sidebar active' : 'sidebar'}>
            <div className="blur" />
            <div className="sidebar__content">
            <nav className='sidebar__nav'>
                {items.map(item => 
                <li className='sidebar__item'>
                    <a className='sidebar__link' href={item.path}>{item.title}</a>
                    <span className='sidebar__icon'>{item.icon}</span>
                </li>
                    )}
            </nav>
            </div>
        </div>
    )
}

export default Menu;