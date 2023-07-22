import { useState } from 'react';
import "./PR.css"
const PatientRegistration = () => {
    const [formData, setFormData] = useState({
        patientId: '',
        firstName: '',
        lastName: '',
        addressLine: '',
        addressLine2: '',
        state: '',
        city: '',
        pinCode: '',
        phoneNumber: '',
        aadharNo: '',
        gender: '',
        dateOfBirth: '',
        password: '',
        confirmPassword: '',
        agreeTerms: false,
      });
    
      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        setFormData((prevData) => ({ ...prevData, [name]: newValue }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., send data to the server
        console.log(formData);
      };
    return (
        <div className="App">
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-column">
              <label>Patient Id</label>
              <input
                type="number"
                name="patientId"
                value={formData.patientId}
                onChange={handleChange}
              />
            </div>
            <div className="form-column">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-column">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="form-column">
              <label>Address Line</label>
              <input
                type="text"
                name="addressLine"
                value={formData.addressLine}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-column">
              <label>Address Line 2</label>
              <input
                type="text"
                name="addressLine2"
                value={formData.addressLine2}
                onChange={handleChange}
              />
            </div>
            <div className="form-column">
              <label>State</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-column">
              <label>City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
            </div>
            <div className="form-column">
              <label>PIN Code</label>
              <input
                type="number"
                name="pinCode"
                value={formData.pinCode}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-column">
              <label>Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>
            <div className="form-column">
              <label>Aadhar No.</label>
              <input
                type="text"
                name="aadharNo"
                value={formData.aadharNo}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-column">
              <label>Gender</label>
              <div>
                <label>
                  <input
                    type="checkbox"
                    name="gender"
                    value="male"
                    checked={formData.gender === 'male'}
                    onChange={handleChange}
                  />{' '}
                  Male
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="gender"
                    value="female"
                    checked={formData.gender === 'female'}
                    onChange={handleChange}
                  />{' '}
                  Female
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="gender"
                    value="other"
                    checked={formData.gender === 'other'}
                    onChange={handleChange}
                  />{' '}
                  Other
                </label>
              </div>
            </div>
            <div className="form-column">
              <label>Date of Birth</label>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-column">
              <label>Enter Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="form-column">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-column center">
              <input
                type="checkbox"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
              />
              <p>
                I agree with the terms and conditions by creating an account.
              </p>
            </div>
          </div>
          <div className="form-row center">
            <button type="submit">Proceed to Payment</button>
          </div>
        </form>
      </div>
    );
};

export default PatientRegistration;