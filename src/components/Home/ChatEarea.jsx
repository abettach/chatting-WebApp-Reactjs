import ChatHeader from '../ChatAera/ChatHeader'
import ChatZone from '../ChatAera/ChatZone'
import MessageZone from '../ChatAera/MessageZone'

const ChatEarea = () => {
    return (
        <div className='bg-light d-flex flex-column align-items-end' style={{width: '70%'}}>
            <ChatHeader />
            <ChatZone />
            <MessageZone />
        </div>
    )
}

export default ChatEarea;