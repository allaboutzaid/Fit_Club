import React, {useRef} from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'

const Join = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ypxy4qj', 'template_tpzvz4g', form.current, 'jMoH9WhIxaWuKcJ_N')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };


  return (
    <div className="Join" id='join-us'>
        <div className="left-j">
            <hr />
            <div>
                <span className='stroke-text'>Ready To</span>
                <span>Level Up</span>
            </div>
            <div>
                <span>Your Body</span>
                <span className='stroke-text'>With Us?</span>
            </div>
        </div>
        <div className="right-j">
            <form ref={form} className="email-container" onSubmit={sendEmail}>
                <input type="email" name='user_email' placeholder='Enter Your Email address'/>
                <button className='btn btn-j'>Join Now</button>
            </form>
        </div>
    </div>
  )
}

export default Join