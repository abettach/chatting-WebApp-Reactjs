import UserZone from "../FriendsArea/UserZone";
import PinnedMessages from "../FriendsArea/PinnedMessages";
import AllMessages from "../FriendsArea/AllMessages";
import axios from "axios";
import { useNavigate } from "react-router";
const FriendsArea = () => {
  const pinnedData = true;
    const navigation = useNavigate();
  const handleLogout = async () => {
      await axios.post('/api/logout');
      navigation("/login")
  }
  return (
    <div
      className="flex-grow-1 position-relative d-flex flex-column align-items-center overflow-auto"
      style={{ height: "100vh" }}
    >
      <button className="position-absolute start-0 top-0 m-4 border border-0 btn btn-primary rounded-4"
      onClick={handleLogout}>
        Logout
      </button>
      <UserZone />
      {pinnedData && <PinnedMessages />}
      <AllMessages />
    </div>
  );
};

export default FriendsArea;
