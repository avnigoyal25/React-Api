import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../App.css';

const UserData = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(response => response.json())
      .then(data => {
        const foundUser = data.users.find(user => user.id === parseInt(id));
        if (foundUser) {
          setUser(foundUser);
        } else {
          console.error('User not found');
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <header>
        <button className="back-btn" onClick={() => navigate(-1)}>Back</button>
      </header>
      <div className="user-info">
        <div key={user.id} className="user-details">
          <h2>{`${user.firstName} ${user.lastName}`}</h2>
          <p><strong>Age:</strong> {user.age}</p>
          <p><strong>Gender:</strong> {user.gender}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Password:</strong> {user.password}</p>
          <p><strong>Birth Date:</strong> {user.birthDate}</p>
          <p><strong>Blood Group:</strong> {user.bloodGroup}</p>
          <p><strong>Height:</strong> {user.height} cm</p>
          <p><strong>Weight:</strong> {user.weight} kg</p>
          <p><strong>Eye Color:</strong> {user.eyeColor}</p>
          <p><strong>Hair Color:</strong> {user.hair.color}</p>
          <p><strong>Hair Type:</strong> {user.hair.type}</p>
          <p><strong>Domain:</strong> {user.domain}</p>
          <p><strong>IP:</strong> {user.ip}</p>
          <p><strong>Address:</strong> {user.address.address}, {user.address.city}, {user.address.state}, {user.address.postalCode}</p>
          <p><strong>Mac Address:</strong> {user.macAddress}</p>
          <p><strong>University:</strong> {user.university}</p>
          <p><strong>Card Expire:</strong> {user.bank.cardExpire}</p>
          <p><strong>Card Number:</strong> {user.bank.cardNumber}</p>
          <p><strong>Card Type:</strong> {user.bank.cardType}</p>
          <p><strong>Currency:</strong> {user.bank.currency}</p>
          <p><strong>IBAN:</strong> {user.bank.iban}</p>
          <p><strong>Company Name:</strong> {user.company.name}</p>
          <p><strong>Department:</strong> {user.company.department}</p>
          <p><strong>Job Title:</strong> {user.company.title}</p>
          <p><strong>Employer EIN:</strong> {user.ein}</p>
          <p><strong>Social Security Number:</strong> {user.ssn}</p>
          <p><strong>User Agent:</strong> {user.userAgent}</p>
          <p><strong>Crypto Coin:</strong> {user.crypto.coin}</p>
          <p><strong>Crypto Wallet:</strong> {user.crypto.wallet}</p>
          <p><strong>Crypto Network:</strong> {user.crypto.network}</p>
        </div>
      </div>
    </div>
  );
}

export default UserData;
