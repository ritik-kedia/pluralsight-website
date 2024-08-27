import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';

const CoursePreview = () => {
    const { id } = useParams();

    const playlist = {
        java: [
            "Introduction to Java",
            "Java Basics",
            "Object-Oriented Programming",
            "Advanced Java",
        ],
        python: [
            "Introduction to Python",
            "Data Science Basics",
            "Pandas and Numpy",
            "Machine Learning with Python",
        ],
        react: [
            "Introduction to React",
            "React Components",
            "State and Props",
            "React Hooks",
        ],
        node: [
            "Introduction to Node.js",
            "Express Basics",
            "Working with Databases",
            "Advanced Node.js",
        ],
    };

    const [autoplay, setAutoplay] = useState(true);

    return (
        <>
            <Header />
            <div className="container mx-auto mt-10 flex text-white">
                <div className="w-1/3 bg-gray-800 p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold mb-4">Playlist</h2>
                    <ul className="space-y-4">
                        {playlist[id].map((video, index) => (
                            <li key={index} className="py-2 px-4 bg-gray-700 rounded-lg shadow-sm">{video}</li>
                        ))}
                    </ul>
                </div>

                <div className="w-2/3 p-6 ml-4">
                    <h2 className="text-xl text-black font-bold">Course Preview - {id}</h2>
                    <div className="rounded-xl overflow-hidden ">
                        <iframe width="700" height="400" src={`https://www.youtube.com/embed/ufxDReb7oIk?si=QBMnmr_05E6eSTxn&autoplay=${autoplay ? '1' : '0'}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen autoFocus></iframe>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CoursePreview;
