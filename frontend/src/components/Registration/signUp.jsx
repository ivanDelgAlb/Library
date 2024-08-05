import React from 'react'
import { useState } from 'react';
import userService from '../../services/userService';
import {TextField} from '@mui/material';
import '../../assets/css/signUp.css'

export default function SignUp() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');

    return(
        <>
        <div className="full-screen">
            <form onSubmit={(e) => {
                const username = document.getElementById('username').value();
                const email = document.getElementById('email').value();
                const password = document.getElementById('password').value();
                const confirmedPassword = document.getElementById("confirmedPassword");

                if (username !== '' && email !== '' && password !== '' && confirmedPassword !== ''){
                    e.preventDefault()
                    const user = [username, email, password, confirmedPassword]
                    userService.addUser(user);
                }
            }}>
                <div className='container center'>
                    <div className='card bg-light' style={{width: '100%'}}>
                        <div className='card-body text-center'>
                            <h2 className='card-title' tabIndex="0">Library</h2>
                        </div>
                        <div className='row text-center'>
                            <h4 id='signUp-title' className='card-title' tabIndex="0"> Sign Up: </h4>
                        </div>

                        <div className='row text-center field'>
                            <div className='col-md-2'></div>
                            <div className='col-md-8'>
                                <div>
                                    <TextField
                                    required
                                    id='username'
                                    name='username'
                                    label='Username'
                                    variant='standard'
                                    size='small'
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-md-2"></div>
                        </div>

                        <div className="row text-center field">
                            <div className="col-md-2"></div>
                            <div className="col-md-8">
                                <TextField
                                    required
                                    id="email"
                                    name="email"
                                    label="Email"
                                    variant="standard"
                                    size="small"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="col-md-2"></div>
                        </div>

                        <div className="row text-center field">
                            <div className="col-md-2"></div>
                            <div className="col-md-8">
                                <TextField
                                    required
                                    id="password"
                                    name="password"
                                    label="Password"
                                    type="password"
                                    variant="standard"
                                    size="small"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="col-md-2"></div>
                        </div>

                        <div className="row text-center field" style={{marginBottom: '25px'}}>
                            <div className="col-md-2"></div>
                            <div className="col-md-8">
                                <TextField
                                    required
                                    id="confirmedPassword"
                                    name="confirmedPassword"
                                    label="Confirm Password"
                                    type="password"
                                    variant="standard"
                                    size="small"
                                    value={confirmedPassword}
                                    onChange={(e) => setConfirmedPassword(e.target.value)}
                                />
                            </div>
                            <div className="col-md-2"></div>
                        </div>

                        <div className='button-container' style={{maxWidth: 150}}>
                            <button className='btn btn-outline-primary' type='submit'>Sign Up</button>
                        </div>

                    </div>
                </div>
            </form>
        </div>
        </>
    )
}