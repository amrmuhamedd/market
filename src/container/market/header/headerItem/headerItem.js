import React from "react";
import { NavLink } from "react-router-dom";
import { Carousel, Row, Col, Container } from "react-bootstrap";
import Aux from "../../../../hoc/ar";
import classes from "./headItem.module.css";
const product = (props) => {
  return (
    <Aux>
      <Container>
        <Row>
          <Col md="7">
            <Carousel.Caption className={classes.content}>
              <h3>{props.item.title}</h3>
              <p>{props.item.info}</p>
              <NavLink
                to={"/" + props.item.id}
                className="btn"
                style={{ backgroundColor: "#0ff" }}
              >
                some details
              </NavLink>
            </Carousel.Caption>
          </Col>
          <Col md="5">
            <div className={classes.imgCon}>
              <img
                className={classes.img}
                src={props.item.img.master}
                alt="Third slide"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </Aux>
  );
};

export default product;
