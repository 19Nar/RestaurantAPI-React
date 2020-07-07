import React from "react";

import "./RestoResults.css";

import { 
    Card, 
    CardImg, 
    CardText, 
    CardBody, 
    CardTitle } from "reactstrap";

const RestoResults = (items) => {
  return (
    <>
      <Card>
        <CardImg top width="100%" src={items.image_url} alt="Card image cap" />
        <CardBody>
          <CardTitle>Restaurant's Name: {items.name}</CardTitle>
          <CardText>Address: {items.address}</CardText>
          <CardText>Phone: {items.phone}</CardText>
          <CardText>Postal Code: {items.postal_code}</CardText>
          <Card.Link href={items.reserve_url}>{items.name}Reservation</Card.Link>
          <Card.Link href={items.mobile_reserve_url}>
            {items.name}Mobile Reservation
          </Card.Link>
        </CardBody>
      </Card>
    </>
  );
};

export default RestoResults;
