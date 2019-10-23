import React from 'react'
import Tiles from '../../components/title';
import ServiceItem from '../../components/services-item';

const ShowRooms = () => {


    let addRoomInfoData = localStorage.getItem('addRoomInfo');
    const roomInfo = addRoomInfoData.map(data => data.rname);
    console.log(newArray);
    return (
        <section className="services">
            <Tiles title='Services' />
            <div className="services-center">
                <ServiceItem
                    title="Oyo Room"
                    info="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                />
            </div>
        </section>
    );
}

export default ShowRooms 