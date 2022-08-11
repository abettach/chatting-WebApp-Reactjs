import UserZone from "../FriendsArea/UserZone";
import PinnedMessages from "../FriendsArea/PinnedMessages";
import AllMessages from "../FriendsArea/AllMessages";
import axios from "axios";
import { useNavigate } from "react-router";
import settingsImg from '../../assets/settings.png'
import { useState } from "react";
const FriendsArea = ({user}) => {
	const pinnedData = true;
    const navigation = useNavigate();
	const [showRightPannel, setShowRightPannel] = useState(false);

	console.log("suerInfo=", user)
	const handleLogout = async () => {
		await axios.post('/api/logout');
		window.location.href = 'http://localhost:3000/login'
	}
	const handleShowRightPannel = () => {
		setShowRightPannel((curr) => !curr);
	}
  return (
    <div className="flex-grow-1 position-relative d-flex flex-column align-items-center overflow-auto" style={{ height: "100vh" }}>
      {/* <a href="/login" className="position-absolute start-0 top-0 m-4 border border-0 btn btn-primary rounded-4"
      onClick={handleLogout}>
        Logout
      </a> */}
      <UserZone user={user}/>
      {pinnedData && <PinnedMessages />}
      <AllMessages />
      <div className="position-absolute start-0 ms-5 mt-4 rounded-circle d-flex align-items-center justify-content-center" style={{width: '50px', height: '50px', background: '#E6F2FE', cursor: 'pointer'}}
	  onClick={handleShowRightPannel}>
        <img src={settingsImg} className='' style={{width: '20px', height: '20px'}} alt=""/>
		{
			showRightPannel &&
			<div className="shadow position-absolute start-0 top-0 mt-5 rounded-3 d-flex" style={{width: '290px', height: '220px', background: '#FFFFFF', zIndex: '2'}}>
			<div className="d-flex flex-column justify-content-center ms-4 mt-3 gap-2" style={{color: '#C4C4C4', fontWeight: '500', fontSize: '20px'}}>
	  			<p style={{cursor: 'pointer'}}>New chat</p>
				<p style={{cursor: 'pointer'}}>New group</p>
				<p style={{cursor: 'pointer'}}>Settings</p>
				<a href="/login" style={{cursor: 'pointer', textDecoration: 'none', color: '#C4C4C4	'}} onClick={handleLogout}>Log out</a>
			</div>
        </div>
		}
      </div>
    </div>
  );
};

export default FriendsArea;
