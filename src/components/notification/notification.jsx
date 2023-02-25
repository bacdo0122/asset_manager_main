import { useDispatch, useSelector } from 'react-redux';
import './notification.scss'
import ClearIcon from '@mui/icons-material/Clear';
import axios from 'axios';
import { setNotification } from '../../reducer/notification';

const NotificationTable = () => {

    const notification = useSelector(state => state.notification.notifications)
    console.log("notification:", notification);
    const dispatch = useDispatch()

    const handleDelete = async (id) => {
        try {
            await axios.delete(process.env.REACT_APP_API_BASE_USER_URL + `notification/delete/${id}`)
             dispatch(setNotification(notification.filter(item => item._id !== id)))    
        } catch (error) {
            throw new Error("can't delete a notification :" +error)
        }
    }

    return (
       <div className='notification-wrap'>
            <div className="notification">
                <div className="notification-inner">
                    <h2>Alert</h2>
                    <ul className="notification-list">
                        {notification && notification.map((item) => {
                            return <li className="notification-item" key={item._id}>
                                <div className="notification-title">
                                    {CovertTitle(item)}
                                </div>
                                <div className="delete-btn">
                                    <ClearIcon onClick={()=>handleDelete(item._id)} />
                                </div>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
       </div>
    )
} 

const CovertTitle = (item) => {
    switch(item.title){
        case "borrow_asset": 
        return `${item.userID.username} want to borrow ${item.assetName}` 
        case "expired_asset": 
        return `${item.assetName} has expired, do you want to renew it?` 
        case "allow_borrow_asset":
        return `You have been approved to borrow ${item.assetName}` 
    }
}

export default NotificationTable;