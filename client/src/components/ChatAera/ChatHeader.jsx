import UserImg from '../../assets/user-img1.png'
import searchIcon from '../../assets/search-ico.png'
import callIcon from '../../assets/call-ico.png'
import settingsIcon from '../../assets/settings-ico.png'
const ChatHeader = () => {
    return (
        <div className="d-flex shadow-sm position-relative" style={{background:'white',width: '99.9%'}}>
            <div className='rounded-circle m-4 position-relative bg-primary'>
                <img src={UserImg} alt="img" className='rounded-circle' style={{width: '80px', height: '80px', objectFit: 'cover'}}/>
            <div className='bg-success rounded-circle position-absolute end-0 bottom-0' style={{width: '20px', height: '20px', border: '2px solid white'}}></div>
            </div>
            <div className=''>
                <p className='mt-4' style={{fontSize: '20px', fontWeight: '500'}}>Youssef Kamal</p>
                <p  style={{color: '#3E83D4'}}>Typing...</p>
            </div>
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