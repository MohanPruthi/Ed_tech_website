import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import HighlightText from "../components/core/homePage/HighlightText";
import CTAButton from "../components/core/homePage/Button";
import Banner from "../assets/Images/banner.mp4";
import CodeBlocks from '../components/core/homePage/CodeBlocks';
import TimelineSection from '../components/core/homePage/TimelineSection';
import LearningLanguageSection from '../components/core/homePage/LearningLanguageSection';
import InstructorSection from '../components/core/homePage/InstructorSection';
import Footer from '../components/common/Footer';
import ExploreMore from '../components/core/homePage/ExploreMore';
import { useState } from 'react';

const Home = () => {
    
    const [cursorPosition, setCursorPosition] = useState({top:-300, left: -300})
    const onMouseMove = e =>{
        setCursorPosition({ top: e.screenY, left: e.screenX });
    }
        
  return (
    
    <div className=''>
      {/* Section1  */}
      <div  onMouseMove={onMouseMove}  className='relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 text-white'>

        {/* <div style={{position: "absolute", ...cursorPosition }} className={` rounded-full  w-[272.95px] h-[257.05px] bg-gradient-to-br from-[#cb1fff] via-[#ec9fe4] to-[#c28dea] opacity-[20%]  blur-[34px] translate-x-[-55%] translate-y-[-145%]`}>

        </div> */}

        <Link to={"/signup"}>
            <div className='group mx-auto mt-16 w-fit rounded-full bg-richblack-800 p-1 font-bold text-richblack-200 drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] transition-all duration-200 hover:scale-95 hover:drop-shadow-none'>
                <div className='flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900'>
                    <p className=''>Become an Instructor</p>
                    <FaArrowRight />
                </div>
            </div>
        </Link>

        <div className='text-center text-4xl font-semibold mt-7'>
            Empower Your Future with <HighlightText text={"Coding Skills"} />
        </div>

        <div className=' mt-4 w-[90%] text-center text-lg font-bold text-richblack-300'>
            With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors. 
        </div>

        <div className='flex flex-row gap-7 mt-8'>
            <CTAButton active={true} linkto={"/signup"}> 
                Learn More
            </CTAButton>

            <CTAButton active={false} linkto={"/login"}> 
                Book a Demo
            </CTAButton>
        </div>

        <div className='w-[1035px] mx-3 my-12 shadow-blue-200'>
            <video
            muted
            loop
            autoPlay
            >
            <source  src={Banner} type="video/mp4" />
            </video>
        </div>

        {/* Code Section 1  */}
        <div>
            <CodeBlocks 
                position={"lg:flex-row"}
                heading={
                    <div className='text-4xl font-semibold'>
                        Unlock Your <HighlightText text={"coding potential"}/> with our online courses
                    </div>
                }
                subheading = {
                    "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                }
                ctabtn1={
                    {
                        btnText: "try it yourself",
                        linkto: "/signup",
                        active: true,
                    }
                }
                ctabtn2={
                    {
                        btnText: "learn more",
                        linkto: "/login",
                        active: false,
                    }
                }

                codeblock={`<!DOCTYPE html>\n<html>\n<head><title>Example</title>\n<linkrel="stylesheet"href="styles.css">\n</head>\n<body>\n <h1><a href="/">Header</a>\n</h1>\n<a href="about">About</a>\n</body>\n</html>`}
                codeColor={"text-yellow-25"}
                backgroudGradient={"bg-gradient-to-br from-[#8A2BE2] via-[#FFA500] to-[#F8F8FF] opacity-[20%]  blur-[34px] translate-x-[-10%] translate-y-[-10%]"}
            />
        </div>

        {/* Code Section 2  */}
        <div>
            <CodeBlocks 
                position={"lg:flex-row-reverse"}
                heading={
                    <div className='text-4xl font-semibold'>
                        Start
                        <HighlightText text={" coding in seconds"}/>
                    </div>
                }
                subheading = {
                    "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
                }
                ctabtn1={
                    {
                        btnText: "Continue Lesson",
                        linkto: "/signup",
                        active: true,
                    }
                }
                ctabtn2={
                    {
                        btnText: "learn more",
                        linkto: "/login",
                        active: false,
                    }
                }

                codeblock={`<!DOCTYPE html>\n<html>\n<head><title>Example</title>\n<linkrel="stylesheet"href="styles.css">\n</head>\n<body>\n <h1><a href="/">Header</a>\n</h1>\n<a href="about">About</a>\n</body>\n</html>`}
                codeColor={"text-blue-25"}
                backgroudGradient={"bg-gradient-to-br from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] opacity-[20%]  blur-[34px] translate-x-[-10%] translate-y-[-10%]"}
            />
        </div>

        <ExploreMore/>

      </div>

        {/*Section 2  */}
        <div className='bg-pure-greys-5 text-richblack-700'>
            <div className=' w-[1440px] relative mx-auto flex flex-col  items-center justify-between'>
                <div className='homepage_bg h-[320px] w-screen mt-[5px]'> 

                <div className='flex flex-col items-center justify-between gap-5 mx-auto mt-[110px]'>
                    <div className='flex flex-row text-white mt-[100px] gap-7'>
                        <CTAButton active={true} linkto={"/sginup"}>
                            <div className='flex flex-row'>
                                <p>Explore Full Catalog</p>
                                <FaArrowRight/>
                            </div>
                        </CTAButton>

                        <CTAButton active={false} linkto={"/sginup"}>
                            Learn More
                        </CTAButton>
                    </div>
                    
                </div>

                </div>

                <div className='mx-auto  max-w-maxContent flex flex-col items-center justify-between gap-7 mt-[90px]'>
                <div className='flex flex-row w-[1200px] ml-[120px]'>
                    <div className='text-4xl font-semibold w-[45%]'>
                    Get the skills you need for a <HighlightText text={"job that is in demand."}/>
                    </div>

                    <div className='flex flex-col w-[45%] items-start gap-10'>
                        <div>
                        The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
                        </div>

                        <div>
                        <CTAButton active={true} linkto={"/signup"}>
                            Learn More
                        </CTAButton>
                        </div>
                    </div>
                </div>

                <TimelineSection/>

                <LearningLanguageSection/>
                </div>
            </div>
            








        </div>

        {/*Section 3 */}
        <div className='w-11/12 mx-auto max-w-maxContent flex-col items-center justify-between gap-8 first-letter bg-richblack-900 text-white'>

            <InstructorSection />

            <h2 className='text-center text-4xl font-semobold mt-10'>Reviews from Other learners</h2>
            {/* Review Slider here */}
            <div className='h-[300px] w-[300px] border border-pure-greys-5'>

            </div>
        </div>

        {/*Footer */}
            <Footer/>
    </div>
  )
} 

export default Home;


