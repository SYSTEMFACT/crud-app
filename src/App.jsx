import { createPortal } from 'react-dom'
import { useCrudApi } from './hooks/useCrudApi'
import Modal from './components/Modal'
import AddEditForm from './components/AddEditForm'
import UserList from './components/UserList'
import { useModal } from './hooks/useModal'
import './index.css'

const baseUrl = 'https://users-crud-api-production-9c59.up.railway.app/api/v1/users/'

function App() {
  const [users, { create, update, remove }] = useCrudApi(baseUrl)
  const modal = useModal()
  
  const createUser = (newUser) => {
    create(newUser)
    modal.closeModal()
  }

  const showAddModal = () => {
    modal.showModal()
    modal.setChild(<AddEditForm submitData= {createUser} closeModal={modal.closeModal}/>)
  }

  const updateUser = (id, updatedUser) => {
    update(id, updatedUser)
    modal.closeModal()
  }

  const showEditModal = (user) => {
    modal.showModal()
    modal.setChild(<AddEditForm submitData={updateUser} user={user} closeModal={modal.closeModal}/>)
  }

  const confirmDelete = (id) => {
    remove(id);
    modal.setChild(
      <div className="delete-confirmation">
        <h2>User deleted successfully!</h2>
        <button onClick={modal.closeModal} className="ok-btn">OK</button>
      </div>
    );
  };

  const rejectDelete = () => {
    modal.closeModal()
  }

  const showDeleteConfirmation = (user) => {
    modal.showModal()
    modal.setChild(
      <div className="delete-confirmation">
        <h2>Are you sure want to delete {user.first_name}?</h2>
        <div className="delete-buttons">
          <button onClick={() => confirmDelete(user.id)} className="confirm-btn">Yes</button>
          <button onClick={rejectDelete} className="cancel-btn">No</button>
        </div>
      </div>
    )
  }

  const getAvatarUrl = (id) => {
    return `https://avatars.dicebear.com/api/identicon/${id}.svg`;
  };
 
  return (
    <div className="app">
      <div className="header">
        <h1 className="app-title">Users App</h1>
        <button onClick={showAddModal} className="add-btn">
          Add new user
        </button>
      </div>

      {users && 
        <UserList 
        users={users.map((user) => ({
          ...user,
          image_url: user.image_url || getAvatarUrl(user.id),
        }))}
          showEditModal={showEditModal}
          showDeleteConfirmation={showDeleteConfirmation}
        />
      }

      {createPortal(
         <Modal openModal={modal.isOpen} closeModal={modal.closeModal}>
         {modal.child}
       </Modal>,
       document.body
      )}
    </div>
  )
}

export default App

