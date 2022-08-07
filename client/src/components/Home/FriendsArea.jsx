import UserZone from "../FriendsArea/UserZone";
import PinnedMessages from "../FriendsArea/PinnedMessages";
import AllMessages from "../FriendsArea/AllMessages";
const FriendsArea = () => {
    const pinnedData = true;

    return (
        <div className="flex-grow-1 position-relative d-flex flex-column align-items-center" style={{height: '100vh'}}>
            <UserZone />
            {pinnedData && <PinnedMessages />}
            <AllMessages />
        </div>
    )
}

export default FriendsArea;