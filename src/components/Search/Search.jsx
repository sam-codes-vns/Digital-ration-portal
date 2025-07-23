import { useState } from 'react';
import './Search.css';

const dummyData = [
  { cardNumber: 'RJ2025A001', name: 'Samriddhi Jaiswal', address: 'Jaipur' },
  { cardNumber: 'RJ2025A002', name: 'Ravi Sharma', address: 'Udaipur' },
  { cardNumber: 'RJ2025A003', name: 'Meena Devi', address: 'Kota' },
];

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    const filtered = dummyData.filter(
      (entry) =>
        entry.cardNumber.toLowerCase().includes(query.toLowerCase()) ||
        entry.name.toLowerCase().includes(query.toLowerCase()) ||
        entry.address.toLowerCase().includes(query.toLowerCase())
    );

    setResults(filtered);
  };

  return (
    <div className="searchContainer">
      <h2>Search Ration Card Holders</h2>

      <div className="searchBox">
        <input
          type="text"
          placeholder="Enter name, card number or city"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {results.length > 0 ? (
        <table className="resultTable">
          <thead>
            <tr>
              <th>Card Number</th>
              <th>Name</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {results.map((user, index) => (
              <tr key={index}>
                <td>{user.cardNumber}</td>
                <td>{user.name}</td>
                <td>{user.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        query && <p className="noResults">No results found.</p>
      )}
    </div>
  );
};

export default Search;
