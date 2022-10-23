import React,{useState} from 'react'
import styles from '../styles/Contact.module.css'

const Contact = () => {
  const [contactData, setContactData] = useState({ 
    name:"",
    email:"",
    desc:"",
});

let {name, email, desc} = contactData;

const handleSubmit = async(e)=>{
    e.preventDefault();
    console.log(name, email, desc);
    let reqBody = {name, email, desc};
    let response = await fetch('http://localhost:3000/api/postcontact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reqBody),
    });
    let data = await response.text();
    console.log(data);
    setContactData({ 
      name:"",
      email:"",
      desc:"",
  });
}

  const handleChange=(e)=>{
    let iname = e.target.name;
    let ivalue = e.target.value;
    setContactData({...contactData, [iname]:ivalue});
  }
  return <div className={styles.container}>
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
            <div className={styles.mb3}>
                <label htmlFor="name" className={styles.formlabel}>Enter your name</label>
                <input className={styles.input} type="text" value={name} onChange={handleChange} id="name" name='name' aria-describedby="emailHelp" />
            </div>
            <div className={styles.mb3}>
                <label htmlFor="email" className={styles.formlabel}>Email address</label>
                <input className={styles.input} type="email" value={email} onChange={handleChange} name='email' id="email" aria-describedby="emailHelp" />
                <div id="emailHelp" className={styles.formtext}>We'll never share your email with anyone else.</div>
            </div>
            <div className={styles.mb3}>
                <label className={styles.formlabel} htmlFor="desc">Elaborate your concern</label>
                <textarea className={styles.input} value={desc} onChange={handleChange} name='desc' id="desc" />
            </div>
            <button type="submit" className={styles.btn}>Submit</button>
        </form>
    </div>;
}

export default Contact