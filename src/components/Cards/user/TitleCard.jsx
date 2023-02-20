import React from 'react'

export default function TitleCard({ name }) {
    return (
        <>
            <div className="md:mb-5 bg-gray-800 text-white text-3xl h-44 items-center flex flex-row justify-around mt-16 md:mt-0" style={{
                backgroundImage: 'url("https://static.vecteezy.com/system/resources/thumbnails/002/155/612/small/abstract-light-diagonal-stripes-background-with-gradations-of-bright-blue-and-pink-free-vector.jpg")',
                backgroundRepeat: "no-repeat",
                backgroundSize:"cover"
            }}>
                <b><h2 className=''>{name}</h2></b>
            </div>
        </>
    );
}
