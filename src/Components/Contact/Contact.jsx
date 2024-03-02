import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow  from '../../assets/white-arrow.png'
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8bff1ed7-c241-43b6-9a23-b13bece70a19");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Email Sent Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum excepturi, voluptates facere provident obcaecati blanditiis laboriosam quia ipsam consequatur voluptatem voluptas repellendus rem magni animi enim, sunt unde perferendis expedita.</p>
            <ul>
                <li><img src={mail_icon} alt="" /> Contact@kauser.com</li>
                <li><img src={phone_icon} alt="" /> +91 123 456 7890</li>
                <li><img src={location_icon} alt="" /> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, ducimus.</li>
            </ul>
        </div>
        <div className="contact-col">
          <form onSubmit={onSubmit}>
              <label>Your Name</label>
              <input type="text" name="name" placeholder='Enter Your Name' required id="" />
              <label>Phone Number</label>
              <input type="tel" name="phone" placeholder='Enter Your Mobile Number' required id="" />
              <label>Write Your Message Here</label>
              <textarea name="message" placeholder='Enter Your Message Here' rows="6" required></textarea>
              <button className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>

          </form>
          <span>{result}</span>
        </div>
        
    </div>
  )
}

export default Contact