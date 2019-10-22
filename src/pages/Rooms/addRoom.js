import React, { useState, Fragment, useContext } from 'react'
import Modal from '../../components/Modal/modal'
import './addRoom.css'
import ToastContext from '../../Context/toastContext'

const AddRoom = (props) => {
    const [showModal, setShowModal] = useState(true)
    const { setMessage } = useContext(ToastContext);
    const [rname, setRname] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [price, setPrice] = useState('')
    const [city, setCity] = useState('')
    const [postCode, setPostCode] = useState('')
    const [country, setCountry] = useState('')

    const validForm = () => {
        let valid = true;
        if (!rname) {
            valid = false;
            setMessage("Enter Room Name")
        } else if (!address) {
            valid = false;
            setMessage("Enter Address")
        } else if (!phone) {
            valid = false;
            setMessage("Enter Phone Number")
        } else if (!price) {
            valid = false;
            setMessage("Enter Price")
        } else if (!city) {
            valid = false;
            setMessage("Enter City")
        } else if (!postCode) {
            valid = false;
            setMessage("Enter Post Code")
        } else if (!country) {
            valid = false;
            setMessage("Enter Country")
        }
        return valid
    }

    const doAddRoomData = () => {
        const validFormData = validForm()
        const addRoomData = { rname, address, phone, price, city, postCode, country }

        if (validFormData) {
            let localStorageData = localStorage.getItem('addRoomInfo');
            if (localStorageData) {
                localStorageData = JSON.parse(localStorageData);
                localStorageData.push(addRoomData);
                localStorage.setItem('addRoomInfo', JSON.stringify(localStorageData));
            } else {
                localStorage.setItem('addRoomInfo', JSON.stringify([addRoomData]));
            }
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
                                <input type="text" id="rname" className="floatLabel" name="rname" value={rname} onChange={(e) => setRname(e.target.value)} />
                            </div>
                            <div className="controls">
                                <label for="address">Address</label>
                                <input type="text" id="address" className="floatLabel" name="address" value={address} onChange={(e) => setAddress(e.target.value)} />
                            </div>
                            <div className="controls">
                                <label for="phone">Phone</label>
                                <input type="tel" id="phone" className="floatLabel" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                            </div>
                            <div className="controls">
                                <label for="price">Price</label>
                                <input type="number" id="price" className="floatLabel" name="price" value={price} onChange={(e) => setPrice(e.target.value)} />
                            </div>
                            <div className="grid">
                                <div className="col-2-3">
                                    <div className="controls">
                                        <label for="city">City</label>
                                        <input type="text" id="city" className="floatLabel" name="city" value={city} onChange={(e) => setCity(e.target.value)} />
                                    </div>
                                </div>
                                <div className="col-1-3">
                                    <div className="controls">
                                        <label for="post-code">Post Code</label>
                                        <input type="text" id="post-code" className="floatLabel" name="post-code" value={postCode} onChange={(e) => setPostCode(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="controls">
                                <label for="country">Country</label>
                                <input type="text" id="country" className="floatLabel" name="country" value={country} onChange={(e) => setCountry(e.target.value)} />
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