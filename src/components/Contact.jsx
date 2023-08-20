import React, { useRef } from 'react';
import { useState } from 'react';
import { init, send } from 'emailjs-com';


  export const Contact = () => {
    const form = useRef();

   const [name, setName] = useState(''); 
   const [mail, setMail] = useState(''); 
   const [message, setMessage] = useState(''); 

  

   const sendEmail = (e) => {
    e.preventDefault();
  
    const userID = import.meta.env.VITE_USER_ID;
    const serviceID = import.meta.env.VITE_SERVICE_ID;
    const templateID = import.meta.env.VITE_TEMPLATE_ID;
  
    if (
      userID !== undefined &&
      serviceID !== undefined &&
      templateID !== undefined
  ) {
      init(userID);
  
      const template_param = {
          to_name: name,
          from_name: mail,
          message: message,
      };

      send(serviceID, templateID, template_param).then(() => {
        window.alert('お問い合わせを送信致しました。');
    
        setName('');
        setMail('');
        setMessage('');
      });
    }
  };



  return (
    <form ref={form} onSubmit={sendEmail}>

      <div>
      <label htmlFor="nameForm">ご氏名：</label>
      </div>
            <input
              type="text"
              id="nameForm"
              className="formInput"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <div>
              <label htmlFor="mailForm">メールアドレス：</label>
            </div>
            <input
              type="email"
              id="mailForm"
              className="formInput"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              required
            />

          <div>
              <label htmlFor="mailContentForm">お問い合わせ内容：</label>
            </div>
            <textarea
              type="text"
              id="mailContentForm"
              className="formInput"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
      <input type="submit" value="送信"/>

    </form>
  );
};

export default Contact;