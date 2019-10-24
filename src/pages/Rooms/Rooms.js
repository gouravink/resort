import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../../components/Hero'
import Banner from '../../components/banner';
import AddRoom from '../../pages/Rooms/addRoom';
import ShowRooms from '../../pages/Rooms/showRooms';
import './rooms.css'

const Rooms = (props) => {
    const [view, setView] = useState(false)
    const addRoom = () => {
        setView(true)
    }

    return (
        <Fragment>
            {view ?
                <div>
                    <AddRoom />
                    <Hero className="roomsHero">
                        <Banner title="luxurious rooms" subtitle="deluxe room satrting at 2000">
                            <Link to="/room" className="btn-primary">Our Rooms</Link>
                        </Banner>
                    </Hero>
                </div> :
                <div>
                    <Hero className="roomsHero">
                        <Banner title="luxurious rooms" subtitle="deluxe room satrting at 2000">
                            <Link to="/room" className="btn-primary">Our Rooms</Link>
                        </Banner>
                    </Hero>
                </div>
            }
            <div className="room-wrapper row">
                <div className="col-md-12 col-sm-12 col-lg-12 p-4">
                    <div className="col-md-8 col-sm-8 col-lg-8 float-left d-inline-block">
                        <h6 className="">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</h6>
                    </div>
                    <div className="col-md-4 col-sm-4 col-lg-4 float-left d-inline-block">
                        <button type="button" className="btn btn-danger float-right" onClick={addRoom}>Add Room</button>
                    </div>
                </div>
            </div>
            <ShowRooms />

        </Fragment>
    );
}


export default Rooms