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

    // console.log('user', user)
    // console.log('repos', repos)

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
                                <h2>Name: {name}</h2>
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



                            {/*<h4>Projects</h4>*/}
                            {/*<ul>*/}
                            {/*    <li>control</li>*/}
                            {/*    {repos.map(project => {*/}
                            {/*        return <li key={project.id}>{project.name}</li>*/}
                            {/*    })}*/}
                            {/*</ul>*/}

                        </div>
                    </div>

                </div>


            }

            <Repos repos={repos}/>
        </Fragment>
    )
};
/*
id: 58238365
node_id: "MDEwOlJlcG9zaXRvcnk1ODIzODM2NQ=="
name: ".emacs.d"
full_name: "karlicoss/.emacs.d"
private: false
owner: {login: "karlicoss", id: 291333, node_id: "MDQ6VXNlcjI5MTMzMw==", avatar_url: "https://avatars0.githubusercontent.com/u/291333?v=4", gravatar_id: "", …}
html_url: "https://github.com/karlicoss/.emacs.d"
description: "My emacs config"
fork: false
url: "https://api.github.com/repos/karlicoss/.emacs.d"
forks_url: "https://api.github.com/repos/karlicoss/.emacs.d/forks"
keys_url: "https://api.github.com/repos/karlicoss/.emacs.d/keys{/key_id}"
collaborators_url: "https://api.github.com/repos/karlicoss/.emacs.d/collaborators{/collaborator}"
teams_url: "https://api.github.com/repos/karlicoss/.emacs.d/teams"
hooks_url: "https://api.github.com/repos/karlicoss/.emacs.d/hooks"
issue_events_url: "https://api.github.com/repos/karlicoss/.emacs.d/issues/events{/number}"
events_url: "https://api.github.com/repos/karlicoss/.emacs.d/events"
assignees_url: "https://api.github.com/repos/karlicoss/.emacs.d/assignees{/user}"
branches_url: "https://api.github.com/repos/karlicoss/.emacs.d/branches{/branch}"
tags_url: "https://api.github.com/repos/karlicoss/.emacs.d/tags"
blobs_url: "https://api.github.com/repos/karlicoss/.emacs.d/git/blobs{/sha}"
git_tags_url: "https://api.github.com/repos/karlicoss/.emacs.d/git/tags{/sha}"
git_refs_url: "https://api.github.com/repos/karlicoss/.emacs.d/git/refs{/sha}"
trees_url: "https://api.github.com/repos/karlicoss/.emacs.d/git/trees{/sha}"
statuses_url: "https://api.github.com/repos/karlicoss/.emacs.d/statuses/{sha}"
languages_url: "https://api.github.com/repos/karlicoss/.emacs.d/languages"
stargazers_url: "https://api.github.com/repos/karlicoss/.emacs.d/stargazers"
contributors_url: "https://api.github.com/repos/karlicoss/.emacs.d/contributors"
subscribers_url: "https://api.github.com/repos/karlicoss/.emacs.d/subscribers"
subscription_url: "https://api.github.com/repos/karlicoss/.emacs.d/subscription"
commits_url: "https://api.github.com/repos/karlicoss/.emacs.d/commits{/sha}"
git_commits_url: "https://api.github.com/repos/karlicoss/.emacs.d/git/commits{/sha}"
comments_url: "https://api.github.com/repos/karlicoss/.emacs.d/comments{/number}"
issue_comment_url: "https://api.github.com/repos/karlicoss/.emacs.d/issues/comments{/number}"
contents_url: "https://api.github.com/repos/karlicoss/.emacs.d/contents/{+path}"
compare_url: "https://api.github.com/repos/karlicoss/.emacs.d/compare/{base}...{head}"
merges_url: "https://api.github.com/repos/karlicoss/.emacs.d/merges"
archive_url: "https://api.github.com/repos/karlicoss/.emacs.d/{archive_format}{/ref}"
downloads_url: "https://api.github.com/repos/karlicoss/.emacs.d/downloads"
issues_url: "https://api.github.com/repos/karlicoss/.emacs.d/issues{/number}"
pulls_url: "https://api.github.com/repos/karlicoss/.emacs.d/pulls{/number}"
milestones_url: "https://api.github.com/repos/karlicoss/.emacs.d/milestones{/number}"
notifications_url: "https://api.github.com/repos/karlicoss/.emacs.d/notifications{?since,all,participating}"
labels_url: "https://api.github.com/repos/karlicoss/.emacs.d/labels{/name}"
releases_url: "https://api.github.com/repos/karlicoss/.emacs.d/releases{/id}"
deployments_url: "https://api.github.com/repos/karlicoss/.emacs.d/deployments"
created_at: "2016-05-06T22:34:49Z"
updated_at: "2019-12-06T09:46:59Z"
pushed_at: "2017-01-10T10:33:42Z"
git_url: "git://github.com/karlicoss/.emacs.d.git"
ssh_url: "git@github.com:karlicoss/.emacs.d.git"
clone_url: "https://github.com/karlicoss/.emacs.d.git"
svn_url: "https://github.com/karlicoss/.emacs.d"
homepage: null
size: 13
stargazers_count: 1
watchers_count: 1
language: "Emacs Lisp"
has_issues: true
has_projects: true
has_downloads: true
has_wiki: true
has_pages: false
forks_count: 0
mirror_url: null
archived: false
disabled: false
open_issues_count: 0
license: null
forks: 0
open_issues: 0
watchers: 1
default_branch: "master"

 */
