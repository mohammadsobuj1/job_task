import { Rating } from '@smastrom/react-rating';
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const MovieDetailes = () => {


    const detaile = useLoaderData()
    const { id, network, name, premiered, runtime, type, status, genres, language, rating, image, summary } = detaile
    const bookingHandaler = (event) => {
        event.preventDefault()




        const exsist = localStorage.getItem('movies-data')
        const localId = JSON.parse(exsist)

    
        if (localId?.id === id) {

            return alert('add ache')
        }
        else if (localId?.id !== id) {
            const data = { name, premiered, status, language, type, id }
            localStorage.setItem('movies-data', JSON.stringify(data))

        }



    }
    return (
        <>
            <h1 className='text-5xl uppercase font-bold m-6 bg-slate-600 p-6 rounded shadow-lg text-center text-orange-400'>BOOK you tiket here</h1>
            <div className="hero min-h-screen bg-gray-300">
                <div className="hero-content flex-col lg:flex-row gap-10">
                    <img src={image.original} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Name: {name}</h1>
                        <p className="py-6 font-semibold text-gray-600">{summary}</p>
                        <div className="grid grid-cols-3 justify-center my-5">
                            <p className="py-6">Language : {language}</p>
                            <p > rating : <span className='text-orange-400 font-bold text-xl'>{rating?.average}</span></p>
                            <p className="py-6">Runtime : {runtime}</p>
                            <p > Genres : <span className='text-orange-400 font-bold text-xl'>{genres[0]}</span></p>
                            <p > Country : <span className='text-orange-400 font-bold text-xl'

                            >{network.country?.name}</span></p>
                            <p > Status : <span className='text-orange-400 font-bold text-xl'>{status}</span></p>
                        </div>


                        {/* Open the modal using ID.showModal() method */}


                        <button className="btn btn-primary" onClick={() => window.my_modal_5.showModal()}>BOOK NOW</button>
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">

                            <form method="dialog" className="modal-box">
                                <h1 className='text-xl uppercase font-semibold  bg-slate-600 p-3 my-3 rounded shadow-lg text-center text-orange-400'>Buy Your Tiket Now</h1>

                                <div className=" grid grid-cols-2 gap-4">
                                    <p>
                                        <span className='font-bold text-gray-500 mt-2'>  Name :

                                            <input type="text" name='name' defaultValue={name} placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                                        </span>

                                    </p>
                                    <p>
                                        <span className='font-bold text-gray-500 mt-2'>  Type :

                                            <input type="text" name='genres' defaultValue={type} placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />

                                        </span>

                                    </p>
                                    <p>
                                        <span className='font-bold text-gray-500 mt-2'>  Premiered :
                                            <input type="text" name='rating' defaultValue={premiered} placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />

                                        </span>

                                    </p>
                                    <p>
                                        <span className='font-bold text-gray-500 mt-2'>  Language :

                                            <input type="text" name='language' defaultValue={language} placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                                        </span>

                                    </p>

                                    <p>
                                        <span className='font-bold text-gray-500 mt-2'>  Status :

                                            <input type="text" name='status' defaultValue={status} placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />

                                        </span>

                                    </p>

                                </div>



                                <div className="modal-action">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button onClick={bookingHandaler} className='btn btn-success btn-sm'>Buy Tiket</button>
                                    <button className='btn btn-success btn-sm'>Close</button>

                                </div>

                            </form>
                        </dialog>
                    </div>
                </div>
            </div>

        </>
    );
};

export default MovieDetailes;