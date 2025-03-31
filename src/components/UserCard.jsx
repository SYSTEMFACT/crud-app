import { LuTrash2, LuPencil } from "react-icons/lu"
import { BsCake2 } from "react-icons/bs"
import './UserCard.css'

function UserCard({ user, showEditModal, showDeleteConfirmation }) {
  return (
    <div className="user-card">
      <div className="user-info">
        <img src={user.image_url || 'https://via.placeholder.com/150'} alt={user.first_name} className="user-avatar" />
        <div className="user-details">
          <h2 className="user-name">{user.first_name} {user.last_name}</h2>
          <p className="user-email">{user.email}</p>
          <p className="user-birthday"><BsCake2 /> {user.birthday.split('T')[0]}</p>
        </div>
      </div>
      <div className="user-actions">
        <button onClick={() => showEditModal(user)} aria-label="Edit" className="edit-btn">
          <LuPencil />
        </button>
        <button onClick={() => showDeleteConfirmation(user)} aria-label="Delete" className="delete-btn">
          <LuTrash2 />
        </button>
      </div>
    </div>
  )
}

export default UserCard