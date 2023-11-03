import 'font-awesome/css/font-awesome.min.css';
import './Footer.css'

function Footer(){
    return(
        <footer>
            <div className="container">
            <div className="row">
                <div className="footer-col-1">
                <h4>
                    <b>Our Social Media</b>
                </h4>
                <p>ZetShoes Loundry</p>
                <p>Loundry Sepatu / Jasa Cuci Sepatu</p>
                <p>Workshop Yogyakarta Jl.Kaliurang no.59</p>
                <div className="SocialMedia">
                <a href="https://www.facebook.com/farahzahirotun.nisa.7/">
                    <i className="fa fa-facebook" />
                </a>
                <a href="https://www.instagram.com/afzaaheer_/">
                    <i className="fa fa-instagram" />
                </a>
                <a href="https://twitter.com/farahnisa7">
                    <i className="fa fa-twitter" />
                </a>
                </div>
                </div>

                

                <div className="footer-col-2">
                <h4>
                    <b>We Are Open</b>
                </h4>
                <p>
                    <b>Bussiness Hour : </b> Monday - Sunday
                    08.00 - 19.00
                </p>
                <p>
                    PickUp & Delivery Service
                </p>
                <p>
                    Available for Yogyakarta
                </p>
                </div>


                <div className="footer-col-3">
                <h4>
                    <b>ZetShoes</b>
                </h4>
                <p>Lebih Dekat Dengan Kami, Kritik 
                    dan Saran Kami Tunggu!
                </p>
                <p>
                    <b>Phone : </b> +62 82264xxxxx
                </p>
                <p>
                    <b>Email : </b> zet@gmail.com
                </p>
                </div>

                
            </div>
            <hr />
            <p className="copyright" style={{ textAlign: "center" }}>
                Copyright 2023 FarahZet
            </p>
            </div>
        </footer>
    )
}

export default Footer