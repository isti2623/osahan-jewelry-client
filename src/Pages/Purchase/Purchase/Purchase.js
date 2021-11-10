import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import Navigation from '../../Shared/Navigation';

const Purchase = () => {
    /*  form Part */

    const { user } = useAuth();
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {

        data.email = user.email;
        data.name = user.displayName;




        fetch("http://localhost:5000/orders", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    alert('added successfully');
                    reset();
                }
            });
    };
    return (
        <div>
            <Navigation></Navigation>
            <h2>Purchase</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input disabled required className='p-2 m-2' defaultValue={user.displayName} placeholder='name' {...register("name")} />
                <br />
                <input disabled required className='p-2 m-2' defaultValue={user.email} placeholder='email' {...register("email")} />
                <br />



                {/* include validation with required or other standard HTML validation rules */}
                <input required className='p-2 m-2' placeholder='phone number' type='number' {...register("phone")} />
                <br />
                <input required className='p-2 m-2' placeholder='Address' type='text' {...register("address")} />
                <br />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}
                <br />
                <input className='className="btn btn-warning fw-bold mt-3"' value='PLACE ORDER' type="submit" />
            </form>
        </div>
    );
};

export default Purchase;