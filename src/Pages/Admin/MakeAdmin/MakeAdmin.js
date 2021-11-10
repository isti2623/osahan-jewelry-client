import React, { useState } from 'react';
import { FormControl, InputGroup, Button } from 'react-bootstrap';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        e.preventDefault();
    }
    return (
        <div>
            <h2>Make Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <InputGroup className="mb-3 w-25 my-5 ms-5">
                    <FormControl
                        type="email"
                        placeholder="email"
                        onBlur={handleOnBlur}
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <Button variant="outline-secondary">
                        Make Admin
                    </Button>
                </InputGroup>
            </form>
        </div>
    );
};

export default MakeAdmin;