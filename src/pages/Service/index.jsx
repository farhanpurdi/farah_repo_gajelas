import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar/Index"
import './service.css'
import Stand from '../../assets/Stand.jpg'
import Deep from '../../assets/Deep.jpg'
import Kids from '../../assets/Kids.jpg'


const Service = () => {
    return(
        <section className="services">
            <Navbar/>
            <div className="contentCard">
            <p><b>Shoes Cleaning & Reguler Service</b></p>
            <div className="card mb-3" style={{ maxWidth: 650 }}>
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src={Stand} className="img-fluid rounded-start" alt="Standard" />
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Standard Cleaning</h5>
                        <p className="card-text">
                        <b>Harga :</b> Rp 40.000,- <br></br>
                        <b>Bagian Yang di Cuci :</b> Sol Atas, Sol Tengah<br></br>
                        <b>Bahan Sepatu :</b> Semua Bahan Sepatu (Canvas, Suede, Leather, Nubuck, etc..)<br></br>
                        <b>Durasi :</b> 30 - Menit
                        </p>
                    </div>
                    </div>
                </div>
            </div>

            <div className="card mb-3" style={{ maxWidth: 650 }}>
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src={Deep} className="img-fluid rounded-start" alt="Deep" />
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Deep Cleaning</h5>
                        <p className="card-text">
                        <b>Harga :</b> Rp 60.000,- <br></br>
                        <b>Bagian Yang di Cuci :</b> Sol Atas, Sol Dalam, Sol Luar, Sole Dalam, Tali<br></br>
                        <b>Bahan Sepatu :</b> Semua Bahan Sepatu (Canvas, Suede, Leather, Nubuck, etc..)<br></br>
                        <b>Durasi :</b> 2-5 Hari (Tergantung Keadaan Sepatu)
                        </p>
                    </div>
                    </div>
                </div>
            </div>

            <div className="card mb-3" style={{ maxWidth: 650 }}>
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src={Kids} className="img-fluid rounded-start" alt="Kids" />
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Kids Shoes</h5>
                        <p className="card-text">
                        <b>Harga :</b> Rp 30.000,- <br></br>
                        <b>Bagian Yang di Cuci :</b> Sol Atas, Sol Dalam, Sol Luar, Sole Dalam, Tali<br></br>
                        <b>Bahan Sepatu :</b> Semua Bahan Sepatu (Canvas, Suede, Leather, Nubuck, etc..)<br></br>
                        <b>Durasi :</b> 2-5 Hari (Tergantung Keadaan Sepatu)
                        </p>
                    </div>
                    </div>
                </div>
            </div>
            </div>
            <Footer/>

        </section>
    )
}

export default Service