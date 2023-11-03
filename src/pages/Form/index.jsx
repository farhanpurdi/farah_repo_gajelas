import { useNavigate } from 'react-router-dom'
import Logo from '../../assets/sepatu1.png'
import NavbarUser from '../../components/NavbarUser'
import './Form.css'
import React, { useEffect, useState } from 'react'
import { getForm, sendForm } from '../../api/index';



function Form () {
    const navigate = useNavigate();

    const [form, setForm] = useState([]);
    const [HapusData, setHapusData] = useState(null);
    const [newform, setNewForm] = useState({
        namecust: '',
        alamat: '',
        Quantity: '',
        date: '',
        AntarJemput: '',
        jam: '',
        service: '',
        deks:'',
    });

    const [NamaCustError, setNamaCustError] = useState('');
    const [AlamatError, setAlamatError] = useState('');
    const [QuantityError, setQuantityError] = useState('');
    const [TanggalError, setTanggalError] = useState('');
    const [AntarJemputError, setAntarJemputError] = useState('');
    const [ServiceError, setServiceError] = useState('');

    useEffect(() => {
        getForm()
        .then((res) =>{
            setForm(res.data)
            console.log(res.data)
        })
        .catch((er) =>{
            console.log(er)
        })
    }, [])



    // function handleClick(){
    //     navigate("/EditBooking")
    // }

    // function handleClickForm(){
    //     navigate("/OrderRiwayat")
    // }

    // const handleCheckbox = (e) => {
    //     const { name, value, checked } = e.target;

    //     if (checked) {
    //         setSelectedServices([...selectedServices, value]);
    //     } else {
    //         setSelectedServices(selectedServices.filter(service => service !== value));
    //     }
    // };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewForm({
        ...newform,
        [name]: value,
        });
    };

    const handleSubmit = (e) => {
        // console.log("masuk geh")
        e.preventDefault();

        // sendForm(newform)
        // .then((res) =>{
            
        //     // setForm(res.data)
        //     console.log('Data berhasil tersimpan di API => ', res.data)
        //     // navigate('/OrderRiwayat')
        // })
        // .catch((er) =>{
        //     console.log('Ada Kesalahan dalam code', er)
        // })


        const namacustRegex = /^[a-zA-Z\s]+$/; 

        setNamaCustError('');
        setAlamatError('');
        setQuantityError('');
        setTanggalError('');
        setAntarJemputError('');
        setServiceError('');

        if (!newform.namecust || !namacustRegex.test(newform.namecust)) {
            setNamaCustError('Nama produk hanya boleh diisi dengan huruf dan spasi');
        }

        if(!newform.alamat){
            setAlamatError('Harus diisi')
        }

        if(!newform.Quantity){
            setQuantityError('Harus diisi')
        }

        if(!newform.date){
            setTanggalError('Harus diisi')
        }

        if(!newform.AntarJemput){
            setAntarJemputError('Harus diisi')
        }

        if(!newform.service){
            setServiceError('Tidak Boleh Kosong')
        }
        


        if(
            newform.namecust && 
            newform.alamat && 
            newform.Quantity &&
            newform.date && 
            newform.AntarJemput && 
            newform.jam &&
            newform.service && 
            newform.deks&&
            namacustRegex.test(newform.namecust)
        ){
            sendForm(newform)
            .then((res) =>{
                
                // setForm(res.data)
                console.log('Data berhasil tersimpan di API => ', res.data)
                navigate('/OrderRiwayat')
            })
            .catch((er) =>{
                console.log('Ada Kesalahan dalam code', er)
            })

            setForm([...form, newform]);
            setNewForm({
                namecust: '',
                alamat: '',
                Quantity: '',
                date: '',
                AntarJemput: '',
                jam: '',
                service: '',
                deks: '',
        });
    } else{
        window.alert("Data Belom Lengkap")
    }
    
    };

    

    return(
        <section className="PageForm">
            <NavbarUser/>

            <div className="content" style={{ marginTop: "65px" }}>
                <div id="content_left">
                <h1>Booking </h1>
                    <h1>Sekarang !!  </h1>
                    <hr size="10px"></hr>   
                </div>
                <div id="content_right">
                    <img src= {Logo} alt="Bootstrap" width={500} height={300} />
                </div>
            </div>

            <div id="kotak">
                <div id="kotak-content">
                    <div className="container">
                        <div className="pagetambah" style={{ margin: "0 auto", maxWidth: "95%" }}>
                        {/* {isEditing ? (
                            <EditForm data={editingData} onSaveEdit={handleSave} />
                            ) : ( */}
                            <div
                            className="forform"
                            style={{ minWidth: 450, maxWidth: "60%", margin: "0 auto" }}
                            >
                            <h3 style={{ textAlign: "left", marginTop: 40, marginBottom: "-16px" }}>
                                <b>Create Order</b>
                            </h3>
                            <br />
                            <br />
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                <label htmlFor="namecust" className="form-label">
                                    Nama Customer
                                </label>
                                <input
                                    type="text"
                                    name="namecust"
                                    className="form-control"
                                    id="namecust"
                                    value={newform.namecust}
                                    placeholder="Masukkan Nama..."
                                    require=""
                                    onChange={handleInputChange}
                                />
                                <p id="NamaCustError" style={{ color: "red" }}>{NamaCustError}</p>
                                </div>
                                <div className="mb-3">
                                <label htmlFor="alamat" className="form-label">
                                    Alamat
                                </label>
                                <input
                                    type="text"
                                    name="alamat"
                                    className="form-control"
                                    id="alamat"
                                    value={newform.alamat}
                                    placeholder="Masukkan Alamat..."
                                    require=""
                                    onChange={handleInputChange}
                                />
                                <p id="AlamatError" style={{ color: "red" }}>{AlamatError}</p>
                                </div>
                                <div className="mb-3">
                                <label htmlFor="Quantity" className="form-label">
                                    Quantity
                                </label>
                                <input
                                    type="number"
                                    name="Quantity"
                                    className="form-control"
                                    id="Quantity"
                                    value={newform.Quantity}
                                    placeholder="Masukkan Banyak..."
                                    require=""
                                    onChange={handleInputChange}
                                />
                                <p id="QuantityError" style={{ color: "red" }}>{QuantityError}</p>
                                </div>

                                <div className="mb-3">
                                <label htmlFor="date" className="form-label">
                                    Hari/Tanggal
                                </label>
                                <input
                                    type="date"
                                    name="date"
                                    className="form-control"
                                    id="date"
                                    value={newform.date}
                                    placeholder="Masukkan tanggal"
                                    require=""
                                    onChange={handleInputChange}
                                />
                                <p id="TanggalError" style={{ color: "red" }}>{TanggalError}</p>
                                </div>
                                
                                <div className="mb-3">
                                <label htmlFor="AntarJemput" className="form-label">
                                    Antar Jemput
                                </label>
                                <br />
                                <div className="form-check-inline">
                                    <input
                                    className="form-check-input"
                                    type="radio"
                                    name="AntarJemput"
                                    id="Ya"
                                    value="Ya"
                                    checked={newform.AntarJemput === "Ya"}
                                    onChange={handleInputChange}
                                    />
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    Ya
                                    </label>
                                </div>
                                <div className="form-check-inline">
                                    <input
                                    className="form-check-input"
                                    type="radio"
                                    name="AntarJemput"
                                    value="Tidak"
                                    id="Tidak"
                                    checked={newform.AntarJemput === "Tidak"}
                                    onChange={handleInputChange}
                                    />
                                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    Tidak
                                    </label>
                                </div>
                                <p id="AntarJemputError" style={{ color: "red" }}>{AntarJemputError}</p>
                                </div>

                                <div className="mb-3">
                                <label htmlFor="jam" className="form-label">
                                    Jam&amp; PickUp
                                </label>
                                <input
                                    type="text"
                                    name="jam"
                                    className="form-control"
                                    id="jam"
                                    placeholder="Masukkan Jam PickUp (ex : Senin 27, 11.30)"
                                    require=""
                                    value={newform.jam}
                                    onChange={handleInputChange}
                                />
                                </div>

                                <div className="mb-3">
                                <label htmlFor="service" className="form-label">
                                    Service
                                </label>
                                <br />
                                <div className="form-check-inline">
                                    <input
                                    className="form-check-input"
                                    type="radio"
                                    name="service"
                                    id="StandardClean"
                                    value="Standard Clean"
                                    checked={newform.service === "Standard Clean"}
                                    onChange={handleInputChange}
                                    />
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    Standard Clean
                                    </label>
                                </div>
                                <div className="form-check-inline">
                                    <input
                                    className="form-check-input"
                                    type="radio"
                                    name="service"
                                    value="DeepClean"
                                    id="Deep Clean"
                                    checked={newform.service === "Deep Clean"}
                                    onChange={handleInputChange}
                                    />
                                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    Deep Clean
                                    </label>
                                </div>
                                <div className="form-check-inline">
                                    <input
                                    className="form-check-input"
                                    type="radio"
                                    name="service"
                                    value="KidsShoes"
                                    id="Kids Shoes"
                                    checked={newform.service === "Kids Shoes"}
                                    onChange={handleInputChange}
                                    />
                                    <label className="form-check-label" htmlFor="flexRadioDefault3">
                                    Kids Shoes
                                    </label>
                                </div>
                                <p id="ServiceError" style={{ color: "red" }}>{ServiceError}</p>
                                </div>

                                {/* <div className="mb-3">
                                <label htmlFor="JasaService" className="form-label">
                                    Jasa Service
                                </label><br></br>
                                <div className="form-check form-check-inline">
                                    <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name='service'
                                    id="DeepClean"
                                    value="Deep Clean"
                                    checked={selectedServices.includes("Deep Clean")}
                                    onChange={handleInputChange}
                                    />
                                    <label className="form-check-label" htmlFor="Deep Clean">
                                    Deep Clean
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name='service'
                                    id="StandardClean"
                                    value="Standard Clean"
                                    checked={selectedServices.includes("Standard Clean")}
                                    onChange={handleInputChange}
                                    />
                                    <label className="form-check-label" htmlFor="Standard Clean">
                                    Standard Clean
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name='service'
                                    id="Kids Shoes"
                                    value="Kids Shoes"
                                    checked={selectedServices.includes("Kids Shoes")}
                                    onChange={handleInputChange}
                                    />
                                    <label className="form-check-label" htmlFor="Kids Shoes">
                                    Kids Shoes
                                    </label>
                                </div>
                                <p id="ServiceError" style={{ color: "red" }}>{ServiceError}</p>
                                </div> */}
                                

                                <div className="mb-3">
                                <label htmlFor="deks" className="form-label">
                                    Detail Barang
                                </label>
                                <textarea
                                    className="form-control"
                                    type= "text"
                                    name="deks"
                                    id="deks"
                                    placeholder="Masukkan Detail Barang...."
                                    requireds=""
                                    style={{ minHeight: 150 }}
                                    value={newform.deks}
                                    onChange={handleInputChange}
                                />
                                </div>
                                <div className="d-grid gap-2 col-6 mx-auto">
                                {/* <button type="submit" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" >
                                    Add to Cart
                                </button> */}
                                <button type="submit" className="btn btn-outline-primary">
                                    Submit
                                </button>

                                
                                </div>

                            </form>
                            

                            
                            </div>
                             {/* )}  */}
                        </div>
                    </div>
                </div>
            </div>

            

            

        </section>
    )
}

export default Form