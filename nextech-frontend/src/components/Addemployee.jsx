import React, { useState } from 'react';

function EmployeeForm() {
    const [employee, setEmployee] = useState({
        name: '',
        password: '',
        email: '',
        phone: '',
        post: '',
        address: '',
        age: '',
        salary: ''
    });


    //   "name": "saksham",
    //     "password": "sart1234",
    //     "email": "sarthakssood0saj9k2s3s1k4@gmssail.com",
    //     "age": 20,
    //     "address": "address",
    //     "salary": "salary",
    //     "post": "manager",
    // "phone": 9518849040

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(employee);
        // Send the employee data to the backend API or perform any other action
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setEmployee((prevEmployee) => ({ ...prevEmployee, [name]: value }));
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-full mx-auto p-4 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
            <h2 className="text-2xl font-bold mb-4">Employee Information</h2>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block mb-2">
                        Name:
                        <input type="text" name="firstName" value={employee.firstName} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-50" />
                    </label>
                    <label className="block mb-2">
                        Email:
                        <input type="email" name="email" value={employee.email} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-50" />
                    </label>
                    <label className="block mb-2">
                    Post:
                        <input type="text" name="jobTitle" value={employee.jobTitle} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-50" />
                    </label>
                    <label className="block mb-2">
                        Salary:
                        <input type="number" name="salary" value={employee.salary} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-50" />
                    </label>
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label className="block mb-2">
                        Password:
                        <input type="text" name="lastName" value={employee.password} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-50" />
                    </label>
                    <label className="block mb-2">
                        Phone Number:
                        <input type="tel" name="phoneNumber" value={employee.phoneNumber} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-50" />
                    </label>
                    <label className="block mb-2">
                        Age:
                        <input type="number" name="hireDate" value={employee.age} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-50" />
                    </label>
                    <label className="block mb-2">
                        Address:
                        <textarea type="t" name="department" value={employee.address} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-50" />
                    </label>

                </div>
            </div>
            <button type="submit" className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">Submit</button>
        </form>
    );
}

export default EmployeeForm;