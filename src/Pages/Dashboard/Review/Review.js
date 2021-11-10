import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const Review = () => {
    const { user } = useAuth();
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {

        data.email = user.email;
        data.name = user.displayName;

        fetch("http://localhost:5000/addReviews", {
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

            <h2 className='custom-h1 text-center mb-3'>Add Your Review</h2>
            <div className='form-part'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* register your input into the hook by invoking the "register" function */}
                    <input disabled required className='p-2 m-2' defaultValue={user.displayName} type='text' placeholder='name' {...register("name")} />
                    <br />

                    {/* include validation with required or other standard HTML validation rules */}
                    <input disabled required className='p-2 m-2' defaultValue={user.email} type='email'  {...register("email")} />
                    <br />
                    <textarea required className='p-2 m-2' type='text' placeholder='description' {...register("desc")} />
                    <br />
                    <input required className='p-2 m-2' type='number' placeholder='rating within 1 to 5' {...register("rating")} />
                    <br />
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}
                    <br />
                    <input className='btn btn-warning ms-2' value='Add Review' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Review;