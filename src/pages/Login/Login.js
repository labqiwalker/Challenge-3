import React from 'react'
import { Container, Form, Alert } from 'react-bootstrap'
import Background from '../../assets/img/image 2.png'
import logo from '../../assets/img/Rectangle 62.png'

export const Login = () => {
  return (
      <div>
          <Container fluid>
              <div className='row'>
                  <div className='col-lg-8 text-center'>
                      <img src={Background} alt="" />
                  </div>
                  <div className='col-lg-4 bg-light'>
                      <img src={logo} alt="" />
                      <h3 className='text-center mt-5'>Welcome, Admin BCR</h3>

                      <Alert variant="danger">
                        <p>
                        Masukkan username dan password yang benar. Perhatikan penggunaan huruf kapital.
                        </p>
      </Alert>
                      <Form>
                          <div className='mb-3'>
                              <label for="email" className="form-label">Email</label>
                              <input type="email" className="form-control" id="email" placeholder='Contoh: johndee@gmail.com'></input>
                          </div>
                          <div className='mb-4'>
                              <label for="password" className="form-label">Password</label>
                              <input type="password" className="form-control" id="password" placeholder='6+ karakter'></input>
                          </div>
                          <button type="submit" className="btn btn-primary col-12 mb-3">Sign In</button>
                      </Form>
                      {/* <p>Email</p> */}
                  </div>
              </div>
          </Container>
      </div>
  )
}