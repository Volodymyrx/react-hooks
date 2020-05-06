import React, {Fragment, useContext, useEffect} from "react";
import {Link} from 'react-router-dom'
import {GithubContext} from "../context/github/githubContex";
import {Repos} from "../components/Repos";

export const Profile = (props) => {
    const {getUser, getRepos, user, repos, loading} = useContext(GithubContext)
    const nik = props.match.params.name

    useEffect(() => {
        getUser(nik)
        getRepos(nik)
        // eslint-disable-next-line
    }, [])

    const {
        name, company, avatar_url, location, bio, blog, login, html_url,
        followers, public_repos, public_gists, following
    } = user

    return (
        <Fragment>
            <Link to={'/'} className='btn btn-link'> to main</Link>
            <h1>Profile page</h1>
            {loading ? <p className='text-center'>Loading ...</p> :
                <div className='card mb-4'>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-sm-3 text-center">
                                <img
                                    src={avatar_url}
                                    alt={name}
                                    style={{width: '150px'}}
                                />
                                <h3>Name: {name}</h3>
                                {location && <p>Location: {location}</p>}
                            </div>
                            <div className="col">
                                {bio && <Fragment>
                                    <h3>BIO</h3>
                                    <p>{bio}</p>
                                </Fragment>}
                                <a
                                    href={html_url}
                                    target='_blank'
                                    className='btn btn-dark'
                                    rel="noopener noreferrer"
                                >
                                    Open profile in GitHub
                                </a>
                                <ul>
                                    {login && <li><strong>Username: </strong>{login}</li>}
                                    {company && <li><strong>Company: </strong>{company}</li>}
                                    {blog && <li><strong> Website: </strong>{blog}</li>}
                                </ul>
                                <div className="badge badge-primary">Followers: {followers}</div>
                                <div className="badge badge-success">Following: {following}</div>
                                <div className="badge badge-info">Repos: {public_repos}</div>
                                <div className="badge badge-dark">Gists: {public_gists}</div>

                            </div>
                        </div>
                    </div>
                </div>
            }
            <h3> 10 repos on github </h3>
            <Repos repos={repos}/>
        </Fragment>
    )
};

