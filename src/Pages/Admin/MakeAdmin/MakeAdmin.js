import React, { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);


    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://infinite-beyond-84815.herokuapp.com/users', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setEmail('');
                    setSuccess(true);

                }
            })

        e.preventDefault()
    }
    return (
        <div>
            <h2>Make Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <input
                    type="email"
                    placeholder="email"
                    onBlur={handleOnBlur} />

                <Button type='submit' variant="danger">
                    Make Admin
                </Button>

            </form>

            {success && <Alert variant='success'>
                Admin Role Added Successfully
            </Alert>}
        </div>
    );
};

export default MakeAdmin;