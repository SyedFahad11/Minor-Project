import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Container } from 'react-bootstrap';

const UserRegister: React.FC = () => {
  const [type, setType] = useState('Manufacturer');

  const handleTypeChange = (e: React.ChangeEvent<any>) => {
    setType(e.target.value);
  };

  return (
    <Container className="d-flex flex-column align-items-center justify-content-center" style={{ height: '100vh' }}>
      <div className="border p-4 shadow-sm rounded" style={{ maxWidth: '800px', width: '100%', backgroundColor: '#ffffff' }}>
        <h1 className="text-center mb-4 text-dark" style={{ fontSize: '2.5rem' }}>Register Your Wallet</h1>
        <Form>
          <Form.Group controlId="typeSelect" className="mb-3">
            <Form.Label>Type</Form.Label>
            <Form.Control as="select" value={type} onChange={handleTypeChange}>
              <option value="Manufacturer">Manufacturer</option>
              <option value="Supplier">Supplier</option>
              <option value="Consumer">Consumer</option>
            </Form.Control>
          </Form.Group>

          {type === 'Manufacturer' && (
            <>
              <Form.Group controlId="companyName" className="mb-3">
                <Form.Label>Company Name</Form.Label>
                <Form.Control type="text" placeholder="Enter company name" />
              </Form.Group>

              <Form.Group controlId="userName" className="mb-3">
                <Form.Label>User Name</Form.Label>
                <Form.Control type="text" placeholder="Enter user name" />
              </Form.Group>

              <Form.Group controlId="regNo" className="mb-3">
                <Form.Label>Registration No.</Form.Label>
                <Form.Control type="text" placeholder="Enter registration number" />
              </Form.Group>
            </>
          )}

          {type === 'Supplier' && (
            <Form.Group controlId="userNameSupplier" className="mb-3">
              <Form.Label>User Name</Form.Label>
              <Form.Control type="text" placeholder="Enter user name" />
            </Form.Group>
          )}

          {type === 'Consumer' && (
            <Form.Group controlId="userNameConsumer" className="mb-3">
              <Form.Label>User Name</Form.Label>
              <Form.Control type="text" placeholder="Enter user name" />
            </Form.Group>
          )}

          <Button variant="dark" type="submit" className="w-100 py-2">
            Register
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default UserRegister;
