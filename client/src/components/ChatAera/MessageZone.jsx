import smile_face from '../../assets/smile-face.png'
import mic from '../../assets/mic.png'
import upload from '../../assets/upload.png'
import line from '../../assets/vertical-line.png'
import submitIcon from '../../assets/submit.png'

import './chat.css'
const MessageZone = () => {
    return (
        <div className="d-flex align-items-center justify-content-center shadow-sm position-relative" style={{background:'white',width: '99.9%'}}>
            <form action="" className='w-100 h-100'>
                <img src={smile_face} alt="" className='position-absolute' style={{left: '3.5%', top: "38%", width: '40px', height: '40px', cursor: 'pointer'}}/>
                <img src={line} alt="" className='position-relative' style={{left: '6%', height: '40%'}} />
                <img src={line} alt="" className='position-relative' style={{left: '93%', height: '40%'}} />
                <img src={mic} alt="" className='position-absolute' style={{right: '10%', height: '20%', top: '40%', cursor: 'pointer'}} />
                <img src={upload} alt="" className='position-absolute' style={{right: '8%', height: '20%', top: '40%', cursor: 'pointer'}} />
                <button type="submit" className='w-0 h-0 border border-0 bg-transparent'><img src={submitIcon} alt="" className='position-absolute' style={{right: '4%', height: '25%', top: '40%', cursor: 'pointer'}} /></button>
                <input type="text" name="" placeholder='Your messages...' id="chatInput" className='m-4 rounded-4 border border-0 bg-light' style={{width: '95%', height: '80px', textIndent: '5%'}}/>
            </form>
        </div>
    )
}

export default MessageZone;