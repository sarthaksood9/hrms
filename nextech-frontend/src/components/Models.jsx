import { useEffect, useState } from "react";

import { RxCross2 } from "react-icons/rx"
import { BiSave } from "react-icons/bi"
import { MdOutlineCancel } from "react-icons/md"
import axios, { all } from "axios";


export function DeleteModel({ mod }) {
  const [loader, setLoader] = useState(false);


  return (
    <div
      className="h-full w-full flex justify-center items-center fixed top-0 left-0 z-30"
      onClick={() => {
        mod();
      }}
      style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
    >
      <div onClick={(e) => e.stopPropagation()} className="w-[80%] md:w-[60%] custon-shadow rounded-2xl px-10 bg-white flex flex-col p-2 xxxs:px-6 md:py-8 lg:py-12 py-8 gap-10  modelAnimation" >
        <div className="flex w-full justify-between h-fit items-center relative">
          <h1 className="md:text-3xl ss:text-2xl xxs:text-xl text-lg sm:mr-5 font-[500] text-[#ff054f]">
            Confirm Delete This Project Permanently!
          </h1>
          <RxCross2
            className="xxs:relative sm:absolute absolute text-[2rem] xxxs:text-[2rem] xxs:text-[4rem] ss:text-[50px] sm:text-[2rem] sm:top-[-1rem] sm:right-[-0.5rem] cursor-pointer top-[-1rem] xxs:top-[-1rem] md:top-[-1.8rem] right-[-0.5rem] xxs:right-0"
            onClick={() => {
              mod();
            }}
          />
        </div>
        <p className="text-[14px] text-[#8f8f8f] font-[500]">
          <b>NOTE-</b>&nbsp;Once your account is deletey can not be recovered
          back conform if you want to delete your account permanently
        </p>
        <div className="flex w-full gap-2 xs:gap-5">
          <button disabled={loader} onClick={() => { mod() }} className="border-[#ff054f] w-fit border-[1px] rounded-[7px] py-[3px] px-[10px] xxxs:px-[14px] text-[#ff054f] text-[11px] xxxs:text-[14px] md:text-[16px] font-[500] hover:bg-[#ff054f] hover:text-[white] transition-colors  ">
            Delete Premanently
          </button>
          <button
            onClick={() => {
              mod();
            }}
            className="border-[#ff054f] w-fit border-[1px] rounded-[7px] py-[3px] px-[10px] text-[#ff054f] text-[11px] xxxs:text-[14px] md:text-[16px] font-[500] hover:bg-[#ff054f] hover:text-[white] transition-colors "
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export function EditProject({ mod,data }) {

  const [projectname, setProjectname] = useState(data.Projectname);
  const [deadline, setDeadline] = useState(data.ProjectDeadLine);
  const [projectDiscriptaion, setProjectDiscriptaion] = useState(data.ProjectDiscription);

  console.log(data);
  return (
    <div
      className="h-full w-full flex justify-center items-center fixed top-0 left-0 z-30"
      onClick={() => {
        mod();
      }}
      style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
    >
      <div
        className="bg-white w-[90%] xxxs:w-[85%] md:w-[70%] max-h-[90vh] overflow-y-auto px-4 py-8 custom-shadow rounded-2xl flex gap-1  items-center flex-col modelAnimation"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between w-[90%] items-center relative">
          <h1 className="lg:text-4xl md:text-3xl text-2xl font-[500] text-[#001063]">
            Edit Project Information
          </h1>
          <RxCross2
            className="xxs:static sm:absolute text-2xl sm:top-1 sm:float-right cursor-pointer relative top-0 right-[-1rem]"
            onClick={() => {
              mod();
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
                value={projectname}
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
            value={projectDiscriptaion}
            onChange={(e) => { setProjectDiscriptaion(e.target.value) }}
            className=" resize-none border border-gray-300 rounded-md py-2 px-4 block w-full focus:outline-none focus:ring-[#001063] focus:border-[#001063] textarea"
          ></textarea>
        </div>

        <div className="flex gap-8 mt-8 px-16 w-full justify-center md:justify-end">
          <button
            onClick={() => {
              mod();
            }}
            className="hover:bg-[#001063] hover:text-white border-[1px] transition-all transition-1 border-[#001063] px-2 py-1 md:px-3 md:py-3 flex justify-center items-center text-[#001063] gap-[6px] rounded-xl  text-[12px]"
          >
            <MdOutlineCancel size={20} /> Discard
          </button>
          <button

            className="bg-[#001063]  px-2 py-1 md:px-3 md:py-3 flex justify-center items-center text-white gap-[6px] rounded-xl text-[12px] transition-colors "
          >
            <BiSave size={20} /> Save the changes
          </button>
        </div>
      </div>
    </div>
  )
}


export function EditTask({ mod, formData }) {
  let data = formData.deadLine.split(',')[0]?.split("/");
  let value = data[2];
  data[2] = data[0];
  data[0] = value;

  let time = formData?.deadLine?.split(',')[1].split(":").filter((i, idx) => idx < 2).join(":").trim();


  const [taskName, setProjectname] = useState(formData.name);
  const [deadline, setDeadline] = useState(data.join("-"));
  const [deadlineTime, setDeadlineTime] = useState(time);
  const [status, setStatus] = useState("Done");
  const [taskDiscriptaion, setProjectDiscriptaion] = useState(formData.description);
  const [pills, setPills] = useState(new Set(formData.asigned));

  const [suggestion, setSuggestion] = useState([]);
  const [assiengedTo, setAssiengedTo] = useState("");
  const [_id, set_id] = useState(formData._id);
  const [seclectedEmpId, setSeclectedEmpId] = useState(new Set(formData.asignedId));



  const removePill = (pill) => {
    const newPills = Array.from(pills).filter(i => i !== pill);
    setPills(newPills);
  }
  const removePillId = (pill) => {
    const newPills = Array.from(pills).filter(i => i !== pill);
    setSeclectedEmpId(newPills);
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
      axios.get(`${process.env.REACT_APP_BASE_URL}/allemployees`)
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
    axios.put(`${process.env.REACT_APP_BASE_URL}/tasks/${formData._id}`, {
      TaskName: taskName,
      project: formData.project,
      assignedTo: Array.from(seclectedEmpId),
      TaskDiscription: taskDiscriptaion,
      TaskDeadLine: new Date(deadline + ":" + deadlineTime).toISOString(),
      taskStatus: status
    }).then(() => {
      console.log("done");
      mod();
      window.location.href = window.location.href;
    }).catch((e) => {
      console.log(e);
    })
  }

  console.log(formData.project)

  





  return (
    <div
      className="h-full w-full flex justify-center items-center fixed top-0 left-0 z-30"
      onClick={() => {
        mod();
      }}
      style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
    >
      <div
        className="bg-white w-[90%] xxxs:w-[85%] md:w-[70%] max-h-[90vh] overflow-y-auto px-4 py-8 custom-shadow rounded-2xl flex gap-1  items-center flex-col modelAnimation"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between w-[90%] items-center relative">
          <h1 className="lg:text-4xl md:text-3xl text-2xl font-[500] text-[#001063]">
            Edit task Information
          </h1>
          <RxCross2
            className="xxs:static sm:absolute text-2xl sm:top-1 sm:float-right cursor-pointer relative top-0 right-[-1rem]"
            onClick={() => {
              mod();
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
                Task Name
              </label>
              <textarea
                name="message"
                value={taskName}
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
                type="time"
                name="message"
                value={deadlineTime}
                onChange={(e) => { setDeadlineTime(e.target.value) }}
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
            <div className="w-full md:w-[80%]">

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
                <option value="Done">Done</option>
                <option value="pandind">Panding</option>

              </select>
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
            value={taskDiscriptaion}
            onChange={(e) => { setProjectDiscriptaion(e.target.value) }}
            className=" resize-none border border-gray-300 rounded-md py-2 px-4 block w-full focus:outline-none focus:ring-[#001063] focus:border-[#001063] textarea"
          ></textarea>
        </div>




        <div className="flex gap-8 mt-8 px-16 w-full justify-center md:justify-end">
          <button
            onClick={() => {
              mod();
            }}
            className="hover:bg-[#001063] hover:text-white border-[1px] transition-all transition-1 border-[#001063] px-2 py-1 md:px-3 md:py-3 flex justify-center items-center text-[#001063] gap-[6px] rounded-xl  text-[12px]"
          >
            <MdOutlineCancel size={20} /> Discard
          </button>
          <button
            onClick={() => { handleUpdate() }}
            className="bg-[#001063]  px-2 py-1 md:px-3 md:py-3 flex justify-center items-center text-white gap-[6px] rounded-xl text-[12px] transition-colors "
          >
            <BiSave size={20} /> Save the changes
          </button>
        </div>
      </div>
    </div>
  )
}
export function AddTask({ formData , mod }) {

 


  const [taskName, setProjectname] = useState("");
  const [deadline, setDeadline] = useState("");
  const [deadlineTime, setDeadlineTime] = useState("");
  const [status, setStatus] = useState("Pandind");
  const [taskDiscriptaion, setProjectDiscriptaion] = useState("");
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
      axios.get(`${process.env.REACT_APP_BASE_URL}/allemployees`)
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
    axios.post(`${process.env.REACT_APP_BASE_URL}/tasks`, {
      TaskName: taskName,
      assignedTo: Array.from(seclectedEmpId),
      TaskDiscription: taskDiscriptaion,
      TaskDeadLine: new Date(deadline + ":" + deadlineTime).toISOString(),
      project: formData.project,
      taskStatus:status
   
    }).then(() => {
      console.log("done");
      mod();
      window.location.href = window.location.href;
    }).catch((e) => {
      console.log(e);
    })
  }

  console.log(status);







  return (
    <div
      className="h-full w-full flex justify-center items-center fixed top-0 left-0 z-30"
      onClick={() => {
        mod();
      }}
      style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
    >
      <div
        className="bg-white w-[90%] xxxs:w-[85%] md:w-[70%] max-h-[90vh] overflow-y-auto px-4 py-8 custom-shadow rounded-2xl flex gap-1  items-center flex-col modelAnimation"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between w-[90%] items-center relative">
          <h1 className="lg:text-4xl md:text-3xl text-2xl font-[500] text-[#001063]">
            Edit task Information
          </h1>
          <RxCross2
            className="xxs:static sm:absolute text-2xl sm:top-1 sm:float-right cursor-pointer relative top-0 right-[-1rem]"
            onClick={() => {
              mod();
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
                Task Name
              </label>
              <textarea
                name="message"
                value={taskName}
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
                type="time"
                name="message"
                value={deadlineTime}
                onChange={(e) => { setDeadlineTime(e.target.value) }}
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
            <div className="w-full md:w-[80%]">

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
                <option value="pandind">Panding</option>
                <option value="done">Done</option>

              </select>
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
            value={taskDiscriptaion}
            onChange={(e) => { setProjectDiscriptaion(e.target.value) }}
            className=" resize-none border border-gray-300 rounded-md py-2 px-4 block w-full focus:outline-none focus:ring-[#001063] focus:border-[#001063] textarea"
          ></textarea>
        </div>




        <div className="flex gap-8 mt-8 px-16 w-full justify-center md:justify-end">
          <button
            onClick={() => {
              mod();
            }}
            className="hover:bg-[#001063] hover:text-white border-[1px] transition-all transition-1 border-[#001063] px-2 py-1 md:px-3 md:py-3 flex justify-center items-center text-[#001063] gap-[6px] rounded-xl  text-[12px]"
          >
            <MdOutlineCancel size={20} /> Discard
          </button>
          <button
            onClick={() => { handleUpdate() }}
            className="bg-[#001063]  px-2 py-1 md:px-3 md:py-3 flex justify-center items-center text-white gap-[6px] rounded-xl text-[12px] transition-colors "
          >
            <BiSave size={20} /> Save the changes
          </button>
        </div>
      </div>
    </div>
  )
}




export function AddNewTask({ tasks , mod,addTask }) {

 


  const [taskName, setProjectname] = useState("");
  const [deadline, setDeadline] = useState("");
  const [deadlineTime, setDeadlineTime] = useState("");
  const [status, setStatus] = useState("Pandind");
  const [taskDiscriptaion, setProjectDiscriptaion] = useState("");
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
      axios.get(`${process.env.REACT_APP_BASE_URL}/allemployees`)
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

  console.log(pills)

  const updatepPillsId = (userId) => {
    const newset = new Set(seclectedEmpId);
    newset.add(userId);
    setSeclectedEmpId(newset);
  }

  const handleUpdate = () => {
    console.log("asfas");
    const obj= {
      TaskName: taskName,
      assignedTo: Array.from(seclectedEmpId),
      assignedToName: Array.from(pills),
      TaskDiscription: taskDiscriptaion,
      TaskDeadLine: new Date(deadline + ":" + deadlineTime).toISOString(),
  
      taskStatus:status
   
    }
    addTask(obj);
    mod();
  }

  console.log(status);







  return (
    <div
      className="h-full w-full flex justify-center items-center fixed top-0 left-0 z-30"
      onClick={() => {
        mod();
      }}
      style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
    >
      <div
        className="bg-white w-[90%] xxxs:w-[85%] md:w-[70%] max-h-[90vh] overflow-y-auto px-4 py-8 custom-shadow rounded-2xl flex gap-1  items-center flex-col modelAnimation"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between w-[90%] items-center relative">
          <h1 className="lg:text-4xl md:text-3xl text-2xl font-[500] text-[#001063]">
            Edit task Information
          </h1>
          <RxCross2
            className="xxs:static sm:absolute text-2xl sm:top-1 sm:float-right cursor-pointer relative top-0 right-[-1rem]"
            onClick={() => {
              mod();
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
                Task Name
              </label>
              <textarea
                name="message"
                value={taskName}
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
                type="time"
                name="message"
                value={deadlineTime}
                onChange={(e) => { setDeadlineTime(e.target.value) }}
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
            <div className="w-full md:w-[80%]">

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
            value={taskDiscriptaion}
            onChange={(e) => { setProjectDiscriptaion(e.target.value) }}
            className=" resize-none border border-gray-300 rounded-md py-2 px-4 block w-full focus:outline-none focus:ring-[#001063] focus:border-[#001063] textarea"
          ></textarea>
        </div>




        <div className="flex gap-8 mt-8 px-16 w-full justify-center md:justify-end">
          <button
            onClick={() => {
              mod();
            }}
            className="hover:bg-[#001063] hover:text-white border-[1px] transition-all transition-1 border-[#001063] px-2 py-1 md:px-3 md:py-3 flex justify-center items-center text-[#001063] gap-[6px] rounded-xl  text-[12px]"
          >
            <MdOutlineCancel size={20} /> Discard
          </button>
          <button
            onClick={() => { handleUpdate() }}
            className="bg-[#001063]  px-2 py-1 md:px-3 md:py-3 flex justify-center items-center text-white gap-[6px] rounded-xl text-[12px] transition-colors "
          >
            <BiSave size={20} /> Save the changes
          </button>
        </div>
      </div>
    </div>
  )
}