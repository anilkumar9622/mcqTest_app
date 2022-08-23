import { Alert, Button, Modal, Radio, Space } from 'antd'
import React, { cloneElement, useEffect, useState } from 'react'
import 'antd/dist/antd.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsFillPentagonFill } from 'react-icons/bs';
// import '../../dist/output.css'
import img from './1.png'

export default function Exam_portal() {
  const [data, setData] = useState()
  const [data2, setData2] = useState()
  const [prevNextPage, setPrevNextPage] = useState(1)
  const [score, setScore] = useState(true)
  const [selected, setselected] = useState(1)
  const [ans, setAns] = useState();
  const col = { color: "#f7f3f2" }

  const [color, setColor] = useState("#f7f3f2");

  var k = data2?.data;
  var d = data?.data;
  var s = d?.Welcome
  var r = d?.len
  var p = s?.data
  var i = p?.[0]

  // console.log("jump", prevNextPage)
  // console.log("color", color)
  // const changeColor = ()=>{
  //   setColor("#00FF00");
  // }

  let timeLeft = new Date().toLocaleTimeString();
  // if (difference > 0) {
  //   timer= {
  //     days: Math.floor(difference / (1000 * 60 * 60 * 24)),
  //     hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
  //     minutes: Math.floor((difference / 1000 / 60) % 60),
  //     seconds: Math.floor((difference / 1000) % 60)
  //   };
  // }
  // console.log("ff", difference)



  const [timer, setTimer] = useState(60);
  // console.log("t", timer)
  if (timer > 0) {
    setTimeout(() => {
      setTimer(timer - 1)

    }, 1000);


  }



  // const tim =new Date(new Date().setHours(1));



  const prevHandler = (e) => {
    setPrevNextPage(prevNextPage - 1)
    setselected(prevNextPage - 1)
    setAns(setdata)
  }

  const nextHandler = (e) => {
    localStorage.getItem(prevNextPage)
    userAns()
    setPrevNextPage(prevNextPage + 1)
    setselected(prevNextPage + 1)
    setColor(prevNextPage)
    setAns(null)
    // setColor("#83f250")
  }

  const setdata = localStorage.getItem(prevNextPage)
  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setAns(e.target?.value || 0);
    // setColor("#adf55f");
    // localStorage.getItem(prevNextPage -1)
    localStorage.setItem(prevNextPage, e.target.value);
  };


  const submitHandler = () => {
    setScore(score ? false : true);
  }



  const getData = async () => {
    await axios.get(`https://online-exam-manage-system.herokuapp.com?page=${prevNextPage}`)
      .then(res => {
        setData(res);
      }).catch(err => console.log(err))
  }

  const userAns = async () => {
    try {
      axios.patch(`https://online-exam-manage-system.herokuapp.com/saveAns?_id=${i?._id}`, { userRightAns: ans }).then((res) => {

        console.log(res)
      })
    } catch (e) {
      console.log(e)
    }
  }

  const userResult = async () => {
    try {
      await axios.get('https://online-exam-manage-system.herokuapp.com/checkPaper').then((res) => {
        setData2(res);
      })
    } catch (e) {
      console.log(e)
    }

  }

  useEffect(() => {
    getData();
    userResult();
  }, [prevNextPage, score,])


  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    userAns();
    userAns();
    setScore(true)
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const notify = () => toast.success("SuccessFully Submitted!!");
  return (
    <>

      <div style={{ height: '3.5rem', background: '#aebacf', display: 'flex', justifyContent: "space-around", alignItems: 'center' }}><div>
        {/* <img src={img} style={{width:'2rem'}}/> */}
        <h2>Wrocus Online Assessment Test</h2> </div>
        <h2>Time Left:  {timer} s</h2></div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ display: 'grid', width: '100rem', height: '80vh', background: '#d1e2e3', margin: '1.5rem 10rem', textAlign: 'center', borderRadius: '.7rem' }}>

          {p?.map((v, index) => {

            // if(id == v?.QusNumber )

            return (
              <>
                <div style={{ display: 'flex', flexDirection: '', justifyContent: 'start', alignItems: 'center', padding: '1rem 4rem' }}><h2>{v?.qusNumber}. {v?.Question || v?.question}</h2>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'start', padding: '-6rem 4rem' }}>

                  <Radio.Group buttonStyle="outline" size="large" onChange={onChange} value={ans} style={{ fontSize: "0rem", paddingBottom: '3rem', gap: '', paddingLeft: '4rem' }} >
                    <Space direction="vertical" style={{ fontSize: '0rem' }}>
                      <Radio value={v?.option[0]} style={{ display: 'flex', justifyContent: 'start', alignItems: 'center', gap: '1rem' }}><h2 style={{ paddingTop: '1rem' }}> {v?.option[0]}</h2></Radio>
                      <Radio value={v?.option[1]} style={{ display: 'flex', justifyContent: 'start', alignItems: 'center', gap: '1rem' }}><h2 style={{ paddingTop: '1rem' }}>  {v?.option[1]}</h2></Radio>
                      <Radio value={v?.option[2]} style={{ display: 'flex', justifyContent: 'start', alignItems: 'center', gap: '1rem' }}><h2 style={{ paddingTop: '1rem' }}>  {v?.option[2]}</h2></Radio>
                      <Radio value={v?.option[3]} style={{ display: 'flex', justifyContent: 'start', alignItems: 'center', gap: '1rem' }}><h2 style={{ paddingTop: '1rem' }}>  {v?.option[3]}</h2></Radio>

                    </Space>
                  </Radio.Group>

                </div>

                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'flex-end', width: '', height: '', background: '', paddingBottom: '2em', gap: '4rem' }}>

                  <div><Button disabled={v?.QusNumber === 1 ? true : false} onClick={(e) => {
                    prevHandler();
                    console.log("page", prevNextPage -1);
                    const d = localStorage.getItem(prevNextPage-1); console.log("value>>", d)
                  }}>Previous</Button></div>
                  <div> <Button disabled={ans != null ? false : true || prevNextPage === 7 ? true : false
                  } onClick={nextHandler}>Save & Next</Button></div>
                </div>
              </>
            )
          })}

        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'column', margin: '1.5rem 2rem 0rem -6rem', background: '#ddd', width: '40rem', height: '80vh', borderRadius: '.7rem', padding: '.6rem 0rem' }}>
          <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column' }}>
            <h2>Question {prevNextPage}/ 7
              {/* {r?.length} */}
            </h2>

            <div style={{ display: 'flex', flexWrap: 'wrap', cursor: 'pointer', padding: '-6rem -.2rem' }}>
              {
                r?.map((v, i) => {
                  if (i <= 6) {
                    var f = "green"
                    return (
                      <>
                        <div style={{ display: 'flex', }} >
                          <h3 style={{
                            width: '2.4rem', height: '2.4rem', fontSize: '1.5rem', marginLeft: '1.4rem',
                            background: selected == i + 1 ? '#edc558' : '#edc558' && color === i + 1 ? '#90d65e' : '#f7f3f2', display: 'flex',
                            justifyContent: 'center', alignItems: 'center', border: '1px tranparent',
                            borderRadius: '10rem'
                          }}
                            // onClick={quesJump}
                            onClick={(e) => {
                              setPrevNextPage(i + 1);
                              setselected(i + 1);
                              console.log("d", color)
                              localStorage.setItem(`color${prevNextPage}`, '#edc558')
                              localStorage.getItem(prevNextPage)
                            }}

                          >{i + 1}</h3>

                        </div>
                      </>
                    )
                  }
                })
              }
            </div>
          </div>
          <Button disabled={prevNextPage === 7 ? false : true} onClick={showModal}>Submit</Button>

          <Modal title="All the best" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              {score ? <Button onClick={submitHandler} style={{ background: '#198754', color: 'white' }}>View score</Button> :
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                  <h2><b style={{ color: 'green' }}>Your marks: </b>{k?.StudentPercentage}%</h2>
                  <h2><b style={{ color: 'green' }}>Your right answer: </b>{k?.Student_Right_Answer}</h2>
                  <h2><b style={{ color: 'green' }}>Total question: </b>{k?.total_Number_of_Question}</h2>
                </div>}
            </div>
          </Modal>
        </div>



      </div>
    </>
  )
}
