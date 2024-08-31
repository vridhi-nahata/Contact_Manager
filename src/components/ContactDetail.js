import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import user from '../images/user2.png';

const ContactDetail = () => {
    const location = useLocation();
    const { name, email } = location.state.contact;

    return (
        <div className="main" style={{marginTop:"10%"}}>
            <div className="ui card centered">
                <div className="image">
                    <img src={user} alt="user" />
                </div>
                <div className="content" style={{textAlign:"center"}}>
                    <div className="header">{name}</div>
                    <div className="description">{email}</div>
                </div>
            </div>
            <div className="center-div" style={{display:"flex",justifyContent:"center",alignContent:"center"}}>
                <Link to="/"><button className="ui button blue center">Back</button></Link>
            </div>
        </div>
    );
};

export default ContactDetail;
