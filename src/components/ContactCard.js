import React from 'react';
import { Link } from 'react-router-dom';
import user from '../images/user.png';

const ContactCard = (props) => {
    const { id, name, email } = props.contact;
    return (
        <div className="item" style={{display:"flex"}}>
            <img className="ui avatar image" src={user} alt="user" style={{margin:"7px"}} />
            <div className="content" style={{margin:"5px"}}>
                <Link to={`/contact/${id}`} state={{ contact: props.contact }}>
                    <div className="header">{name}</div>
                    <div>{email}</div>
                </Link>
            </div>
            <div style={{marginLeft:"auto"}}>
            <Link to={`/edit/${id}`} state={{ contact: props.contact }}> 
            <i
                className="edit alternate outline icon"
                style={{ color: "blue", marginTop: "10px",marginRight:"auto",cursor:"pointer"}}
            ></i> </Link>
            <i
                className="trash alternate outline icon"
                style={{ color: "red", marginTop: "10px",marginLeft:"auto",cursor:"pointer"}}
                onClick={() => props.clickHandler(id)}
            ></i> 
            </div>
        </div>
    );
};

export default ContactCard;
