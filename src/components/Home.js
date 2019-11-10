import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import UserTable from "./UserTable";
import CustomerData from "../data";

const Home = () => {
  const [userData, setUserData] = useState(null);
  const [toggle, setToggle] = useState(false);

  const determineMarketable = () => {
    if (!toggle) {
      let marketableUsers = CustomerData.data.filter(
        d => d.allow_marketing === true
      );
      setUserData(marketableUsers);
    } else {
      setUserData(CustomerData.data);
    }

    setToggle(t => !t);
  };

  const resetFilters = () => {
    setUserData(CustomerData.data);
  };

  useEffect(() => {
    if (userData === null) {
      setUserData(CustomerData.data);
    }
  }, [userData]);

  return (
    <div>
      <Container>
        <Row className="mt-5">
          <Col>
            <h1>Reporting App</h1>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <Button
              className="m-2 float-right"
              color="danger"
              onClick={resetFilters}
            >
              Reset Filters
            </Button>
            <Button
              className="m-2 float-right"
              color="primary"
              onClick={determineMarketable}
            >
              Filter Marktable
            </Button>
          </Col>
          <UserTable customer_info={userData} />
        </Row>
      </Container>
    </div>
  );
};

export default Home;
