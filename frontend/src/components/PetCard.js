import React from "react";
import {Link} from 'react-router-dom'
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Button from "components/CustomButtons/Button.js";

import { cardTitle } from "assets/jss/material-kit-react.js";

const styles = {
  cardTitle,
};

const useStyles = makeStyles(styles);

export default function PetCard(props) {
  const classes = useStyles();

  console.log(props)
  return (
    <Card style={{width: "20rem"}}>
      <CardBody>
        <h4 className={classes.cardTitle}>{props.name}</h4>
        <p>
          <strong>{props.animal_type}</strong>
        </p>
        <p>
          {props.age}
        </p>
        <Link key={props.id} to={`pets/${props.id}`}><Button color='info'>Go To Pet Page</Button></Link>
      </CardBody>
    </Card>
  );
}
