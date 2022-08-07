import messagesIcon from '../../assets/messages-icon.png'
import userImg from '../../assets/1.png'
import userImg1 from '../../assets/2.png'
import userImg2 from '../../assets/3.png'
import vuImg from '../../assets/vu.png'

const AllMessages = () => {
    const users = [{first_name: 'emily', last_name: 'abigail', last_message: 'Yes yes you are right', time: '7:30 PM', notificationNum: 0, img: userImg, vu: false, isTyping: false},
                    {first_name: 'layla', last_name: 'madison', last_message: 'Hello elizabeht how are you', time: '5:10 PM', notificationNum: 0, img: userImg1, vu: true, isTyping: false},
                    {first_name: 'nova', last_name: 'willow', last_message: 'how are you', time: '6:30 PM', notificationNum: 8, img: userImg2, vu: true, isTyping: false }]
    return (
        <div className="mt-4" style={{width: '65%'}}>
            <div className='d-flex align-items-start'>
                <img src={messagesIcon} alt="Pin" className='me-1 p-1' style={{height: '35px'}}/>
                <p className='text-uppercase mt-1' style={{fontWeight: '600', fontSize: '18px'}}>All Message</p>
            </div>
            {
                users.map((e) => {
                    return (
                        <div className='bg w-100 d-flex rounded-4 position-relative' key={Math.random()}>
                            <img src={e.img} alt="" className='rounded-4 m-3' style={{width: '60px', height: '60px', objectFit: 'cover'}}/>
                            <div className='d-flex flex-column'>
                                <p  className='mb-4 mt-3' style={{fontWeight: "500", fontSize: '20px', height: '10px'}}><span className='text-capitalize'>{e.first_name}</span><span className='text-capitalize'> {e.last_name}</span></p>
                                <p style={{color: '#BFBFBF', height: '10px',marginTop: '3px', fontSize: '14px'}}>{e.isTyping ? "Typing..." : e.last_message}</p>
                            </div>
                            <p className='position-absolute end-0 mt-4' style={{color: '#BFBFBF', fontSize: "14px"}}>{e.time}</p>
                            <span className={`rounded-circle position-absolute end-0 bottom-0 mb-3 d-flex align-items-center justify-content-center ${e.notificationNum ? '' : 'd-none'}`} style={{width: '28px', height: '28px', backgroundColor: 'salmon', color: 'white', marginTop:'5px'}}>{e.notificationNum}</span>
                            {!e.vu && <img src={vuImg} alt="" className='position-absolute end-0 bottom-0 mb-3 me-1' style={{width: '20px', height: '20px'}}/>}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AllMessages;