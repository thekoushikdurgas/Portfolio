import React from "react";
import "./contactus.css";
import DeatailContext from "../context/DeatailContext";

export default function Contactus(props) {
  const context = React.useContext(DeatailContext);
  const { getalertactive } = context;
  const host = "https://thekoushikdurgasserver.herokuapp.com";
  const [name,setname] = React.useState("");
  const [email,setemail] = React.useState("");
  const [message,setmessage] = React.useState("");
  const [phone,setphone] = React.useState("");
  const [subject,setsubject] = React.useState("");
  const [choose,setchoose] = React.useState("");
  const [box1checkbox,setbox1checkbox] = React.useState(false);
  const [box2checkbox,setbox2checkbox] = React.useState(false);
  const validateEmail = (email) => { return String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/); };
  const validateName = (name) => { return String(name).match(/^[a-zA-Z ]{2,30}$/); };
  const validateMessage = (message) => { return String(message).match(/^[a-zA-Z0-9 ]{1,150}$/); };
  const submitbutton = async (e) => {
    e.preventDefault();
    if(!validateName(name)){
      getalertactive([true, 'Warning', 'Name is not valid']);
    }
    else if(!validateEmail(email)){
      getalertactive([true, 'Warning', 'Email is not valid']);
    }
    else if(!validateMessage(message)){
      getalertactive([true, 'Warning', 'Message is not valid']);
    }
    else{
      const data = {
        name:name,
        email:email,
        phone:phone,
        message:message,
        subject:subject,
        choose:choose,
      }
      const response = await fetch(`${host}/api/contact`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)});
      const json = await response.json();
      if(json.success){
        getalertactive([true, 'Success', 'Sent Successfully']);
        resetbutton();
      }
      else{
        getalertactive([true, 'Warning', 'Message not sent']);
      }
    }
  }
  const resetbutton = () => {
    getalertactive([true, 'Warning', 'Name is not valid']);
    setname("");
    setemail("");
    setphone("");
    setmessage("");
    setsubject("");
    setchoose("");
  }
  return (
    <section className="contact-page-sec">
      <div className="row">
      {props.mydetail.slice(1).map((object, i) => {return (
        <div className="col-md-3" key={i}>
            <div className="contact-info">
              <a href={object.link} target="_blank" rel="noopener noreferrer">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className={object.title} />
                  </div>
                  <div className="contact-info-text">
                    <span>{object.subject}</span> 
                  </div>
                </div> 
              </a>           
            </div>          
          </div>
      );})}          
      </div>
      <div className="contact-page-form" method="post">
              <h2>Get in Touch</h2> 
              <form action="contact-mail.php" method="post">
                <div className="row">                
                  <div className="col-md-12 message-input">
                    <div className="single-input-field">
                      <select className="form-select" value={choose} onChange={(event)=>{setchoose(event.target.value)}}>
                        <option defaultValue value=''>-- Please choose an option --</option>
                        {['Bug Report', 'Feature Request', 'General Question', 'Other','Request Quote','Send Resume'].map((object, i) => {return (
                          <option key={i} value={object}>{object}</option>
                        );})}
                      </select>
                    </div>
                  </div>  
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="single-input-field">
                      <input type="text" placeholder="Your Name" name="name" required value={name} onChange={(event)=>{setname(event.target.value)}} />
                    </div>
                  </div>  
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="single-input-field">
                      <input type="email" placeholder="E-mail" name="email" required value={email} onChange={(event)=>{setemail(event.target.value)}} />
                    </div>
                  </div>                              
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="single-input-field">
                      <input type="text" placeholder="Phone Number" name="phone" value={phone} onChange={(event)=>{setphone(event.target.value)}} />
                    </div>
                  </div>  
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="single-input-field">
                      <input type="text" placeholder="Subject" name="subject" value={subject} onChange={(event)=>{setsubject(event.target.value)}} />
                    </div>
                  </div>                
                  <div className="col-md-12 message-input">
                    <div className="single-input-field">
                      <div className="input-group custom-file-button">
                        <label className="input-group-text" htmlFor="inputGroupFile">Upload</label>
                        <input type="file" className="form-control" id="inputGroupFile" />
                      </div>
                    </div>
                  </div>             
                  <div className="col-md-12 message-input">
                    <div className="single-input-field">
                      <textarea placeholder="Tell us what's wrong" name="message" value={message} onChange={(event)=>{setmessage(event.target.value)}}  />
                      <div className="textarealimit"><p>0 / 150</p></div>
                    </div>
                  </div>                           
                  <div className="col-md-12 message-input">
                    <div className="single-input-field">
                      <input type="checkbox" id="box-1" checked={box1checkbox} onChange={()=>{setbox1checkbox(!box1checkbox)}} />
                      <label htmlFor="box-1">I have read and agreed with <a href="/">the terms and conditions.</a></label>
                    </div>
                  </div>                           
                  <div className="col-md-12 message-input">
                    <div className="single-input-field">
                      <input type="checkbox" id="box-2" checked={box2checkbox} onChange={()=>{setbox2checkbox(!box2checkbox)}} />
                      <label htmlFor="box-2">Send me a copy of this message.</label>
                    </div>
                  </div> 
                  <div className="col-md-6 col-sm-6 col-xs-12">                                                  
                    <div className="single-input-fieldsbtn">
                      <input type="submit" value="Send" onClick={submitbutton} disabled={box1checkbox?"":"disabled"} />
                    </div>
                  </div> 
                  <div className="col-md-6 col-sm-6 col-xs-12">                                                  
                    <div className="single-input-fieldsbtn">
                      <input type="reset" value="Reset" onClick={resetbutton} />
                    </div>
                  </div>                            
                </div>
              </form>   
      </div>      
    </section>
  );
}
