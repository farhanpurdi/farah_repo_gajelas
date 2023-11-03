import Logo from '../../assets/sepatu1.png'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar/Index'
import poto1 from '../../assets/wash1.jpg'
import poto2 from '../../assets/wash2.jpg'
import poto3 from '../../assets/wash3.jpg'

const Home = () => {
    return(
        <section className='Hero'>
            <Navbar/>
            <div className="content">
                <div id="content_left">
                <h1>Mau Nyuci Sepatu? </h1>
                    <h1>Yang Bersih dan  </h1>
                    <h1>Cepat?</h1>
                    <button type="button" class="btn btn-dark">Booking Now</button>
                    <hr size="10px"></hr>   
                </div>
                <div id="content_right">
                    <img src= {Logo} alt="Bootstrap" width={500} height={300} />
                </div>
            </div>
    
            <div className="content2">
                <div className="container-fluid" id="codelatte"  style={{ marginTop: "3%" }}>
                    <header className="navbar mb-3">
                        <h3 className="mx-auto">Tentang Kami</h3>
                    </header>
                    <div
                        className="row justify-content-center text-center"
                        style={{ marginTop: "3%" }}
                    >
                        <p width={1500}>Sepatu adalah bagian paling penting dan signifikan dalam pemakaian
                            kita sehari-hari. Menjaga sepatu bersih merupakan bagian penting 
                            dari para pecinta sepatu. Kami ZetShoe Laundry kami memiliki langkah-
                            langkah / SOP yang rinci dalam membersihkan dan mencuci sepatu 
                            anda. Setiap pasang sepatu ditangani dengan hati-hati dan 
                            pemeriksaan menyeluruh. Segera hubungi kami atau kalian dapat 
                            melakukan booking sekarang untuk pengaturan pickup oleh kurir kami.</p>
                    </div>
                </div>
            </div>
    
            <div className="content3home">
                <div className="container-fluid" id="codelatte" style={{ marginTop: "3%" }}>
                    <header className="navbar mb-3">
                        <h3 className="mx-auto">Gallery</h3>
                    </header>
                    <div
                        className="row justify-content-center text-center"
                        style={{ marginTop: "3%" }}
                    >
                        <div
                        id="carouselExampleCaptions"
                        className="carousel slide"
                        data-bs-ride="false"
                        >
                        <div className="carousel-indicators">
                            <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to={0}
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"
                            />
                            <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to={1}
                            aria-label="Slide 2"
                            />
                            <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to={2}
                            aria-label="Slide 3"
                            />
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img src={poto1} className="d-block w-100" alt="galeri1" width={500} height={600}/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>ZetShoes-Galery</h5>
                                <p>Proses Pengeringan Sepatu</p>
                            </div>
                            </div>
                            <div className="carousel-item">
                            <img src={poto2} className="d-block w-100" alt="galeri2"  width={500} height={600}/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>ZetShoes-Galery</h5>
                                <p>Proses Perawatan Sepatu</p>
                            </div>
                            </div>
                            <div className="carousel-item">
                            <img src={poto3} className="d-block w-100" alt="galeri3"  width={500} height={600} />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>ZetShoes-Galery</h5>
                                <p>Proses Pencucian Sepatu</p>
                            </div>
                            </div>
                        </div>
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide="prev"
                        >
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide="next"
                        >
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="visually-hidden">Next</span>
                        </button>
                        </div>    
                    </div>
                </div>
                <Footer/>
            </div>
            
            </section>
        
    )
}

export default Home