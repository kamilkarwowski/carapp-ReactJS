import React, {  useState, useEffect } from "react";
import './index.css';



function Contact() {
    const [formvalue, setFormvalue]= useState({ name:'',email:'',address:''});
    const [formerror, setFormerror] = useState({});
    const [issubmit, setSubmit]= useState(false);
 
    const handlevalidation =(e)=>{
        const {name, value}= e.target;
        setFormvalue({...formvalue, [name]: value});
    }
    const handlesubmit= (e)=>{
        e.preventDefault();
        setFormerror(validationform(formvalue));
        setSubmit(true);
    }
    const validationform = (value)=>{
        const errors= {};
        const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 
        if(!value.name){
            errors.name="Podaj swoje Imię!";
        }
 
        if(!value.email){
            errors.email="Podaj poprawny adres e-mail!";
        } else if(!emailPattern.test(value.email))
        {
            errors.email="Podaj poprawny adres e-mail!";
        }
        if(!value.address){
            errors.address="Opisz auto!";
        }
 
        return errors;
    }
 
    useEffect( ()=>{
        if(Object.keys(formerror).length===0 && issubmit)
        {
            console.log(formvalue);
        }
    },[formerror, formvalue, issubmit]);
     
 return (
        <div className="container">
            <h1>Skontaktuj sie z nami w celu kupna wymarzonego auta!</h1><br></br><br></br>
        <div className="row mb-5">
 
            <form onSubmit={ handlesubmit} >
 
                <div className="row mb-4">
                    <label className="col-sm-2 col-form-label">Imię<span className="astriccolor">*</span></label>
                    <div className="col-sm-5">
                    <input type="text" className="form-control" name="name" value={ formvalue.name}  onChange={ handlevalidation} />
                    <span className="text-danger">{ formerror.name } </span>
                    </div>
                </div>
 
                <div className="row mb-4">
                    <label className="col-sm-2 col-form-label">E-mail<span className="astriccolor">*</span></label>
                    <div className="col-sm-5">
                    <input type="text" className="form-control" name="email" value={ formvalue.email} onChange={ handlevalidation}   />
                    <span className="text-danger">{ formerror.email}  </span>
                    </div>
                </div>
 
                <div className="row mb-4">
                    <label className="col-sm-2 col-form-label">Opisz auto jakim jesteś zainteresowany!<span className="astriccolor">*</span></label>
                    <div className="col-sm-5">
                    <textarea  className="form-control" name="address" value={ formvalue.address} onChange={ handlevalidation}   />
                    <span className="text-danger">{ formerror.address}  </span>
                    </div>
                </div>
 
                <div className="row mb-4">
                    <label className="col-sm-2 col-form-label"></label>
                    <div className="col-sm-10">
                    <button className="btn btn-success" name="button">Wyślij</button>
                </div>
                </div>
                </form>
            </div>
        </div>
  );
}

export default Contact;
