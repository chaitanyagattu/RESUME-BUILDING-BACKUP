
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Question1() {
  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <form>
      <div className="card w-100 max-w-lg">
        <div className="card-header">
        <h4 className="card-title text-center">Digital Marketing</h4>
          <h5 className="card-title">Question 1</h5>
          <p className="card-text">Which one do you like the most?</p>
        </div>
        <div className="card-body">
          <div className="form-check">
            <input className="form-check-input" type="radio" name="q1" id="q1a1" value="0" />
            <label className="form-check-label" htmlFor="q1a1">
              The first one
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="q1" id="q1a2" value="1" />
            <label className="form-check-label" htmlFor="q1a2">
              The second one
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="q1" id="q1a3" value="2" />
            <label className="form-check-label" htmlFor="q1a3">
              The third one
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="q1" id="q1a4" value="3" />
            <label className="form-check-label" htmlFor="q1a4">
              The fourth one
            </label>
          </div>
        </div>

        <div className="card w-100 max-w-lg">
        <div className="card-header">
          <h5 className="card-title">Question 2</h5>
          <p className="card-text">Which one do you like the most?</p>
        </div>
        <div className="card-body">
          <div className="form-check">
            <input className="form-check-input" type="radio" name="q1" id="q1a1" value="0" />
            <label className="form-check-label" htmlFor="q1a1">
              The first one
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="q1" id="q1a2" value="1" />
            <label className="form-check-label" htmlFor="q1a2">
              The second one
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="q1" id="q1a3" value="2" />
            <label className="form-check-label" htmlFor="q1a3">
              The third one
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="q1" id="q1a4" value="3" />
            <label className="form-check-label" htmlFor="q1a4">
              The fourth one
            </label>
          </div>
        </div>
        
        <div className="card w-100 max-w-lg">
        <div className="card-header">
          <h5 className="card-title">Question 3</h5>
          <p className="card-text">Which one do you like the most?</p>
        </div>
        <div className="card-body">
          <div className="form-check">
            <input className="form-check-input" type="radio" name="q1" id="q1a1" value="0" />
            <label className="form-check-label" htmlFor="q1a1">
              The first one
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="q1" id="q1a2" value="1" />
            <label className="form-check-label" htmlFor="q1a2">
              The second one
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="q1" id="q1a3" value="2" />
            <label className="form-check-label" htmlFor="q1a3">
              The third one
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="q1" id="q1a4" value="3" />
            <label className="form-check-label" htmlFor="q1a4">
              The fourth one
            </label>
          </div>
        </div>
        
        <div className="card-footer d-flex justify-content-between">
        <Link to="/question1">
          <Button variant="outline-primary">Back</Button>
        </Link>
        <Link to="/faq">
          <Button variant="outline-primary">Next</Button>
        </Link>
        </div>
      </div>
      </div>
      </div>
      </form>
    </div>
  );
}
export default Question1;