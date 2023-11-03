import Logo2 from '../../assets/Loundry5.jpg'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const navigate = useNavigate() 

    const handleClickLogin = (e) => {
        e.preventDefault();
        if (email === 'farah@gmail.com' && password === 'farah123') {
            localStorage.setItem('isLoggedIn', 'true');
            alert('Login Successfully!');
            navigate('/Booking');
        } else {
            alert('Login Failed!');
            setError('Email atau Password Salah');
        }
    }

    return(
        <section className='PageLogin'>
            <div className="contentLogin">
                <div id="content_leftLogin">
                <img src= {Logo2} alt="Bootstrap"  />
                </div>

                <div id="content_rightLogin">
                    <h2>Login to Continue</h2>
                    <div className="form-floating mb-3">
                        <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        placeholder="name@example.com"
                        onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                        <label htmlFor="floatingPassword">Password</label>
                    </div><br></br>
    
                    <div className="d-grid gap-2">
                    <button className="btn btn-primary" type="button" onClick={(e) => handleClickLogin(e)}>
                        Button
                    </button>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default Login