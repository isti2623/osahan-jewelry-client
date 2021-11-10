import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth();
    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/myOrders/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setEvents(data));
    }, [user.email, events]);




    //Delete Part

    const [orders, setOrders] = useState([]);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/myOrders')
            .then(res => res.json())
            .then(data => {
                setProducts(data);

            })
    }, [products]);

    //DELETE AN Products
    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/myOrders/${id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');

                        const remainingProducts = orders.filter(order => order._id !== id);

                        setOrders(remainingProducts);
                    }
                })
        }

    }
    return (
        <div className='container'>
            <h1 className='text-center my-3'>My Orders: {events?.length}</h1>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>

                    </tr>
                </thead>
                {events?.map((pd, index) => (
                    <tbody>
                        <tr>
                            <td>{index}</td>
                            <td>{pd?.name}</td>
                            <td>{pd?.email}</td>
                            <td>{pd?.phone}</td>
                            <td>{pd?.address}</td>
                            <td><button onClick={() => handleDeleteUser(pd._id)} className="btn btn-danger m-2">Cancel</button></td>

                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    );
};
export default MyOrders;