'use client';

import { useState } from 'react';

export default function ProfilePage() {
  const [user, setUser] = useState({
    name: 'สมชาย ใจดี',
    email: 'somchai@example.com',
    phone: '081-234-5678',
    age: 25,
    address: 'กรุงเทพมหานคร'
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState(user);

  const handleEdit = () => {
    setIsEditing(true);
    setEditData(user);
  };

  const handleSave = () => {
    setUser(editData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData(user);
    setIsEditing(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div>
      <h1>โปรไฟล์</h1>

      <div>
        <h2>ข้อมูลส่วนตัว</h2>

        {!isEditing ? (
          <div>
            <p>ชื่อ: {user.name}</p>
            <p>อีเมล: {user.email}</p>
            <p>เบอร์โทร: {user.phone}</p>
            <p>อายุ: {user.age}</p>
            <p>ที่อยู่: {user.address}</p>

            <button onClick={handleEdit}>แก้ไข</button>
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

