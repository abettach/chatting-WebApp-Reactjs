import ChatEarea from "./ChatEarea";
import FriendsArea from "./FriendsArea";

const Home = () => {
    return (
        <div className="d-flex">
            <FriendsArea />
            <ChatEarea />
        </div>
    )
}

export default Home;