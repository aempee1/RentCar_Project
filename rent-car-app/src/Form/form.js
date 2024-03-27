import React, { useState } from 'react';
import './form.css'; // Import the CSS file
import Navbar from '../Navbar/navbar';
import Payment from '../Payment/payment';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    package: '',
    date: '',
    day: '',
  })

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(formData)
  }

  return (
    <><><Navbar />
          <div className='bg-form'>
              <div class="wrapper-form">
                  <form nSubmit={handleSubmit}>
                      <h1 class="topic">Rent Van</h1>
                      <h2>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</h2>
                      <div class='input-box-form'>
                          <input type="text" placeholder="Name" name='name' id="name" value={formData.name} onChange={handleChange} required />
                      </div>
                      <div class='set-col'>
                          <div class='input-box-form'>
                              <input type="tel" placeholder="Phone" name='phone' id="phone" value={formData.phone} onChange={handleChange} required />
                          </div>
                          <div class='input-box-form'>
                              <input type="email" placeholder="E-mail" name='email' id="email" value={formData.email} onChange={handleChange} required />
                          </div>
                      </div>
                      <div class='input-box-form'>
                          <select class='selected' placeholder="package" name='package' id="package" value={formData.package} onChange={handleChange} required>
                              <option value="">Choose a package</option>
                              <option value="package1">Package 1</option>
                              <option value="package2">Package 2</option>
                              <option value="package3">Package 3</option>
                          </select>
                      </div>
                      <div class='set-col'>
                          <div class='input-box-form'>
                              <input type="date" name="date" id="date" value={formData.date} onChange={handleChange} required />
                          </div>
                          <div class='input-box-form'>
                              <input type="text" placeholder="How many days" name='day' id="day" value={formData.day} onChange={handleChange} required />
                          </div>
                      </div>
                      <button class="btn-form" type="submit">Rent Now</button>
                  </form>
              </div>
          </div></>
        <Payment /></>
  )
}

export default Form
