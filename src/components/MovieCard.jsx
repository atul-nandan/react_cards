import React from 'react'
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";

const MovieCard = ({ image, name, description, rating }) => {
  return (
    <div className="p-4 shadow rounded max-w-80 min-w-60 bg-cyan-100 m-2">
      <div className='h-[250] overflow-hidden'>
        <img src={image} alt={name} className=" w-[280px] h-[280px] object-cover m-auto rounded" />
      </div>
      <h2 className="mt-2 text-xl font-bold">{name}</h2>
      <p className="text-gray-600">{description}</p>
      <div className='flex justify-between items-center'>
        <div className='flex ' >
          <p><FaStar /></p>
          <p><FaStar /></p>
          <p><FaStar /></p>
          <p><FaRegStarHalfStroke /></p>
          <p><FaRegStar /></p>
        </div>
        <p className="font-medium mt-1">Rating: {rating}</p>
      </div>
    </div>
  )
}

export default MovieCard
