import React from "react";
import { Col } from "reactstrap";

const ErrorHandler = ({ message }) => {
  return (
    <Col className="m-5">
      <h1 className="text-center">{message}</h1>
    </Col>
  );
};

export default ErrorHandler;
