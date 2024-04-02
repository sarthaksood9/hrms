import { Table } from 'antd';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Atteandance = () => {
    const navigate=useNavigate();

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

      const data = [
        {
          key: '1',
          name: 'John Brown',
          post:"Manager",
          email:"sarthaksood9@gmail.com",
          attendance: "78%",
          address: 'New York No. 1 Lake Park',
        },
        {
          key: '1',
          name: 'John Brown',
          post:"Manager",
          email:"sarthaksood9@gmail.com",
          attendance: "78%",
          address: 'New York No. 1 Lake Park',
        },
        {
          key: '1',
          name: 'John Brown',
          post:"Manager",
          email:"sarthaksood9@gmail.com",
          attendance: "78%",
          address: 'New York No. 1 Lake Park',
        },
        {
          key: '1',
          name: 'John Brown',
          post:"Manager",
          email:"sarthaksood9@gmail.com",
          attendance: "78%",
          address: 'New York No. 1 Lake Park',
        },
        {
          key: '1',
          name: 'John Brown',
          post:"Manager",
          email:"sarthaksood9@gmail.com",
          attendance: "78%",
          address: 'New York No. 1 Lake Park',
        },
        {
          key: '1',
          name: 'John Brown',
          post:"Manager",
          email:"sarthaksood9@gmail.com",
          attendance: "78%",
          address: 'New York No. 1 Lake Park',
        },
        
      ];

      const handleRowClick = (record) => {
    
            navigate('/att');
      };
    return (
        

        <div>
            <h1 className='text-[2rem] font-semibold'>
                Attendance
            </h1>
            <Table className='cursor-pointer' columns={columns} onRow={(record) => ({ onClick: () => handleRowClick(record) })} dataSource={data} size="middle" />
        </div>
    )
}

export default Atteandance


