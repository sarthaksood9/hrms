import { Table } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Atteandance = () => {
    const navigate=useNavigate();
    const [allemployee, setAllemployees] = useState([])

    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
        },
        {
          title: 'Post',
          dataIndex: 'post',
        },
        {
          title: 'Email',
          dataIndex: 'email',
        },
        {
          title: 'Attendnce',
          dataIndex: 'attendance',
        },
        
      ];

      

      const handleRowClick = (record) => {
    
            navigate('/att');
      };

      const [d, setD] = useState("");

    // setting/mapping backend data to prefered table schema :-

    useEffect(() => {
        if (allemployee) {
            const mappedTasks = allemployee.map((task,i) => {
                const da = new Date(task.TaskDeadLine);
                return {
                    key: task._id,
                    name: task.name,
                    post: task.post,
                    email: task.email,
                    attendance: `${56+i*5}%`,
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
    return (


      
        

        <div>
            <h1 className='text-[2rem] font-semibold'>
                Attendance
            </h1>
            <Table className='cursor-pointer' columns={columns} onRow={(record) => ({ onClick: () => handleRowClick(record) })} dataSource={d} size="middle" />
        </div>
    )
}

export default Atteandance


