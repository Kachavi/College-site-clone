import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import './index.css'

const supabase = createClient("https://skbfngdbawnqnwjnvjfe.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrYmZuZ2RiYXducW53am52amZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg4NzUzMTQsImV4cCI6MjAwNDQ1MTMxNH0.1LSS-kM753CR3mm4i-hHMn2sVxQRC8wMtAbzuiJVIrI");

function Testfetch() {
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

    return (
        <>
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
        </>
    );

}

export default Testfetch;
