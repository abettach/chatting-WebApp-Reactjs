import ChatHeader from '../ChatAera/ChatHeader'
import ChatZone from '../ChatAera/ChatZone'
import MessageZone from '../ChatAera/MessageZone'

const ChatEarea = () => {
    return (
        <div className='bg-light d-flex flex-column align-items-end position-relative' style={{width: '70%'}}>
            <ChatHeader />
            <ChatZone />
            <div className='position-absolute bottom-0 start-0 w-100'>
                <MessageZone />
            </div>
        </div>
    )
}

export default ChatEarea;