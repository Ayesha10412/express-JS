import { useLoaderData } from 'react-router-dom';

const Phone = () => {
    const phone = useLoaderData();
    console.log(phone)
    return (
        <div>
            <h2>{phone.name}</h2>
            <p>{phone.description}</p>
            <img src={phone.image} alt="" />
            <p>Price: {phone.price}</p>
        </div>
    );
};

export default Phone;