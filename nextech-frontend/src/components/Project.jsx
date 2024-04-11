import React, { useEffect } from 'react'
import { Progress, Table } from 'antd';
import { CiEdit } from "react-icons/ci";
import { useState } from 'react';

import { DeleteModel, EditProject } from "./Models"
import axios from 'axios';


const columns = [
  {
    title: 'Task Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Asigned To',
    dataIndex: 'asigned',
    key: 'asigned',
  },
  {
    title: 'DeadLine',
    dataIndex: 'deadLine',
    key: 'deadLine',
  },

];



const data = [
  {
    key: 1,
    name: 'John Brown',
    status: "Done",
    asigned: "Sarthak Sood",
    deadLine: "12/09/2024",
    description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
  },
  {
    key: 2,
    name: 'Jim Green',
    status: "Done",
    asigned: 'London No. 1 Lake Park',
    deadLine: "12/09/2024",
    description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
  },

  {
    key: 3,
    name: 'Joe Black',
    status: "Done",
    asigned: 'Sydney No. 1 Lake Park',
    deadLine: "12/09/2024",
    description: 'My name is Joe Black, I am 32 years old, living in Sydney No. 1 Lake Park.',
  },
];

const TeamColumns = [
  {
    title: 'S.No ',
    dataIndex: 'sno',
    key: 'sno',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },

];

const TeamData = [
  {
    key: 1,
    sno: 1,
    name: "sarthak"
  },
  {
    key: 2,
    sno: 2,
    name: "saksham"
  },
  {
    key: 3,
    sno: 3,
    name: "mridul"
  }
]


const Project = () => {
  const [deleteModel, setDeleteModel] = useState(false);
  const [projectEdit, setProjectEdit] = useState(false);


  const HendleDeleteClose = () => {
    setDeleteModel(false);
  }
  const HandleProfileEditClose = () => {
    setProjectEdit(false);


  }

  const [tasks, setTasks] = useState(null);


  useEffect(() => {
    axios.get("http://localhost:4000/tasksforuser/660ad5d3c615642b362c3146")
      .then((req, res) => {
        setTasks(req.data);
        console.log(tasks.tasks);
      })
      .catch((e) => {
        console.log(e)
      })


  }, [])

  const [d,setD]=useState("")

 useEffect(()=>{
  if(tasks){
    const mappedTasks = tasks.tasks.map((task) => {
      const da=new Date(task.TaskDeadLine);
      return {
        key: task._id,
        name: task.TaskName,
        status: "Done",
        asigned: task.assignedTo.map(m => {
          return m.name
        }),
        deadLine: da.toLocaleString() ,
        description: task.TaskDiscription,
      };
    });
    console.log(mappedTasks);
    setD(mappedTasks);
  }
 },[tasks])

  



  // const mappedObject = Object.fromEntries(
  //   tasks.tasks.map(obj => [obj.TaskName, obj.project])
  // );

  // console.log(mappedObject);





  // console.log(d);
  return (
    <div className='flex flex-col'>
      <div className='flex flex-col justify-start items-start gap-7 '>
        <div>
          <h1 className='text-[2rem]'>Project Name</h1>
        </div>
        <div className='text-start'>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus culpa aspernatur similique expedita facere beatae odit? Dolores, modi dolor assumenda obcaecati asperiores corrupti fugiat est, esse ducimus facilis, dolorem provident.
          </p>
        </div>
        <div className='flex flex-col gap-1'>
          <h2 className='text-[1.2rem] font-semibold'>DeadLine:-</h2>
          <p className='text-start'>12/06/24</p>
        </div>
        <div className='w-full flex flex-col items-start gap-4'>
          <h1 className='text-[1.3rem]'>Tasks</h1>
          <Table
            className='w-full'
            columns={columns}
            expandable={{
              expandedRowRender: (record) => (
                <p
                  style={{
                    margin: 0,
                  }}
                >
                  {record.description}
                </p>
              ),
              rowExpandable: (record) => record.name !== 'Not Expandable',
            }}
            dataSource={d}
          />
        </div>

        <div className='w-full flex justify-around h-fit '>
          <div className='flex w-[50%] flex-col gap-4'>
            <h1 className='text-[1.3rem]'>Team:</h1>
            <Table dataSource={TeamData} columns={TeamColumns} />
          </div>

        </div>

      </div>
      <div className='flex text-white gap-4 self-end'>
        <button onClick={() => {
          setProjectEdit(true)
        }} className='px-5 py-2 rounded-full bg-[#3E65D3] flex items-center gap-2'> Edit <CiEdit /></button>
        <button className='border-red-600 rounded-full border-[1px] text-red-600 px-5 py-2' onClick={() => {
          setDeleteModel(true)
        }}>Delete Project</button>
      </div>

      {projectEdit && <>

        <EditProject mod={HandleProfileEditClose} />
        <style>
          {`body{ overflow:hidden; }`}
        </style>
      </>
      }

      {deleteModel &&
        <>

          <DeleteModel mod={HendleDeleteClose} />
          <style>
            {`body{ overflow:hidden; }`}
          </style>
        </>
      }

    </div>
  )
}

export default Project