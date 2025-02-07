import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Phone from './Phone';

const Phones = () => {
    const phones = useLoaderData();
    console.log(phones);
    return (
        <div>
            <h2>All Phones: {phones.length} </h2>
            {
                phones.map(phone=><li key={phone.id}>
                    <Link to={`/phone/${phone.id}`} >{phone.name} </Link>
                    </li>)
            }
        </div>
    );
};

export default Phones;