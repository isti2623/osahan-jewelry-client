import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';


const ManageAllOrders = () => {
    const [order, setOrder] = useState([]);
    const [reload, setReload] = useState(true);

    useEffect(() => {
        fetch("https://infinite-beyond-84815.herokuapp.com/orders")
            .then((res) => res.json())
            .then((data) => {
                setReload(!reload)
                setOrder(data)
            });

    }, [reload]);

    //DELETE AN Products
    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://infinite-beyond-84815.herokuapp.com/orders/${id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');

                        const remainingProducts = order.filter(order => order._id !== id);

                        setOrder(remainingProducts);
                    }
                })
        }

    }

    function handleConfirm(id) {
        const proceed = window.confirm('Are you sure, you want to Shipped?');
        if (proceed) {
            const url = `https://infinite-beyond-84815.herokuapp.com/orders/${id}`
            fetch(url, {
                method: 'PUT',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount === 1) {
                        setReload(!reload);
                    }
                });
        }

    }
    return (
        <div className='container'>
            <h1 className='text-center my-3'>All Orders: {order?.length}</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Order Status</th>


                    </tr>
                </thead>
                {order?.map((pd, index) => (

                    <tbody>
                        <tr>
                            <td>{index}</td>
                            <td>{pd?.displayName}</td>
                            <td>{pd?.email}</td>
                            <td>{pd?.phone}</td>
                            <td>{pd?.address}</td>
                            <td>{pd?.status}</td>
                            <td> <button onClick={() => handleDeleteUser(pd._id)} className="btn btn-danger m-2">Cancel</button></td>
                            <td> <button onClick={() => handleConfirm(pd._id)} className="btn btn-danger m-2">Pending</button>
                            </td>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </div >
    );
};

export default ManageAllOrders;