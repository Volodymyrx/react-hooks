import React from "react";
import {NavLink} from 'react-router-dom'

export const About = () => {

    return (
        <div>
            <h1>About project</h1>
            <p>Next lesson project by course "React Hooks" </p>
            <p>Teacher
                <NavLink to='/profile/vladilenm'><strong>Vladilen Minin</strong></NavLink>
            </p>
            <p>My profile
                <NavLink to='/profile/volodymyrx'><strong>Volodymyr Martynenko</strong></NavLink>
            </p>
            <p>volodiax@ukr.net </p>
            <p> This project on GitHub:
                <h5>
                    <a
                        href='https://github.com/Volodymyrx/react-hooks'
                        target='_blank'
                        rel="noopener noreferrer"
                    >react-hooks
                    </a>
                </h5>
            </p>
        </div>
    )
};

