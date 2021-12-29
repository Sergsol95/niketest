import React, { useState } from 'react';
import { SidebarData } from "./data";

import './index.scss';

const Sidebar = () => {
    const [active, setActive] = useState(false);

    return (
        <div className={active ? 'sidebar active' : 'sidebar'} onClick={() => setActive(false)}>
            <div className={active ? 'blur active' : 'blur'} />
            <div className="sidebar__content" onClick={e => e.stopPropagation()}>
            <nav className='sidebar__nav'>
                {SidebarData.map(item => 
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

export default Sidebar;