import img from '../../assets/img.png'
import searchIcon from '../../assets/search-ico.png'
import './friends.css'

const UserZone = () => {
    return (
        <div className='container d-flex flex-column align-items-center h-auto'>
            <img src={img} alt="" className='rounded-circle mb-4' style={{width: '200px', height: "200px", marginTop: '80px'}}/>
            <div className='position-absolute bg-success rounded-circle' style={{width: "25px", height: '25px', left: '56%', top: '17%', border: '4px solid white'}}></div>
            <p className='mb-4' style={{fontSize: "35px", fontWeight: '500'}}><span className='text-capitalize'>elizabeth</span><span className='text-capitalize'> charlotte</span></p>
            <div className='rounded-4 border border-0 bg-light shadow-sm mb-4 position-relative' style={{width:'40%', height: '50px'}}>
                <img src={searchIcon} alt="search" className='position-absolute' style={{top: '15px', left: '35px', width: '20px', hegith: '20px'}} />
                <input type="text" name="search" id="search" placeholder='Search...' className='rounded-4 border border-0 bg-light' style={{width:'100%', height: '100%', textIndent: "20%"}}/>
            </div>
            <span className='bg-black w-75 mb-4' style={{height: '1px'}}></span>
        </div>
    )
}

export default UserZone;