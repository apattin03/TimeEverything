import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card, CardTitle } from 'reactstrap';
import Timer from './Timer';

const TimeCard = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  const time = new Date();
  time.setMinutes(time.getMinutes() + props.duration)
  return (
    <div>
      <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Start Timer!</Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>        
          <CardTitle><Timer  expiryTimestamp={time} /></CardTitle>
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default TimeCard;