import { useEffect, useState } from "react";
import NavbarUser from "../../components/NavbarUser";
import Logo from '../../assets/sepatu1.png'
import axios from "axios";
import './Order.css'
import { deleteForm, updateForm} from "../../api";
import { useNavigate } from "react-router-dom";



const Order = () => {

    const navigate = useNavigate();

    const [data, setData] = useState([]) // state untuk data awal
    const [selectedItem, setSelectedItem] = useState(null);

    
    useEffect(() => {
        const ProductData = async () =>{
            try{
                const res = await axios.get('https://65390d86e3b530c8d9e7d380.mockapi.io/form')
                console.log(res.data);
                setData(res.data)
            }catch (er){
                console.er('Error Product Data : ', er)
            }
        }

        ProductData()
    },[selectedItem])

    const handleDelete = (index) => {

        const idForm = data[index].id;

        deleteForm(idForm)
        .then((res) =>{
            console.log('Data berhasil terhapus di API => ', res.data)
            const updatedData = [...data];
            updatedData.splice(index, 1);
            setData(updatedData);
            //setHapusData(index);
            
        })
        .catch((err) =>{
            console.log('Ada Kesalahan dalam code', err)
        })

        // dispatch(deleteform(index));
        // console.log("masukoy");
    };

    const handleEditInputChange = (e) => {
        const { name, value } = e.target;
        setSelectedItem({
            ...selectedItem,
            [name]: value,
        });
    };
        

    const handleEdit = (index) => {
        setSelectedItem(data[index])
    };


    const handleSave = (e) => {
        e.preventDefault();
        // console.log("edit data masuk ga?", selectedItem)
    
        if (selectedItem.id) {
            updateForm(selectedItem)
                .then((res) => {
                const updatedData = [...data];
                updatedData[selectedItem.id - 1] = selectedItem;
                setData(updatedData);
                console.log('Data berhasil tersimpan di API => ', res.data);
                setSelectedItem(null);
                // navigate('/OrderRiwayat')
                })
                .catch((err) => {
                console.error('Ada Kesalahan dalam code', err);
                });
            }


        };


        // const handleModalClick = (item) => {
        //     setSelectedItem(item);
        // };


    return(
        <section className="ListOrder">
            <NavbarUser/>
            <div className="content" style={{ marginTop: "65px" }}>
                <div id="content_left">
                <h1>Detail Order </h1>
                    <hr size="10px"></hr>   
                </div>
                <div id="content_right">
                    <img src= {Logo} alt="Bootstrap" width={500} height={300} />
                </div>
            </div><br></br>

            <div className="table-responsive" marginTop={100}>
            <table className="table table-bordered table-striped table-hover" id='CreateOrder'>
                    <thead>
                        <tr style={{ textAlign: "center" }}>
                        <th scope="col">No</th>
                        <th scope="col">Tanggal</th>
                        <th scope="col">Nama Customer</th>
                        <th scope="col">Antar Jemput</th>
                        <th scope="col">Service</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((product, index)=>(
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{product.date}</td>
                                <td>{product.namecust}</td>
                                <td>{product.AntarJemput}</td>
                                <td>{product.service}</td>
                                <td>
                                    <button className="btn btn-danger" onClick={()=> handleDelete(index)}><i className="fa fa-trash"></i></button>
                                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editModal" onClick={() => handleEdit(index)}><i className="fa fa-edit" /></button>
                                    {/* <button  className="btn btn-success" data-bs-toggle="modal" data-bs-target="#editModal" onClick={() => handleEdit(product)}><i className="fa fa-edit" /></button> */}
                                    {/* <button type="button" className="btn btn-info"  data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => handleModalClick(product)}><i className="fa fa-bars" /></button> */}
                                    <button type="button" className="btn btn-info"  data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setSelectedItem(product)}><i className="fa fa-bars" /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
               
            {/* <button type="button" class="btn btn-primary">
            Keterangan
            </button> */}

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" >Detail Data</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    {selectedItem ? (
                    <div>
                        <b>{selectedItem.date}</b>
                        <p><b>=========================================</b></p>
                        <p><b>Nama Customer: {selectedItem.namecust}</b></p>
                        <p><b>Alamat: {selectedItem.alamat}</b></p>
                        <p><b>Quantity : {selectedItem.Quantity}</b></p>
                        <p><b>Status Delivery : {selectedItem.AntarJemput}</b></p>
                        <p><b>Waktu Delivery : {selectedItem.jam}</b></p>
                        <p><b>Service : {selectedItem.service}</b></p>
                        <p><b>Deskripsi : {selectedItem.deks}</b></p>
                    </div>
                    ) : (
                    <p>Pilih item untuk melihat keterangannya</p>
                    )}
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
            </div>

            
                <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="exampleeditModal" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" >Edit Data</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    {selectedItem && (
                    <form onSubmit={handleSave}>
                            <div className="mb-3">
                                <label htmlFor="namecust" className="form-label">
                                    Nama Customer
                                </label>
                                <input
                                    type="text"
                                    name="namecust"
                                    className="form-control"
                                    id="namecust"
                                    value={selectedItem.namecust}
                                    // placeholder="Masukkan Nama..."
                                    require=""
                                    onChange={handleEditInputChange}
                                />
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
                                    value={selectedItem.alamat}
                                    // placeholder="Masukkan Alamat..."
                                    require=""
                                    onChange={handleEditInputChange}
                                />
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
                                    value={selectedItem.Quantity}
                                    // placeholder="Masukkan Banyak..."
                                    require=""
                                    onChange={handleEditInputChange}
                                />
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
                                    value={selectedItem.date}
                                    // placeholder="Masukkan tanggal"
                                    require=""
                                    onChange={handleEditInputChange}
                                />
                                </div>

                                <div className="mb-3">
                                <label htmlFor="pilih" className="form-label">
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
                                    checked={selectedItem.AntarJemput === "Ya"}
                                    onChange={handleEditInputChange}
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
                                    checked={selectedItem.AntarJemput === "Tidak"}
                                    onChange={handleEditInputChange}
                                    />
                                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    Tidak
                                    </label>
                                </div>
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
                                    // placeholder="Masukkan Jam PickUp (ex : Senin 27, 11.30)"
                                    require=""
                                    value={selectedItem.jam}
                                    onChange={handleEditInputChange}
                                />
                                </div>

                                <div className="mb-3">
                                <label htmlFor="pilih" className="form-label">
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
                                    checked={selectedItem.service === "Standard Clean"}
                                    onChange={handleEditInputChange}
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
                                    checked={selectedItem.service === "Deep Clean"}
                                    onChange={handleEditInputChange}
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
                                    checked={selectedItem.service === "Kids Shoes"}
                                    onChange={handleEditInputChange}
                                    />
                                    <label className="form-check-label" htmlFor="flexRadioDefault3">
                                    Kids Shoes
                                    </label>
                                </div>
                                </div>

                                {/* <div className="mb-3">
                                <label htmlFor="service" className="form-label">
                                    Jasa Service
                                </label><br></br>
                                <div className="form-check form-check-inline">
                                    <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name='service'
                                    id="DeepClean"
                                    value="Deep Clean"
                                    checked={editedData.service.includes("Deep Clean")}
                                    onChange={handleServiceCheckbox}
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
                                    checked={editedData.service.includes("Standard Clean")}
                                    onChange={handleServiceCheckbox}
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
                                    checked={editedData.service.includes("Kids Shoes")}
                                    onChange={handleServiceCheckbox}
                                    />
                                    <label className="form-check-label" htmlFor="Kids Shoes">
                                    Kids Shoes
                                    </label>
                                </div>
                                <p id="ServiceError" style={{ color: "red" }}>{editErrors.service}</p>
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
                                    // placeholder="Masukkan Detail Barang...."
                                    requireds=""
                                    style={{ minHeight: 150 }}
                                    value={selectedItem.deks}
                                    onChange={handleEditInputChange}
                                />
                                </div>
                                
                                <button type="submit" class="btn btn-primary" >Update</button>
                                
                            </form>
                         )}
                    </div>
                    </div>
                </div>
                </div>
               
           

        </section>
    )
}

export default Order