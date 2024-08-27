import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const Courses = () => {
    const courses = [
        { id: 'java', name: 'Java Programming', image: 'https://picsum.photos/seed/java/300/200' },
        { id: 'python', name: 'Python for Data Science', image: 'https://picsum.photos/seed/python/300/200' },
        { id: 'react', name: 'React Development', image: 'https://picsum.photos/seed/react/300/200' },
        { id: 'node', name: 'Node.js Mastery', image: 'https://picsum.photos/seed/node/300/200' },
    ];

    return (
        <>
            <Header />
            <div className="container mx-auto mt-12 px-4 text-white">
                <h1 className="text-5xl text-blue-950 font-extrabold mb-10 text-center">Explore Our Courses</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {courses.map((course) => (
                        <div key={course.id} className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
                            <img src={course.image} alt={course.name} className="rounded-t-lg h-40 w-full object-cover mb-4" />
                            <h2 className="text-2xl font-semibold mb-4 text-center">{course.name}</h2>
                            <div className="text-center">
                                <Link
                                    to={`/course-details/${course.id}`}
                                    className="text-blue-500 hover:text-blue-700 font-medium text-lg inline-block transition-colors"
                                >
                                    View all courses
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Courses;
