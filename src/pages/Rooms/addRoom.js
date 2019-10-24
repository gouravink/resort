import React, { useState, Fragment, useContext } from 'react'
import Modal from '../../components/Modal/modal'
import './addRoom.css'
import ToastContext from '../../Context/toastContext'

const AddRoom = () => {
    const [showModal, setShowModal] = useState(true)
    const { setMessage } = useContext(ToastContext);
    const [rname, setRname] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [price, setPrice] = useState('')
    const [city, setCity] = useState('')
    const [postCode, setPostCode] = useState('')
    const [country, setCountry] = useState("ChooseCountry")
    const [amenities, setAmenities] = useState({
        tv: "TV",
        ro: "RO",
        wifi: "Wifi",
        parking: "Parking",
        couple_entry: "Couple Entry"
    })

    const handleChange = (event) => {
        setCountry(event.target.value)
    }

    const validForm = () => {
        let valid = true;
        if (!rname.trim()) {
            valid = false;
            setMessage("Enter Room Name")
        } else if (!address.trim()) {
            valid = false;
            setMessage("Enter Address")
        } else if (!phone.trim()) {
            valid = false;
            setMessage("Enter Phone Number")
        } else if (!price.trim()) {
            valid = false;
            setMessage("Enter Price")
        } else if (!city.trim()) {
            valid = false;
            setMessage("Enter City")
        } else if (!postCode.trim()) {
            valid = false;
            setMessage("Enter Post Code")
        } else if (!country.trim()) {
            valid = false;
            setMessage("Select Country")
        }
        return valid
    }

    const doAddRoomData = (e) => {
        e.preventDefault()
        const validFormData = validForm()
        const addRoomData = { rname, address, phone, price, city, postCode, country, amenities }
        // console.log(addRoomData)
        if (validFormData) {
            // console.log("In")
            let localStorageData = localStorage.getItem('addRoomInfo');
            if (localStorageData) {
                localStorageData = JSON.parse(localStorageData);
                localStorageData.push(addRoomData);
                localStorage.setItem('addRoomInfo', JSON.stringify(localStorageData));
            } else {
                localStorage.setItem('addRoomInfo', JSON.stringify([addRoomData]));
            }
            setMessage("Add Room Successfully")
        }
    }
    return (
        <Fragment>
            {showModal &&
                <Modal show={showModal} handleClose={() => setShowModal(false)}>
                    <form onSubmit={doAddRoomData}>
                        <div className="form-group">
                            <h2 className="heading">Make Room</h2>
                            <div className="controls">
                                <label for="name">Room Name</label>
                                <input type="text" id="rname" className="floatLabel" name="rname" value={rname} onChange={(e) => { setRname(e.target.value) }} />
                            </div>
                            <div className="controls">
                                <label for="address">Address</label>
                                <input type="text" id="address" className="floatLabel" name="address" value={address} onChange={(e) => { setAddress(e.target.value) }} />
                            </div>
                            <div className="controls">
                                <label for="phone">Phone</label>
                                <input type="tel" id="phone" className="floatLabel" name="phone" value={phone} onChange={(e) => { setPhone(e.target.value) }} />
                            </div>
                            <div className="controls">
                                <label for="price">Price</label>
                                <input type="number" id="price" className="floatLabel" name="price" value={price} onChange={(e) => { setPrice(e.target.value) }} />
                            </div>
                            <div className="grid">
                                <div className="col-2-3">
                                    <div className="controls">
                                        <label for="city">City</label>
                                        <input type="text" id="city" className="floatLabel" name="city" value={city} onChange={(e) => { setCity(e.target.value) }} />
                                    </div>
                                </div>
                                <div className="col-1-3">
                                    <div className="controls">
                                        <label for="post-code">Post Code</label>
                                        <input type="text" id="post-code" className="floatLabel" name="post-code" value={postCode} onChange={(e) => { setPostCode(e.target.value) }} />
                                    </div>
                                </div>
                            </div>
                            <div className="controls">
                                <label for="country">Country</label>
                                <select className="floatLabel" value={country} onChange={handleChange}>
                                    <option selected value="Choose Country">Choose Country</option>
                                    <option value="america">America</option>
                                    <option value="japan">Japan</option>
                                    <option value="india">India</option>
                                    <option value="australia">Australia</option>
                                    <option value="italy">Italy</option>
                                    <option value="germany">Germany</option>
                                </select>
                            </div>
                            <div className="col-1-3">
                                <div className="controls">
                                    <label for="post-code">Amenities</label>
                                    <input type="checkbox" id="tv" className="floatLabel" name="tv" value={amenities.tv} onChange={(e) => { setAmenities({ tv: e.target.value }) }} />TV
                                    <input type="checkbox" id="ro" className="floatLabel" name="ro" value={amenities.ro} onChange={(e) => { setAmenities({ ro: e.target.value }) }} />RO Water
                                    <input type="checkbox" id="wifi" className="floatLabel" name="wifi" value={amenities.wifi} onChange={(e) => { setAmenities({ wifi: e.target.value }) }} />wifi
                                    <input type="checkbox" id="parking" className="floatLabel" name="parking" value={amenities.parking} onChange={(e) => { setAmenities({ parking: e.target.value }) }} />Parking
                                    <input type="checkbox" id="couple_entry" className="floatLabel" name="couple_entry" value={amenities.couple_entry} onChange={(e) => { setAmenities({ couple_entry: e.target.value }) }} />Couple Entry
                                </div>
                            </div>
                            <button type="submit" value="Submit" className="col-1-4">Submit</button>
                        </div>
                    </form>
                </Modal>
            }
        </Fragment>
    );
}
export default AddRoom