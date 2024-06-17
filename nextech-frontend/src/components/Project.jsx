import React, { useEffect, useRef } from 'react'
import { Progress, Table } from 'antd';
import { CiEdit } from "react-icons/ci";
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { AddTask, DeleteModel, EditProject, EditTask } from "./Models"
import axios from 'axios';

import Chart from "chart.js/auto"


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
    dataIndex: 'asignedShow',
    key: 'asigned',
  },
  {
    title: 'DeadLine',
    dataIndex: 'deadLine',
    key: 'deadLine',
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

  const { projectId } = useParams();


  // Models Open useState

  const [deleteModel, setDeleteModel] = useState(false);
  const [projectEdit, setProjectEdit] = useState(false);
  const [taksEdit, setTeaskEdit] = useState(false);
  const [addtask, setAddtask] = useState(false);

  // Models Colse Functions:-


  const HendleDeleteClose = () => {
    setDeleteModel(false);
  }
  const HandleProjectEditClose = () => {
    setProjectEdit(false);
  }
  const HandleTaskEditClose = () => {
    setTeaskEdit(false);
  }
  const HandleTaskAddClose = () => {
    setAddtask(false);
  }

  // ---------------------------tasks-------------------------------------------

  const [tasks, setTasks] = useState(null);

  // fatching tasks from backend:-


  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/protasks/${projectId}`)
      .then((req, res) => {
        setTasks(req.data);
      })
      .catch((e) => {
        console.log(e)
      })


  }, [])

  const [d, setD] = useState("");

  // setting/mapping backend data to prefered table schema :-

  useEffect(() => {
    if (tasks) {
      const mappedTasks = tasks.tasks.map((task) => {
        const da = new Date(task.TaskDeadLine);
        return {
          key: task._id,
          name: task.TaskName,
          status: task.taskStatus,
          asigned: task.assignedTo.map(m => {
            return m.name
          }),
          asignedShow: task.assignedTo.map((m, i) => {
            return task.assignedTo.length != i + 1 ? m.name + "," : m.name
          }),
          asignedId: task.assignedTo.map(m => {
            return m._id;
          }),
          deadLine: da.toLocaleString(),
          description: task.TaskDiscription,
        };
      });

      setD(mappedTasks);
    }
  }, [tasks])


  // Task table Edit Click Functionality:-

  const RowClicked = (record) => {
    console.log(record.asignedId)
    setFormData({
      name: record.name,
      status: 'done',
      asigned: record.asigned,
      deadLine: record.deadLine,
      description: record.description,
      asignedId: record.asignedId,
      _id: record.key,
      project: projectId

    });
    setTeaskEdit(true);
  }

  // setting from data to pass to edit task model as prop:-


  const [formData, setFormData] = useState({
    key: '',
    name: '',
    status: "Done",
    asigned: '',
    deadLine: "",
    description: '',
    asignedId: ""
  })



  const [ProjectData, setProjectData] = useState();

  useEffect(() => {
    const fatchProject = async () => {
      await axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/admin/projectinfo/${projectId}`)
        .then((req, res) => {
          setProjectData(req.data);
        })
        .catch((e) => {
          console.log(e);
        })
    }
    fatchProject();
  }, [])

  console.log(tasks)



  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const sss=Math.round(ProjectData?.percentageDone);
  const fff=100-Math.round(ProjectData?.percentageDone);


  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy()
    }
    const myChartRef = chartRef.current.getContext('2d');

    chartInstance.current = new Chart(myChartRef, {
      type: "pie",
      data: {
        labels: ["Compleated Tasks", "Panding Tasks"],
        datasets: [{
          data: [sss,fff],
          backgroundColor: [
            'rgb(255,99,132)',
            'rgb(44,162,235)'
          ]
        }
        ]
      }
    })

    return()=>{
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }
    }
  },[ProjectData])

  console.log(ProjectData);





  const ProjectDeadLineDate = new Date(ProjectData?.ProjectDeadLine);
  return (
    <div className='flex flex-col'>
      <div className='flex flex-col justify-start items-start gap-7 '>
        <div>
          <h1 className='text-[2rem]'>{ProjectData?.Projectname}</h1>
        </div>
        <div className='text-start'>
          <p>
            {ProjectData?.ProjectDiscription}
          </p>
        </div>
        <div className='flex flex-col gap-1'>
          <h2 className='text-[1.2rem] font-semibold'>DeadLine:-</h2>
          <p className='text-start'>{ProjectDeadLineDate.toLocaleString()}</p>
        </div>
        <div className='w-full flex flex-col items-start gap-4'>
          <h1 className='text-[1.3rem]'>Tasks</h1>
          <Table
            className='w-full'
            columns={columns}
            onRow={(record) => ({
              onClick: () => RowClicked(record)
            })}
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

          <div className='flex text-white gap-4 self-end'>
            <button onClick={() => {
              setAddtask(true)
            }} className='px-5 py-2 rounded-full bg-[#3E65D3] flex items-center gap-2'> Add Task <CiEdit /></button>

          </div>
        </div>

        {/* <div className='w-full flex justify-around h-fit '>
          <div className='flex w-[50%] flex-col gap-4'>
            <h1 className='text-[1.3rem]'>Team:</h1>
            <Table dataSource={TeamData} columns={TeamColumns} />
          </div>

        </div> */}
        <div className='w-full flex justify-around h-fit '>
          <div className='flex w-[50%] flex-col gap-4'>
            <h1 className='text-[1.3rem]'>Task Status:</h1>
            <canvas ref={chartRef} style={{ width: "300px", height: "200px" }} />
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

        <EditProject mod={HandleProjectEditClose} data={ProjectData} />
        <style>
          {`body{ overflow:hidden; }`}
        </style>
      </>
      }
      {taksEdit && <>

        <EditTask mod={HandleTaskEditClose} formData={formData} />
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
      {addtask &&
        <>

          <AddTask mod={HandleTaskAddClose} formData={{ project: projectId }} />
          <style>
            {`body{ overflow:hidden; }`}
          </style>
        </>
      }

    </div>
  )
}

export default Project