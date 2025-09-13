'use client';

import { useState } from 'react';

export default function ProfilePage() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'นายจิรัฏฐ์ มุณีกาญจน์',
      email: 'jiratmuneekarn@gmail.com',
      phone: '0980180435',
      age: 20,
      address: 'ระนอง'
    },
    {
      id: 2,
      name: 'นายชนสรณ์ หนูแก้ว',
      email: 'cnschanasorn@gmail.com',
      phone: '0624395704',
      age: 20,
      address: 'กระบี่'
    }
  ]);

  const [selectedUser, setSelectedUser] = useState(users[0]);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState(selectedUser);

  const handleEdit = () => {
    setIsEditing(true);
    setEditData(selectedUser);
  };

  const handleSave = () => {
    const updatedUsers = users.map(user =>
      user.id === selectedUser.id ? editData : user
    );
    setUsers(updatedUsers);
    setSelectedUser(editData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData(selectedUser);
    setIsEditing(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleUserSelect = (user: typeof users[0]) => {
    setSelectedUser(user);
    setEditData(user);
    setIsEditing(false);
  };

  return (
    <div>
      <h1>โปรไฟล์</h1>

      <div>
        <h3>เลือกผู้ใช้:</h3>
        {users.map(user => (
          <button
            key={user.id}
            onClick={() => handleUserSelect(user)}
            style={{
              margin: '5px',
              padding: '5px 10px',
              backgroundColor: selectedUser.id === user.id ? '#007bff' : '#f8f9fa',
              color: selectedUser.id === user.id ? 'white' : 'black'
            }}
          >
            {user.name}
          </button>
        ))}
      </div>

      <div>
        <h2>ข้อมูลส่วนตัว</h2>

        {!isEditing ? (
          <div>
            <p>ชื่อ: {selectedUser.name}</p>
            <p>อีเมล: {selectedUser.email}</p>
            <p>เบอร์โทร: {selectedUser.phone}</p>
            <p>อายุ: {selectedUser.age}</p>
            <p>ที่อยู่: {selectedUser.address}</p>
          </div>
        ) : (
          <div>
            <div>
              <label>ชื่อ:</label>
              <input
                type="text"
                name="name"
                value={editData.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>อีเมล:</label>
              <input
                type="email"
                name="email"
                value={editData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>เบอร์โทร:</label>
              <input
                type="text"
                name="phone"
                value={editData.phone}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>อายุ:</label>
              <input
                type="number"
                name="age"
                value={editData.age}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>ที่อยู่:</label>
              <input
                type="text"
                name="address"
                value={editData.address}
                onChange={handleChange}
              />
            </div>

            <button onClick={handleSave}>บันทึก</button>
            <button onClick={handleCancel}>ยกเลิก</button>
          </div>
        )}
      </div>
    </div>
  );
}
