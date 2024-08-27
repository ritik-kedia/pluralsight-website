import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../components/Header';

const CourseDetails = () => {
    const { id } = useParams();

    const courseDetails = {
        java: {
            price: "$100",
            duration: "30 hours",
            name: "Java Programming",
            description: "Master the basics of Java programming and object-oriented principles in this comprehensive course.",
            banner: "https://picsum.photos/seed/java-banner/1200/400",
            image: "https://picsum.photos/seed/java/300/200"
        },
        python: {
            price: "$120",
            duration: "35 hours",
            name: "Python for Data Science",
            description: "Learn Python programming with a focus on data science and analytics, including libraries like Pandas and NumPy.",
            banner: "https://picsum.photos/seed/python-banner/1200/400",
            image: "https://picsum.photos/seed/python/300/200"
        },
        react: {
            price: "$110",
            duration: "25 hours",
            name: "React Development",
            description: "Develop dynamic web applications using React, one of the most popular JavaScript libraries.",
            banner: "https://picsum.photos/seed/react-banner/1200/400",
            image: "https://picsum.photos/seed/react/300/200"
        },
        node: {
            price: "$90",
            duration: "20 hours",
            name: "Node.js Mastery",
            description: "Build scalable network applications using Node.js, focusing on asynchronous programming and REST APIs.",
            banner: "https://picsum.photos/seed/node-banner/1200/400",
            image: "https://picsum.photos/seed/node/300/200"
        },
    };

    const course = courseDetails[id];

    return (
        <>
            <Header />

            <div className="relative">
                <img
                    src={course.banner}
                    alt={`${course.name} banner`}
                    className="w-full h-64 object-cover rounded-b-lg"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-5xl font-extrabold text-white">{course.name}</h1>
                </div>
            </div>

            <div className="container mx-auto mt-12 px-4 text-white">
                <div className="bg-gray-900 p-8 rounded-xl shadow-lg flex flex-col md:flex-row items-center">
                    <img
                        src={course.image}
                        alt={course.name}
                        className="rounded-lg w-full md:w-1/3 object-cover mb-6 md:mb-0 md:mr-8"
                    />
                    <div className="flex-grow">
                        <p className="text-xl mb-4"><span className="font-bold">Price:</span> {course.price}</p>
                        <p className="text-xl mb-4"><span className="font-bold">Duration:</span> {course.duration}</p>
                        <p className="text-lg mb-6"><span className="font-bold">Description:</span> {course.description}</p>
                        <Link
                            to={`/course-preview/${id}`}
                            className="text-white bg-blue-500 hover:bg-blue-700 px-6 py-3 rounded transition-all text-lg font-semibold"
                        >
                            Preview Course
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CourseDetails;
