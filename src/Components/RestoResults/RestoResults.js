import React from "react";

import "./RestoResults.css";

import { 
    Card, 
    CardText, 
    CardBody, 
    CardTitle,
    CardLink } from "reactstrap";

    const RestoResults = ({items}) => {
      return (
        <>
        <p>{items.name}</p>
          <Card>
            <CardBody>
              <CardTitle>Restaurant's Name: {items.name}</CardTitle>
              <CardText>Address: {items.address}</CardText>
              <CardText>Phone: {items.phone}</CardText>
              <CardText>Postal Code: {items.postal_code}</CardText>
              <CardLink href={items.reserve_url}>{items.name}Reservation</CardLink>
              <CardLink href={items.mobile_reserve_url}>
                {items.name}Mobile Reservation
              </CardLink> 
            </CardBody>
          </Card>
        </>
      );
    };

export default RestoResults;
