import React, { useEffect, useState } from 'react'
import { BiSave } from 'react-icons/bi';
import { MdOutlineCancel } from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';
import axios, { all } from "axios";
import { Table } from 'antd';
import { CiEdit } from 'react-icons/ci';
import { AddNewTask } from './Models';
import { useNavigate } from 'react-router-dom';




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

const Addproject = () => {

    const navigate=useNavigate();

    const [ProjectName, setProjectname] = useState("");
    const [deadline, setDeadline] = useState("");
    const [ProjectDiscriptaion, setProjectDiscriptaion] = useState("");
    const [pills, setPills] = useState(new Set());

    const [suggestion, setSuggestion] = useState([]);
    const [assiengedTo, setAssiengedTo] = useState("");
    const [seclectedEmpId, setSeclectedEmpId] = useState(new Set());



    const removePill = (pill) => {
        const newPills = Array.from(pills).filter(i => i !== pill);
        setPills(newPills);
    }




    const [allemployees, setAllemployees] = useState([]);

    useEffect(() => {

        const fetchEmployee = async () => {

            await axios.get(`${process.env.REACT_APP_BASE_URL}/allemployees`)
                .then((req, res) => {
                    setAllemployees(req.data);
                })
                .catch((e) => {
                    console.log(e);
                })
        };
        fetchEmployee();

    }, [])



    useEffect(() => {
        if (allemployees.length !== 0) {

            const filteredObj = allemployees?.filter(item => Array.from(pills).includes(item.name));

            const arr = filteredObj.map(i => i._id);
            console.log(arr)

            const newset = new Set(arr);

            if (arr) setSeclectedEmpId(newset)
            console.log(filteredObj)
        }


    }, [pills])

    console.log(seclectedEmpId);





    useEffect(() => {
        const fetchEmployee = async () => {
            if (assiengedTo.trim() === "") {
                setSuggestion([]);
                return;
            }
            axios.get("${process.env.REACT_APP_BASE_URL}/allemployees")
                .then((req, res) => {
                    setSuggestion(req.data);
                })
                .catch((e) => {
                    console.log(e);
                })
        };
        fetchEmployee();
    }, [assiengedTo])


    const updatepPills = (user) => {
        const newset = new Set(pills);
        newset.add(user);
        setPills(newset);
    }

    const updatepPillsId = (userId) => {
        const newset = new Set(seclectedEmpId);
        newset.add(userId);
        setSeclectedEmpId(newset);
    }

    const handleUpdate = () => {
        console.log("asfas");
        axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/admin/createProject`, {
            Projectname:ProjectName,
            ProjectMambers:Array.from(seclectedEmpId),
            ProjectDiscription:ProjectDiscriptaion,
            ProjectDeadLine:deadline,
            ProjectStatus:"done",
            tasks:tasks
        }).then(() => {
            console.log("done");
            navigate("/projects");
        }).catch((e) => {
            console.log(e);
        })
    }


    

    // console.log(status);


    const [AddNewtask,setAddNewtask]=useState(false);

    const handlenewtaskpop=()=>{
        setAddNewtask(false);
    }

    const [tasks, setTasks] = useState([]);

    const addTask = (newTask) => {
        setTasks([...tasks, newTask]);
    };

    // addtasks({hi:"sasa"});


    const hh={
        ProjectName,
        deadline,
        seclectedEmpId,
        ...tasks
    }

    console.log(hh);



    const [d, setD] = useState("");
    useEffect(() => {
        if (tasks) {
          const mappedTasks = tasks.map((task) => {
            const da = new Date(task.TaskDeadLine);
            return {
              key: task._id,
              name: task.TaskName,
              status: task.taskStatus,
              asigned: task.assignedTo.map(m => {
                return m.name
              }),
              asignedShow: task.assignedToName?.map((m, i) => {
                return task.assignedTo.length != i + 1 ? m + "," : m
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


    return (
        // <div
        //   className="h-full w-full flex justify-center items-center fixed top-0 left-0 z-30"
        //   onClick={() => {
        //     mod();
        //   }}
        //   style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
        // >
        <>
        <div
            className="bg-white w-[90%] xxxs:w-[85%] md:w-[100%] max-h-[90vh] overflow-y-auto px-4 py-8 custom-shadow rounded-2xl flex gap-1  items-center flex-col modelAnimation"
            onClick={(e) => e.stopPropagation()}
        >
            <div className="flex justify-between w-[90%] items-center relative">
                <h1 className="lg:text-4xl md:text-3xl text-2xl font-[500] text-[#001063]">
                    Create New Project
                </h1>
                <RxCross2
                    className="xxs:static sm:absolute text-2xl sm:top-1 sm:float-right cursor-pointer relative top-0 right-[-1rem]"
                    onClick={() => {
                        navigate("/projects");;
                    }}
                />
            </div>
            <div className="w-[100%] flex flex-col md:flex-row border-none h-fit items-center md:items-start mt-4">
                <div className="w-[90%] md:w-[50%] flex flex-col justify-center items-center gap-1 xxxs:gap-6">
                    <div className="w-full md:w-[80%]">
                        <label
                            htmlFor="message"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Project Name
                        </label>
                        <textarea
                            name="message"
                            value={ProjectName}
                            onChange={(e) => { setProjectname(e.target.value) }}
                            className=" text-[0.9rem] h-[3rem]  resize-none border border-gray-300 rounded-md px-4 py-3 block w-full focus:outline-none focus:ring-[#001063] focus:border-[#001063] "
                        ></textarea>
                    </div>

                </div>
                <div className="w-[90%] md:w-[50%] flex flex-col gap-6 mt-4 md:mt-0">
                    <div className="w-full md:w-[80%]">
                        <label
                            htmlFor="message"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Deadline
                        </label>
                        <input
                            type="date"
                            name="message"
                            value={deadline}
                            onChange={(e) => { setDeadline(e.target.value) }}
                            rows="2"
                            className=" text-[0.9rem] h-[3rem] resize-none border border-gray-300 rounded-md px-4 py-3 block w-full focus:outline-none focus:ring-[#001063] focus:border-[#001063] "
                        />
                    </div>
                    {/* <div class="w-full md:w-[80%]">
                <label for="message" className="block text-gray-700 text-sm font-bold mb-2">Country</label>
                <textarea name="message" rows='2' className=" text-[0.9rem]  resize-none border border-gray-300 rounded-md px-4 py-2 block w-full focus:outline-none focus:ring-[#001063] focus:border-[#001063] "></textarea>
              </div> */}
                </div>
            </div>

            <div className="w-[100%] flex flex-col md:flex-row border-none h-fit items-center md:items-start mt-4">
                <div className="w-[90%] md:w-[50%] flex flex-col gap-6 mt-4 md:mt-0  items-center">
                    {/* <div className="w-full md:w-[80%]">

                        <label htmlFor="status" className="block text-gray-700 text-sm font-bold mb-2">Status</label>
                        <select
                            name="status"
                            rows="2"
                            value={status}
                            id="EduGrade"
                            onChange={(e) => {
                                setStatus(e.target.value)
                            }}
                            className=" text-[0.9rem] h-[3rem] w-full  resize-none border border-gray-300 rounded-md px-4 py-2 block focus:outline-none focus:ring-[#001063] focus:border-[#001063] "
                        >
                            <option value="Pandind">Panding</option>
                            <option value="Done">Done</option>

                        </select>
                    </div> */}

                </div>
                <div className="w-[90%] md:w-[50%] flex flex-col gap-6 mt-4 md:mt-0">
                    {/* <div className="w-full md:w-[80%]">
                        <label
                            htmlFor="message"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Deadline
                        </label>
                        <input
                            type="date"
                            name="message"
                            value={deadline}
                            onChange={(e) => { setDeadline(e.target.value) }}
                            rows="2"
                            className=" text-[0.9rem] h-[3rem] resize-none border border-gray-300 rounded-md px-4 py-3 block w-full focus:outline-none focus:ring-[#001063] focus:border-[#001063] "
                        />
                    </div> */}
                    {/* <div class="w-full md:w-[80%]">
                <label for="message" className="block text-gray-700 text-sm font-bold mb-2">Country</label>
                <textarea name="message" rows='2' className=" text-[0.9rem]  resize-none border border-gray-300 rounded-md px-4 py-2 block w-full focus:outline-none focus:ring-[#001063] focus:border-[#001063] "></textarea>
              </div> */}
                </div>
            </div>

            <div className="w-[100%] flex flex-col md:flex-row border-none h-fit items-center md:items-start mt-4 ">
                <div className="w-[90%] md:w-[90%] flex flex-col gap-6 mt-4 md:mt-0 items-center">
                    <label htmlFor="" className=" block text-gray-700 text-sm font-bold mb-2">Mambers</label>
                    <div className="w-[90%] border-[#001063] border-[0.5px] px-2 py-2 relative rounded-md flex gap-3 items-center">
                        {Array.from(pills).map((p, i) => {
                            return (<span onClick={() => { removePill(p) }} className="px-3 flex py-2 bg-[#001063] items-center gap-2 relative text-white rounded-full">{p} <RxCross2 className="right-4" /></span>)
                        })}
                        <div>
                            <input type="text" className="outline-none" placeholder="Search for Employee ..." value={assiengedTo} onChange={(e) => { setAssiengedTo(e.target.value) }} />
                            <ul className="absolute top-9 text-white">
                                {suggestion.length !== 0 ? <ul className="bg-white w-fit text-black  border-[0.8px] rounded-2xl overflow-hidden">
                                    {suggestion?.map((employee) => (
                                        <li className="cursor-pointer p-2  hover:bg-slate-300" onClick={(e) => {
                                            setAssiengedTo("");
                                            updatepPills(employee.name);
                                            updatepPillsId(employee._id);

                                        }} key={employee._id}>{employee.name}</li>
                                    ))}
                                </ul> : <></>}
                            </ul>
                        </div>
                    </div>
                </div>

            </div>


            <div className='w-[89%] mt-10 flex flex-col items-start gap-4'>
                <h1 className='text-[1.3rem]'>Tasks</h1>
                <Table
                    className='w-full'
                    columns={columns}
                    // onRow={(record) => ({
                    //     onClick: () => RowClicked(record)
                    // })}
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
                        setAddNewtask(true)
                    }} className='px-5 py-2 rounded-full bg-[#3E65D3] flex items-center gap-2'> Add Task <CiEdit /></button>

                </div>
            </div>

            <div className="w-[89%] mt-4 md:mt-4">
                <label
                    htmlFor="message"
                    className="block text-gray-700 text-sm font-bold mb-2"
                >
                    Edit Description
                </label>
                <textarea
                    name="message"
                    rows="4"
                    value={ProjectDiscriptaion}
                    onChange={(e) => { setProjectDiscriptaion(e.target.value) }}
                    className=" resize-none border border-gray-300 rounded-md py-2 px-4 block w-full focus:outline-none focus:ring-[#001063] focus:border-[#001063] textarea"
                ></textarea>
            </div>






            







            <div className="flex gap-8 mt-8 px-16 w-full justify-center md:justify-end">
                <button
                    onClick={() => {
                        navigate("/projects");;
                    }}
                    className="hover:bg-[#001063] hover:text-white border-[1px] transition-all transition-1 border-[#001063] px-2 py-1 md:px-3 md:py-3 flex justify-center items-center text-[#001063] gap-[6px] rounded-xl  text-[12px]"
                >
                    <MdOutlineCancel size={20} /> Discard
                </button>
                <button
                    onClick={() => { handleUpdate() }}
                    className="bg-[#3E65D3]  px-2 py-1 md:px-3 md:py-3 flex justify-center items-center text-white gap-[6px] rounded-xl text-[12px] transition-colors "
                >
                    <BiSave size={20} /> Add Project
                </button>
            </div>
        </div>

        {AddNewtask &&
        <>

          <AddNewTask mod={handlenewtaskpop} tasks={tasks} addTask={addTask} />
          <style>
            {`body{ overflow:hidden; }`}
          </style>
        </>
      }
        </>
        // </div>
    )
}

export default Addproject