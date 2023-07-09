import Header from "./Header"
import Footer from "./Footer";
import React, { useEffect, useState } from 'react';
import { createClient } from "@supabase/supabase-js";
import './index.css'

const supabase = createClient("https://skbfngdbawnqnwjnvjfe.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrYmZuZ2RiYXducW53am52amZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg4NzUzMTQsImV4cCI6MjAwNDQ1MTMxNH0.1LSS-kM753CR3mm4i-hHMn2sVxQRC8wMtAbzuiJVIrI");


function Aluminai() {

    const [formData, setFormData] = useState([]);

    useEffect(() => {
        getfromData();
    }, []);

    async function getfromData() {
        let { data: formdata } = await supabase
            .from('formdata')
            .select('*')
        setFormData(formdata);
    }



    const [formSubmit, setFormSubmit] = useState({
        nameper: '',
        emailper: '',
        passwordper: ''
    });

    const { nameper, emailper, passwordper } = formSubmit;

    const handleChange = (e) => {
        setFormSubmit({ ...formSubmit, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { data } = await supabase
            .from('formdata')
            .insert([
                { name: nameper, email: emailper, pass: passwordper },
            ])
        setFormSubmit({
            nameper: '',
            emailper: '',
            passwordper: ''
        });
        getfromData()
    };

    return (
        <>
            <Header />
            <div class="container">

                <h1>Alumni Registeration</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="nameper"
                            name="nameper"
                            value={nameper}
                            onChange={handleChange}
                            required
                        />
                    </div><br />
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="emailper"
                            name="emailper"
                            value={emailper}
                            onChange={handleChange}
                            required
                        />
                    </div><br />
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="passwordper"
                            name="passwordper"
                            value={passwordper}
                            onChange={handleChange}
                            required
                        />
                    </div><br />
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>


            </div>
            <table className="table table-striped custom-table" style={{ maxWidth: '600px', margin: '0 auto' }}>
                <thead className="thead-dark">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {formData.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.pass}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Footer></Footer>

        </>
    )
}

export default Aluminai