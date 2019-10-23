import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../../components/Hero'
import Banner from '../../components/banner';
import AddRoom from '../../pages/Rooms/addRoom';
import ShowRooms from '../../pages/Rooms/showRooms';

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
            <button type="button" className="btn btn-danger" onClick={addRoom}>Add Room</button>
            <ShowRooms />

        </Fragment>
    );
}


export default Rooms