import UserImg from '../../assets/user-img1.png'
import searchIcon from '../../assets/search-ico.png'
import callIcon from '../../assets/call-ico.png'
import settingsIcon from '../../assets/settings-ico.png'
const ChatHeader = () => {
    return (
        <div className="d-flex shadow-sm position-relative" style={{background:'white',width: '99.9%'}}>
            <img src={UserImg} alt="img" className='rounded-circle m-4' style={{width: '80px', height: '80px', objectFit: 'cover'}}/>
            <p className='mt-4 pt-2' style={{fontSize: '20px', fontWeight: '500'}}>Youssef Kamal</p>
            {/* Image of the chatting user */}
            <div className='bg-success rounded-circle position-absolute' style={{width: '20px', height: '20px', top: '62%', left: '4%', border: '2px solid white'}}></div>
            {/* thi div is for the status of the user (online -> greenCircle, offline->grayCircle) */}
            <p className='position-absolute' style={{color: '#3E83D4',top: '55%', left: '6.5%'}}>Typing...</p>
            {/* Typing status */}
            <div className='position-absolute d-flex flex-row top-50 gap-3' style={{transform: 'translateY(-50%)', right: "5%"}}>
                <div className='bg-light rounded-circle d-flex align-items-center justify-content-center' style={{width: '40px', height: '40px'}}>
                    <img src={searchIcon} alt="search" style={{width: '20px', height: '20px'}} />
                </div>
                <div className='bg-light rounded-circle d-flex align-items-center justify-content-center' style={{width: '40px', height: '40px'}}>
                    <img src={callIcon} alt="call" style={{width: '20px', height: '20px'}}/>
                </div>
                <div className='bg-light rounded-circle d-flex align-items-center justify-content-center' style={{width: '40px', height: '40px'}}>
                    <img src={settingsIcon} alt="search" style={{width: '20px', height: '20px'}} />
                </div>
            </div>
        </div>
    )
}

export default ChatHeader;