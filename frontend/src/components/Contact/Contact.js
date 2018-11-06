
import React, { Component } from 'react';
import { FormGroup,ControlLabel, Button, Form, Col} from 'react-bootstrap';
 import { Fa } from "mdbreact";
import "./Contact.css"
class ContactPage extends Component {
  render() {
    return(
      <div>
      
      <Form  horizontal center bsSize="large" className="form" action="mailto:aynazewd@yahoo.com" method="post" enctype="text/plain">
      <h4><Fa pencil  className="fa pencil" /> Contact form</h4>
      <FormGroup>
      
        <Col componentClass={ControlLabel} sm={2}>Name</Col>
        
        <Col sm={6}>
          <input type="name" className="form-control" id="name" placeholder="Enter Name"/>
        </Col>
        
      </FormGroup>
      <FormGroup>
      <Col componentClass={ControlLabel} sm={2}>Email</Col>
        <Col sm={6}>
          <input type="email" className="form-control" id="email" placeholder="Enter email"/>
        </Col>
        
      </FormGroup>
      <FormGroup>
      <Col componentClass={ControlLabel} sm={2}>Message</Col>
        <Col sm={6}>
          <input type="message" componentClass="textarea" className="form-control" id="msg" placeholder="message"/>
        </Col>
        
      </FormGroup>


      <Button  bsSize="large" id="submit1" className="btn ">Submit</Button>
    </Form>
    <br/>
      </div>
    
    );
  };
}

export default ContactPage;