/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './footer.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import video2 from '../../Assets/video(2).mp4'
import{FiSend} from 'react-icons/fi'
import{MdOutlineTravelExplore} from 'react-icons/md'
import{TfiTwitter} from 'react-icons/tfi'
import{AiOutlineYoutube} from 'react-icons/ai'
import{AiOutlineInstagram} from 'react-icons/ai'
import{FaTripadvisor} from 'react-icons/fa'
import{FiChevronRight } from 'react-icons/fi'


const Footer = ()=>{
    React.useEffect(()=>{
        Aos.init({duration:2000})
    },[])

    return (
        <section className='footer'>
            <div className="videoDiv">
                <video src={video2} loop autoPlay muted type='video/mp4'></video>
            </div>

            <div className="setContent container">
                <div className='contactDiv flex'>
                    <div data-aos='fade-up' className="text">
                        <small>KEEP IN TOUCH</small>
                        <h2> Travel with us</h2>
                    </div>

                    <div className="inputDiv flex">
                        <input data-aos='fade-up' type="text" placeholder= "Enter Email Address" />
                        <button data-aos='fade-up' className='btn flex' type='submit'>SEND <FiSend className='icon'/></button>
                        
                    </div>
                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="#" className='logo flex'><MdOutlineTravelExplore className='icon'/>Travel.</a>
                        </div>

                        <div data-aos='fade-up' className="footerParagraph">
                            React practice Jack(Zeyu) Wang 08/2023 Amidst the tranquil rustling of leaves and the gentle caress of a warm breeze, the sun dipped below the horizon, casting hues of orange and pink across the sky. Birds chirped their evening songs, creating a harmonious symphony that echoed through the air. As the day transitioned into night, the city's lights began to illuminate the streets, painting a picture of urban life against the darkening canvas of the sky. It was a moment of serenity and anticipation, where the world seemed to pause and reflect before the bustling nightlife took over.
                        </div>

                        <div data-aos='fade-up' className="footerSocials flex">
                            <TfiTwitter className="icon"/>
                            <AiOutlineYoutube className="icon"/>
                            <AiOutlineInstagram className='icon'/>
                            <FaTripadvisor className='icon'/>
                        </div>


                    </div>

                    <div className="footerLinks grid">
                        <div data-aos='fade-up' data-aos-duration='3000' className="linkGroup">
                            <span className="groupTitle">Our AGENCY</span>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Services
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Insurance
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Agency
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Tourism
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Payment
                            </li>
                        </div>

                        <div data-aos='fade-up' data-aos-duration='4000' className="linkGroup">
                            <span className="groupTitle">PARTNERS</span>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Bookings
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Rentcars
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                HostelWorld
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Xiecheng
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                TripAdvisor
                            </li>
                        </div>

                        <div className="linkGroup" data-aos='fade-up' data-aos-duration='5000'>
                            <span className="groupTitle">LAST MINUTE</span>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                London
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                China-Henan
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                California
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Auckland
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Christchurch
                            </li>
                        </div>
                    </div>

                    <div className="footerDiv flex">
                        <small>COPYRIGHTS RESERVERD - @Travel </small>
                        <small>Author - @Valeria Chorna 2023 </small>
                        <small>All rights reserved</small>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Footer