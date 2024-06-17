import React, { useContext, useEffect, useState } from 'react'
import { Table } from 'antd';

import { UserContext } from "../context/UserContext"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';

const Payroll = () => {

    const [allemployee, setAllemployees] = useState([])

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            filters: [
                {
                    text: 'Joe',
                    value: 'Joe',
                },
                {
                    text: 'Jim',
                    value: 'Jim',
                },
                {
                    text: 'Submenu',
                    value: 'Submenu',
                    children: [
                        {
                            text: 'Green',
                            value: 'Green',
                        },
                        {
                            text: 'Black',
                            value: 'Black',
                        },
                    ],
                },
            ],
            // specify the condition of filtering result
            // here is that finding the name started with `value`
            onFilter: (value, record) => record.name.indexOf(value) === 0,
            sorter: (a, b) => a.name.length - b.name.length,
            sortDirections: ['descend'],
        },
        {
            title: 'Age',
            dataIndex: 'age',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.age - b.age,
        },
        {
            title: 'Address',
            dataIndex: 'address',
            filters: [
                {
                    text: 'London',
                    value: 'London',
                },
                {
                    text: 'New York',
                    value: 'New York',
                },
            ],
            onFilter: (value, record) => record.address.indexOf(value) === 0,
        },
        {
            title: 'Salary',
            dataIndex: 'salary'
        }
    ];

    const [d, setD] = useState("");

    // setting/mapping backend data to prefered table schema :-

    useEffect(() => {
        if (allemployee) {
            const mappedTasks = allemployee.map((task) => {
                const da = new Date(task.TaskDeadLine);
                return {
                    key: task._id,
                    name: task.name,
                    age: task.age,
                    address: task.address,
                    salary: task.salary,
                };
            });

            setD(mappedTasks);
        }
    }, [allemployee])

    console.log(d)







    useEffect(() => {

        const fetchEmployee = async () => {

            await axios.get(`${process.env.REACT_APP_BASE_URL}/employees`)
                .then((req, res) => {
                    setAllemployees(req.data);
                })
                .catch((e) => {
                    console.log(e);
                })
        };
        fetchEmployee();

    }, [])

    console.log(allemployee);
    const navigate=useNavigate()

    return (
        <div className=' flex-col h-[100vh] bg-white flex'>
            <h1 className='text-[2.3rem]'>Employee</h1>
            <Table className='w-full' columns={columns} dataSource={d} />
            <div className='flex absolute bottom-10 right-14 text-white gap-4 self-end'>
                <button onClick={() => {
                    navigate("/create")
                }} className='px-5 py-2 rounded-full text-[1.2rem] bg-[#3E65D3] flex items-center gap-2'> <b>Add Employee</b> <FaPlus /></button>

            </div>
        </div>
    )
}

export default Payroll