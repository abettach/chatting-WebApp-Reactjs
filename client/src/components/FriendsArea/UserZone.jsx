import img from '../../assets/img.png'
import searchIcon from '../../assets/search-ico.png'
import './friends.css'
import defaultImg from '../../assets/default.png'
const UserZone = ({user}) => {
    return (
        <div className='container d-flex flex-column align-items-center h-auto'>
            <div className='position-relative rounded-circle mt-5 mb-3 bg-danger' style={{width: '200px', height: "200px", marginTop: '80px'}}>
                <img src={user.img || defaultImg} alt="" className='rounded-circle w-100 h-100' style={{objectFit: 'cover'}}/>
                <div className='position-absolute start-50 ms-5 mb-3 bottom-0 bg-success rounded-circle' style={{width: "25px", height: '25px', border: '4px solid white'}}></div>
            </div>
            <p className='mb-4 fs-2' style={{ fontWeight: '500'}}><span className='text-capitalize'>{user.first_name}</span><span className='text-capitalize'> {user.last_name}</span></p>
            <div className='rounded-4 border border-0 bg-light shadow-sm mb-4 position-relative' style={{width:'50%', height: '50px'}}>
                <img src={searchIcon} alt="search" className='position-absolute m-3' style={{width: '20px', hegith: '20px'}} />
                <input type="text" name="search" id="search" placeholder='Search...' className='rounded-4 border border-0 bg-light' style={{width:'100%', height: '100%', textIndent: "20%"}}/>
            </div>
            <span className='bg-black w-75 mb-4' style={{height: '1px'}}></span>
        </div>
    )
}

export default UserZone;