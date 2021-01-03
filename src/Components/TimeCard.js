import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card, CardTitle } from 'reactstrap';
import Timer from './Timer';

const TimeCard = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  const time = new Date();
  time.setMinutes(props.duration)
  return (
    <div>
      <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Start</Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>        
          <CardTitle><Timer duration = {props.duration} /></CardTitle>
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default TimeCard;