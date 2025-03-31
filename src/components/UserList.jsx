import UserCard from "./UserCard";
import './UserList.css';

function UserList({ users, showEditModal, showDeleteConfirmation}) {
  return (
    <div className="user-list">
        {users.map((user) => (
            <UserCard 
                key={user.id} 
                user={user}
                showEditModal={showEditModal}
                showDeleteConfirmation={showDeleteConfirmation}
            />
      ))}

      {users.length === 0 && <p className="no-users">No users found</p>}
    </div>
  )
}

export default UserList