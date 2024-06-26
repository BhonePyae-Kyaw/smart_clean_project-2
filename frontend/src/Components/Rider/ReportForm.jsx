import React, { useState } from 'react'
import './ReportForm.css'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const ReportForm = () => {
  const navigate = useNavigate()
  let { id } = useParams()
  const [reason, setReason] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const data = await axios.put(
        `http://localhost:8080/api/shop/riderorders/orderDetail/orderstatus/orderreport/${id}`,
        { reason }
      )
    } catch (err) {
      alert('cannot get data')
      console.log(err)
    }
  }

  return (
    <div className='report-form-container'>
      <h1>Make a report</h1>
      <form>
        <textarea
          className='reason-input'
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder='Please fill out the reason'
          required
        />
        <button type='submit' className='submit-button' onClick={handleSubmit}>
          <Link
            className='submit-button-link'
            to={`/Rider/RiderHomeScreen/RiderInfo/PickUpDetail/PickUpCust/ReportForm/ReportSuccess/${id}`}
          >
            Submit
          </Link>
        </button>
      </form>
    </div>
  )
}

export default ReportForm
