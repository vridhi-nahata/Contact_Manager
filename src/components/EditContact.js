import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditContact = ({ contacts, updateContactHandler }) => {
    const { id } = useParams();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const contact = contacts.find(contact => contact.id === id);
        if (contact) {
            setName(contact.name);
            setEmail(contact.email);
        }
    }, [id, contacts]);

    const update = (e) => {
        e.preventDefault();
        if (name === "" || email === "") {
            alert("All fields are mandatory!");
            return;
        }
        updateContactHandler({ id, name, email });
        navigate("/");
    };

    return (
        <div className="ui main">
            <h2 style={{ padding: "50px 0 0 0" }}>Edit Contact</h2>
            <form className="ui form" onSubmit={update}>
                <div className="field">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>                   
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>                   
                </div>
                <button className="ui button blue">Update</button>
            </form>
        </div>
    );
};

export default EditContact;
