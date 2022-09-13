/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from 'react';
import DeatailContext from "./DeatailContext";

export default function Popup() {
    const context = useContext(DeatailContext);
    const { mysocial, getmysocial, popvisible, getpopvisible } = context;
    var Copyright = { 'name': 'TheKoushikDurgas', 'link': 'http://thekoushikdurgas.in/', 'year': new Date().getFullYear() }
    useEffect(() => {
        if (mysocial.length === 0) { getmysocial() }
    }, [mysocial]);
    return (
        <>
            <div className={`stick_block_layer ${popvisible ? '' : 'hidden'}`} id="stick_block_layer" style={{ zIndex: 9999 }}></div>
            <div className={`modalpop md:rounded-[1vw] rounded-[10px] bg-[#ffffff1a] shadow-[0_20px_50px_#00000026] border border-[#ffffff80] backdrop-blur-[5px] stick_popup ${popvisible ? "visible" : "hidden"}`} id="stickLayer">
                <div className="stick_content gap-2">
                    <h2 className='top-[0] w-fit rounded-[0_0_10px_10px] md:rounded-[0_0_1vw_1vw] px-[10px] md:px-[1vw] text-[20px] md:text-[2vw] z-[200] m-[0_auto] bg-[#ffffff1a] shadow-[0_20px_50px_#00000026] border border-t-0 border-[#ffffff80] backdrop-blur-[5px]'>Copyright © Designed &amp; Developed by <a href={Copyright.link} target="_blank" rel="noopener noreferrer">{Copyright.name} </a> {Copyright.year}</h2>
                    <button className="close-btn close-modal stick_close" onClick={() => { getpopvisible(false) }}><i className="fas fa-times"></i></button>
                    <ul>
                        {mysocial.map((object, i) =>
                            <li className={`tkd${object.title} bg-[#ffffff1a] shadow-[0_20px_50px_#00000026] border border-[#ffffff80] backdrop-blur-[5px]`} key={i}><a href={object.link} target="_blank" rel="noopener noreferrer"><i className={object.icon}></i></a></li>
                        )}
                    </ul>
                    <form action="/" method="post">
                        <input id="subscribe-email" type="email" placeholder="Your email" name="email" className="email" />
                        <input type="submit" name="subscribe" value="Subscribe" />
                    </form>
                    {/* <p onClick={()=>{getpopvisible(false)}} className='rounded-[10px_10px_0_0] md:rounded-[1vw_1vw_0_0] bg-[#ffffff1a] shadow-[0_20px_50px_#00000026] border border-[#ffffff80] backdrop-blur-[5px]'><button className="close close-modal stick_close">No thanks</button></p> */}
                </div>
            </div>
            {/* <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5><button class="close" type="button" data-dismiss="modal" aria-label="Close"><i class="fas fa-times" aria-hidden="true"></i></button></div><div class="modal-body">Select "Logout" below if you are ready to end your current session.</div><div class="modal-footer"><button class="btn" type="button" data-dismiss="modal">Cancel</button><a class="btn" href="login.html">Logout</a></div></div></div></div> */}
        </>
    )
}
