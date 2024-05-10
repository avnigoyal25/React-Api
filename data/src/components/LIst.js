import React, { useState, useEffect } from 'react';
import '../App.css';
import { Container, FormLabel, Table, TableBody, TableCell, TableHead, TableRow} from '@mui/material';
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function List() {
    const [search, setSearch] = useState('');
    const [users, setUserData] = useState([]);
    const [sortByAge, setSortByAge] = useState(false); 
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://dummyjson.com/users')
          .then(response => response.json())
          .then(data => setUserData(data))
          .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleSortByAge = () => {
        setSortByAge(!sortByAge);
    };

    return (
        <Container>
            <FormLabel>
                <div className='input-wrapper'>
                    <FaSearch id="search-icon" />
                    <input
                        placeholder='Search'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </FormLabel>
             <button 
            onClick={handleSortByAge} 
            className={sortByAge ? 'sort sortByAge' : 'sort sortByName'}>
            {sortByAge ? 'Sort by Name' : 'Sort by Age'}
            </button>
            <Table>
                <TableHead style={{ position: "sticky", top: "0", zIndex: "1", height:"5px", backgroundColor:"lightblue", borderRadius:"20px" }}>
                    <TableRow>
                        <TableCell><strong>FirstName</strong></TableCell>
                        <TableCell><strong>LastName</strong></TableCell>
                        <TableCell><strong>Email</strong></TableCell>
                        <TableCell><strong>Address</strong></TableCell>
                        <TableCell><strong>Details</strong></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.total > 0 &&
                        users.users
                            .filter(item => (
                                search.trim().toLowerCase() === '' ||
                                item.firstName.toLowerCase().includes(search.trim().toLowerCase()) ||
                                item.lastName.toLowerCase().includes(search) ||
                                item.email.toLowerCase().includes(search) ||
                                item.address.address.toLowerCase().includes(search)
                            ))
                            .sort((a, b) => sortByAge ? a.age - b.age : 0) // Sorting condition
                            .map(item => {
                                return (
                                    <TableRow key={item.id}>
                                        <TableCell>{item.firstName}</TableCell>
                                        <TableCell>{item.lastName}</TableCell>
                                        <TableCell>{item.email}</TableCell>
                                        <TableCell>{item.address.address}</TableCell>
                                        <TableCell>
                                            <button onClick={() => navigate(`/user/${item.id}`)} className='submit-but'>Details</button>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                </TableBody>
            </Table>
        </Container>
    );
}


export default List;
