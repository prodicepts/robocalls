import React from "react";
import '../css/CardList.css';
import { Card } from "./Card";

const CardList = ({rbts}) => {
    const robotArr = rbts.map((user, index) => {
        
        return (
            <Card 
                name = {user.name}
                email = {user.email}
                username = {user.username}
                key = {user.id}
            />
        )
    });
    return (
        <div className="cardlistbody tc">
            {robotArr}
        </div>
    );
}

export default CardList;