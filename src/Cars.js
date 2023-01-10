import React from "react";
import {Table} from 'react-bootstrap';
import Car from "./Car";
import './index.css';



function Cars() {
    const header = <h1>Lista aktualnych ogłoszeń</h1>;
  return (
   <div>
    {header}
    <br></br><br></br>
    <Table striped bordered hover size="sm">
    <thead>
        <tr>
            <th>Marka</th>
            <th>Model</th>
            <th>Nadwozie</th>
            <th>Przebieg</th>
            <th>Opis</th>
            <th>Cena</th>
        </tr>
    </thead>
    <tbody>
<tr>
    <td>Audi</td>
    <td>A3</td>
    <td>Hatchback</td>
    <td>186 000km</td>
    <td>Pali, jeździ, skręca, hamuje</td>
    <td>2000zł</td>
</tr>
<tr>
    <td>Audi</td>
    <td>A3</td>
    <td>Hatchback</td>
    <td>186 000km</td>
    <td>Pali, jeździ, skręca, hamuje</td>
    <td>2000zł</td>
</tr>
<tr>
    <td>Audi</td>
    <td>A3</td>
    <td>Hatchback</td>
    <td>186 000km</td>
    <td>Pali, jeździ, skręca, hamuje</td>
    <td>2000zł</td>
</tr>
<tr>
    <td>Audi</td>
    <td>A3</td>
    <td>Hatchback</td>
    <td>186 000km</td>
    <td>Pali, jeździ, skręca, hamuje</td>
    <td>2000zł</td>
</tr>
<tr>
    <td>Audi</td>
    <td>A3</td>
    <td>Hatchback</td>
    <td>186 000km</td>
    <td>Pali, jeździ, skręca, hamuje</td>
    <td>2000zł</td>
</tr>
<tr>
    <td>Audi</td>
    <td>A3</td>
    <td>Hatchback</td>
    <td>186 000km</td>
    <td>Pali, jeździ, skręca, hamuje</td>
    <td>2000zł</td>
</tr>
<tr>
    <td>Audi</td>
    <td>A3</td>
    <td>Hatchback</td>
    <td>186 000km</td>
    <td>Pali, jeździ, skręca, hamuje</td>
    <td>2000zł</td>
</tr>

    </tbody>
    </Table>
   </div>
  );
}

export default Cars;
