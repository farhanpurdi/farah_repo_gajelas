import './Header.css'
import Logo from '../../assets/sepatu1.png'
import mesin from '../../assets/WashingMachine.png'
import timer from '../../assets/Timer.png'
import wallet from '../../assets/Wallet.png'
import Wash from '../../assets/WashingMachine.png'
import Login from '../../assets/Login.png'
import PickUp from '../../assets/PickUp.png'
import Form from '../../assets/Formulir.png'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate;

    function handleClick(){
        navigate("/Login")
    }

    return(
        <section className='Hero'>
            <div className="content">
                <div id="content_left">
                    <h1>Jasa Loundry Sepatu </h1>
                    <h1>Premium dan Cepat </h1>
                    <button onClick={handleClick} class="btn btn-dark">Booking Now</button>
                    <hr size="10px"></hr>   
                </div>
                <div id="content_right">
                    <img src= {Logo} alt="Bootstrap" width={500} height={300}  />
                </div>
            </div>
    
            <div className="content2">
            <div className="container-fluid" id="codelatte" style={{ marginTop: "3%" }}>
                <header className="navbar mb-3">
                    <h3 className="mx-auto">Booking Services</h3>
                </header>
                <div
                    className="row justify-content-center text-center"
                    style={{ marginTop: "3%" }}
                >
                    <div className="card-body col-md-3 mr-3">
                    <img
                        className="img-fluid mb-3"
                        src={Login}
                        alt="Card image cap"
                        style={{ height: 150, widht: 150 }}
                    />
                    <p className="card-text">Login</p>
                    </div>
                    <div className="card-body col-md-3 mr-3">
                    <img
                        className="img-fluid mb-3"
                        src={Form}
                        alt="Card image cap"
                        style={{ height: 150, widht: 150 }}
                    />
                    <p className="card-text">Isi Form</p>
                    </div>
                    <div className="card-body col-md-3 mr-3">
                    <img
                        className="img-fluid mb-3"
                        src={PickUp}
                        alt="Card image cap"
                        style={{ height: 150, widht: 150 }}
                    />
                    <p className="card-text">Free PickUp/Delivery</p>
                    </div>
                    <div className="card-body col-md-3 mr-3">
                    <img
                        className="img-fluid mb-3"
                        src={Wash}
                        alt="Card image cap"
                        style={{ height: 150, widht: 150 }}
                    />
                    <p className="card-text">Pencucian</p>
                    </div>
                </div>
                </div>
            </div>
    
            <div className="content3">
            <div className="container-fluid" id="codelatte" style={{ marginTop: "3%" }}>
                <header className="navbar mb-3">
                    <h3 className="mx-auto">Mengapa Pilih Kami?</h3>
                </header>
                <div
                    className="row justify-content-center text-center"
                    style={{ marginTop: "3%" }}
                >
                    <div className="card-body col-md-3 mr-3">
                    <img
                        className="img-fluid mb-3"
                        src={wallet}
                        alt="Card image cap"
                        style={{ height: 150, widht: 150 }}
                    />
                    <p className="card-text">Harganya Murah</p>
                    </div>
                    <div className="card-body col-md-3 mr-3">
                    <img
                        className="img-fluid mb-3"
                        src={timer}
                        alt="Card image cap"
                        style={{ height: 150, widht: 150 }}
                    />
                    <p className="card-text">Pengerjaan Cepat</p>
                    </div>
                    <div className="card-body col-md-3 mr-3">
                    <img
                        className="img-fluid mb-3"
                        src={mesin}
                        alt="Card image cap"
                        style={{ height: 150, widht: 150 }}
                    />
                    <p className="card-text">Mesin Yang Handal</p>
                    </div>
                </div>
                </div>
            </div>
    
    
            </section>
    )
}

export default Header