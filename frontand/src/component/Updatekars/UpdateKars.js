import React, { useEffect, useState } from 'react';
import "./UpdateKars.css";
import { UpdateKarrs, getUniqueUser } from '../../api/UserListApi';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateKars = () => {
  
  const [name, setName] = useState('');
  const [categories, setCategories] = useState('');
  const [series, setSeries] = useState('');


  
  const navigate = useNavigate();
  const { id } = useParams();

  const handelUpdate = async (idcon, values) => {
    await UpdateKarrs(idcon, values);
    navigate('/list');
  }

  const getUniqueId = async (UserId) => {
    const data = await getUniqueUser(UserId);
    setName(data.name);
    setSeries(data.series);
    setCategories(data.categories);
  }

  useEffect(() => {
    if (id) {
      getUniqueId(id);
    }
  }, [id]);
  

  return (
    <div>
      <div className='test'>
        <form id="login-form" className="login-form" autoComplete="off">
          <h1>Add contact Form</h1>
          <div>
            <label className="label-text">
              <input
                type="text"
                className="text"
                name="Name"
                placeholder="Name"
                tabIndex="1"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <span className="required">Name</span>
            </label>
          </div>
          <div>
            <label className="label-email">
              <input
                type="text"
                className="text"
                name="categories"
                placeholder="categories"
                tabIndex="1"
                required
                value={categories}
                onChange={(e) => setCategories(e.target.value)}
              />
              <span className="required">categories</span>
            </label>
          </div>

          <div>
            <label className="label-password">
              <input
                type="text"
                className="text"
                name="series"
                placeholder="series"
                tabIndex="2"
                required
                value={series}
                onChange={(e) => setSeries(e.target.value)}
              />
              <span className="required">series</span>
            </label>
          </div>
          <div className="email">
            <button onClick={() => handelUpdate(id, { name, categories, series })}>Update New Kars</button>

          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateKars
