import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {RxDropdownMenu} from "react-icons/rx"
import {MdEdit} from "react-icons/md"
import {RiDeleteBin6Line} from "react-icons/ri"
import {BiDownArrow} from "react-icons/bi"
import {AiOutlinePlus} from "react-icons/ai"
import SubSectionModal from './SubSectionModal'

const NestedView = ({handleChangeEditSectionName}) => {

    const {course} = useSelector((state)=>state.course);
    const {token} = useSelector((state)=>state.auth);
    const dispatch = useDispatch();

    const [addSubSection, setAddSubSection] = useState(null);
    const [viewSubSection, setViewSubSection] = useState(null);
    const [editSubSection, setEditSubSection] = useState(null);
    const [confirmationModal, setConfirmationModal] = useState(null);
    // green
    const handleDeleteSection = () => {

    }

    const handleDeleteSubSection = () => {

    }
    console.log("course builder" + course + course.courseContent[0]);
    return (
        <div>
            <div className='rounded-lg bg-richblack-700 p-6 px-8 text-white'>
                {
                    course?.courseContent?.map((section)=> (
                        <details key={section._id} open>
                            <summary className='flex items-center justify-between gap-x-3 border-b-2'>
                                <div className='flex items-center gap-x-3'>
                                    <RxDropdownMenu/>
                                    <p>{section.sectionName}</p>
                                </div>

                                <div className=' flex items-center gap-x-3'>
                                    <button onClick={() => handleChangeEditSectionName(section._id, section.sectionName)}>
                                        <MdEdit />
                                    </button>

                                    <button
                                        onClick={() => {
                                            setConfirmationModal({
                                                text1: "Delete this Section",
                                                text2: "All the lectures in this section wil be deleted",
                                                btn1Text: "Delete",
                                                btn2Text: "Cancel",
                                                btn1Handler: () => handleDeleteSection(section._id),
                                                btn2Handler: () => setConfirmationModal(null),
                                            })
                                        }}
                                        >
                                            <RiDeleteBin6Line />
                                    </button>

                                    <span>|</span>

                                    <BiDownArrow className={`text-xl text-richblack-300`} />
                                </div>
                            </summary>

                            <div>
                                {
                                    section?.subSection?.map((data)=>(
                                        <div key={data?._id} onClick={() => setViewSubSection(data)}
                                        className='flex items-center justify-between gap-x-3 border-b-2'>
                                            <div className='flex items-center gap-x-3'>
                                                <RxDropdownMenu />
                                                <p>{data.title}</p>
                                            </div>

                                            <div className='flex items-center gap-x-3'>
                                                <button onClick={() => setEditSubSection({...data, sectionId:section._id})}>
                                                    <MdEdit/>
                                                </button>
                                                <button
                                                onClick={() => setConfirmationModal({
                                                    text1: "Delete this Sub Section",
                                                    text2: "selected Lecture will be deleted",
                                                    btn1Text: "Delete",
                                                    btn2Text: "Cancel",
                                                    btn1Handler: () => handleDeleteSubSection(data._id, section._id),
                                                    btn2Handler: () => setConfirmationModal(null), })}
                                                >
                                                <RiDeleteBin6Line />
                                                    
                                                </button>
                                            </div>
                                        </div>
                                    ))
                                }

                                <button onClick={() => setAddSubSection(section._id)}
                                className='mt-4 flex items-center gap-x-2 text-yellow-50'
                                >
                                    <AiOutlinePlus />
                                    <p>Add Lecture</p>
                                </button>
                            </div>
                        </details>
                    ))
                }
            </div>

            {/* Modals */}
            
        </div>
    )
}

export default NestedView
