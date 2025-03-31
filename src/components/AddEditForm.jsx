import { useEffect, useState } from 'react';
import './AddEditForm.css';

const initialValues = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  birthday: '',
  image_url: '',
};

function AddEditForm({ submitData, user = null, closeModal }) {
  const [dataForm, setDataForm] = useState(initialValues);

  useEffect(() => {
    if (user) {
      const formattedUser = {
        ...user,
        birthday: user.birthday ? user.birthday.split('T')[0] : ''
      };
      setDataForm(formattedUser);
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      submitData(user.id, dataForm);
    } else {
      submitData(dataForm);
    }
    setDataForm(initialValues);
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit} className='form'>
      <div>
        <label>
          First Name:
          <input
            type='text'
            name='first_name'
            placeholder='First Name'
            value={dataForm.first_name}
            onChange={handleChange}
            className='form-input'
          />
        </label>
      </div>
      <div>
        <label>
          Last Name:
          <input
            type='text'
            name='last_name'
            placeholder='Last Name'
            value={dataForm.last_name}
            onChange={handleChange}
            className='form-input'
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type='email'
            name='email'
            placeholder='Email'
            value={dataForm.email}
            onChange={handleChange}
            className='form-input'
          />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input
            type='password'
            name='password'
            placeholder='Password'
            value={dataForm.password}
            onChange={handleChange}
            className='form-input'
          />
        </label>
      </div>
      <div>
        <label>
          Birthday:
          <input
            type='date'
            name='birthday'
            placeholder='Birthday'
            value={dataForm.birthday.split('T')[0]}
            onChange={handleChange}
            className='form-input'
          />
        </label>
      </div>
      <div>
        <label>
          Image URL:
          <input
            type='url'
            name='image_url'
            placeholder='Image URL'
            value={dataForm.image_url}
            onChange={handleChange}
            className='form-input'
          />
        </label>
      </div>
      <div className='form-actions'>
        <button type='submit' className='submit-btn'>{user ? 'Edit' : 'Add'}</button>
        {user && <button type='button' onClick={() => { setDataForm(initialValues); closeModal(); }} className='cancel-btn'>Cancel</button>}
      </div>
    </form>
  );
}

export default AddEditForm;