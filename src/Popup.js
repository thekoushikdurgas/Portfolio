/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from 'react';
import DeatailContext from "../context/DeatailContext";

export default function Popup(props) {
    const context = useContext(DeatailContext);
    const { mysocial, getmysocial } = context;
    var Copyright = { 'name': 'TheKoushikDurgas', 'link': 'http://thekoushikdurgas.in/', 'year': new Date().getFullYear() }
    useEffect(() => {
        if (mysocial.length === 0) { getmysocial() }
    }, [mysocial]);
    return (
        <>
            <div className={`stick_block_layer ${props.showclose ? '' : 'hidden'}`} id="stick_block_layer" style={{ zIndex: 1000 }}></div>
            <div className={`modalpop stick_popup ${props.showclose ? "visible" : "hidden"}`} id="stickLayer">
                <div className="stick_content">
                    <h2>Copyright © Designed &amp; Developed by <a href={Copyright.link} target="_blank" rel="noopener noreferrer">{Copyright.name} </a> {Copyright.year}</h2>
                    <button className="close-btn close-modal stick_close"><i className="fas fa-times"></i></button>
                    <ul>
                        {mysocial.map((object, i) =>
                            <li className={`tkd${object.title}`} key={i}><a href={object.link} target="_blank" rel="noopener noreferrer"><i className={object.icon}></i></a></li>
                        )}
                    </ul>
                    <form action="/" method="post">
                        <input id="subscribe-email" type="email" placeholder="Your email" name="email" className="email" />
                        <input type="submit" name="subscribe" value="Subscribe" />
                    </form>
                    <p><button className="close close-modal stick_close">No thanks</button></p>
                </div>
            </div>
            {/* <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5><button class="close" type="button" data-dismiss="modal" aria-label="Close"><i class="fas fa-times" aria-hidden="true"></i></button></div><div class="modal-body">Select "Logout" below if you are ready to end your current session.</div><div class="modal-footer"><button class="btn" type="button" data-dismiss="modal">Cancel</button><a class="btn" href="login.html">Logout</a></div></div></div></div> */}
        </>
    )
}
