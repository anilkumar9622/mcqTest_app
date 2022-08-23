import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Instruction() {
  return (
    <>
      <div style={{ height: '3.5rem', background: '#b0d5d9', display: 'flex', justifyContent: "center", alignItems: 'center' }}> <h1>Wrocus Digital ION </h1></div>
      <div style={{ background: 'white', height: '91vh', gap: '2rem', position: 'relative' }}>
        <div style={{
          marginTop: '2rem', background: 'white', border: '1px solid #b0cbf7', borderRadius: "0rem", padding: '0rem', width: '50%', marginLeft: '21rem',
          display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', flexDirection: 'column',
        }}>
          <div style={{ background: '#d7f5f7', height: '2.5rem', width: '100%', textAlign: 'center', marginBottom: '1rem' }}><h2>Instruction</h2> </div>
          <h2>MCQ Quiz Test</h2>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20rem', marginBottom: '1rem' }}>
            <p style={{}}>Admin</p>
            <p style={{}}>Time: 45 min</p>
          </div>
          <p><b>Please read the instruction carefully before you attend the quiz</b></p>
          <div style={{ marginLeft: '2rem' }}>
            <ul>
              <li>Please complete all answers within the given time</li>
              <li>Write your answer in the answer box and click on Submit My Answer button</li>
              <li>If you can't answer any question, just skip in the answer box and click on Submit My Answer button, Otherwise you can't go to the next question.</li>
              <li>If the time limit is exceeded. quiz sessiion will be over automatically.</li>
              <li>You cannot attend the same quiz more than once.</li>
              <li>Please do not practice any unethical means to complete the quiz.</li>
            </ul>
          </div>
          <Button style={{ background: '#4ca33e', color: 'white', marginBottom: '.5rem' }}><Link to='/exam_portal'> Start Test</Link></Button>
        </div>

      </div>
    </>
  )
}
