import React from 'react'
import { Link } from 'react-router-dom';
import Tiles from '../../components/title';
import './showRoom.css';

const ShowRooms = () => {

    const addRoomInfoData = JSON.parse(localStorage.getItem('addRoomInfo'));
    return (
        <section className="services showrooms-body">
            <Tiles title='Rooms for You' />
            <div className="services-center">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-lg-12">
                        {addRoomInfoData && addRoomInfoData.map(e => {
                            return (
                                <div className="col-md-4 float-left room-sec">
                                    <h4>{e.rname}</h4>
                                    <p>Address : {e.address}</p>
                                    <small>Phone : {e.phone}</small>
                                    <h5>Price : {e.price}</h5>
                                    <p>City : {e.city}</p>
                                    <p>Pin Code : {e.postCode}</p>
                                    <p>Country : {e.country}</p>
                                    <Link to={'/single-room'} className="viewRoom">View Room</Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ShowRooms 