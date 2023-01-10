import React from "react";

const Car = props =>{
    return(
        <tr>
            <td>{props.nazwa}</td>
            <td>{props.rodzaj}</td>
            <td>{props.opis}</td>
            <td>{props.cena}</td>
        </tr>
    );
};

export default Car;