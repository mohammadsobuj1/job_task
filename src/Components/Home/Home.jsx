import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';




const Home = () => {
    const data = useLoaderData()

    
    return (
        <>
            <h1 className='text-4xl font-semibold m-6 bg-slate-600 p-6 rounded shadow-lg text-center text-orange-400'>Here's Our All Movies</h1>
            <div className='grid grid-cols-3 gap-6 w-[90%] mx-auto'>
                {
                    data.map(movie =>


                   
                        <div key={movie.show.id} className="card bg-gray-300 shadow-xl">
                            <figure><img src={movie?.show.image.medium} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Show Name : {movie?.show.name}</h2>
                                <div className="flex justify-between font-semibold">
                                    <p>Movie Type : {movie?.show.type}</p>
                                    <p>Language : {movie?.show.language}</p>

                                </div>
                                <div className="card-actions justify-center">
                                 <Link to={`detalie/${movie?.show.id}`}>   <button className="btn btn-primary">Buy Now</button> </Link>
                                </div>
                            </div>
                        </div>

                    )
                }

            </div>

        </>
    );
};

export default Home;