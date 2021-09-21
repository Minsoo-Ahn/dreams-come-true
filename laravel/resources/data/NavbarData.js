import React from 'react';
import * as BsIcons from 'react-icons/bs';
export const NavbarData = [
    {
        title: 'Home',
        path: '/',
        icon: <BsIcons.BsFillHouseDoorFill />,
        cName: 'nav-text',
        children: false
    },
    {
        title: 'About Me',
        path: '/about',
        icon: <BsIcons.BsFillInfoCircleFill />,
        cName: 'nav-text',
        children: false
    },
    {
        title: 'Portfolio',
        path: '/portfolio',
        icon: <BsIcons.BsFillDisplayFill />,
        cName: 'nav-text',
        children: {
            0 : "2020",
            1 : "2021"
        }
    },
    {
        title: 'Works',
        path: '/works',
        icon: <BsIcons.BsServer />,
        cName: 'nav-text',
        children: {
            0 : "PHP",
            1 : "AWS"
        }
    },
    {
        title: 'Words',
        path: '/words',
        icon: <BsIcons.BsTextareaT />,
        cName: 'nav-text',
        children: {
            0 : "Japanese",
            1 : "English"
        }
    },
    {
        title: 'Todo List',
        path: '/todoList',
        icon: <BsIcons.BsCardChecklist />,
        cName: 'nav-text',
        children: {
            0 : "2020/01",
            1 : "2021/01"
        }
    }
];
