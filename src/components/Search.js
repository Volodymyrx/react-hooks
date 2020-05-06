import React, {useContext, useState} from "react";
import {AlertContext} from "../context/alert/alertContext";
import {GithubContext} from "../context/github/githubContex";

export const Search = () => {
    const [value,setValue]=useState('');
    const {show, hide} = useContext(AlertContext);
    const github = useContext(GithubContext)
    const onSubmit = (event) => {
        if (event.key !== "Enter") {
        return
        }
        if (value.trim()){
            hide();
            github.search(value.trim())

        } else {
            github.clearUsers()
            show('Input data of user...', 'primary')
        }
    };

    return (
        <div className='form-group'>
            <input
                type='text'
                className='form-control'
                placeholder='Input nic user'
                value={value}
                onChange={event => setValue(event.target.value)}
                onKeyPress={onSubmit}
            />
        </div>
    )
};










