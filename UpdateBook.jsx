// UpdateBook.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateBookAPI } from '../api/api';

const UpdateBook = () => {
  const [isbn, setIsbn] = useState('');
  const [updateData, setUpdateData] = useState({
    title: '',
    authors: '',
    publisher: '',
    version: '',
  });
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleUpdateBook = async (e) => {
    e.preventDefault();
    const data = {};
    if (updateData.title.trim()) data.Title = updateData.title;
    if (updateData.authors.trim()) data.Authors = updateData.authors;
    if (updateData.publisher.trim()) data.Publisher = updateData.publisher;
    if (updateData.version.trim()) data.Version = updateData.version;

    if (Object.keys(data).length === 0) {
      setError("Please provide at least one field to update");
      return;
    }

    try {
      await updateBookAPI(isbn, data);
      setMessage('Book details updated successfully');
      navigate('/dashboard');
    } catch (err) {
      setError(err.message || 'Update book failed');
    }
  };

  return (
    <div
      style={{
        backgroundColor: 'hsl(160, 8%, 85%)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        boxSizing: 'border-box',
      }}
    >
      <form
        onSubmit={handleUpdateBook}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          width: '100%',
          maxWidth: '400px',
        }}
      >
        <h2 style={{ textAlign: 'center' }}>Update Book</h2>
        <input
          type="text"
          placeholder="ISBN"
          value={isbn}
          onChange={(e) => setIsbn(e.target.value)}
          required
          style={{
            padding: '10px',
            fontSize: '16px',
            margin: '10px 0',
          }}
        />
        <input
          type="text"
          placeholder="Title (optional)"
          value={updateData.title}
          onChange={(e) => setUpdateData({ ...updateData, title: e.target.value })}
          style={{
            padding: '10px',
            fontSize: '16px',
            margin: '10px 0',
          }}
        />
        <input
          type="text"
          placeholder="Authors (optional)"
          value={updateData.authors}
          onChange={(e) => setUpdateData({ ...updateData, authors: e.target.value })}
          style={{
            padding: '10px',
            fontSize: '16px',
            margin: '10px 0',
          }}
        />
        <input
          type="text"
          placeholder="Publisher (optional)"
          value={updateData.publisher}
          onChange={(e) => setUpdateData({ ...updateData, publisher: e.target.value })}
          style={{
            padding: '10px',
            fontSize: '16px',
            margin: '10px 0',
          }}
        />
        <input
          type="text"
          placeholder="Version (optional)"
          value={updateData.version}
          onChange={(e) => setUpdateData({ ...updateData, version: e.target.value })}
          style={{
            padding: '10px',
            fontSize: '16px',
            margin: '10px 0',
          }}
        />
        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
        {message && <p style={{ color: 'green', textAlign: 'center' }}>{message}</p>}
        <button
          type="submit"
          style={{
            padding: '10px',
            backgroundColor: '#383737',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontSize: '16px',
            cursor: 'pointer',
          }}
        >
          Update Book
        </button>
      </form>
      <button
        onClick={() => navigate('/dashboard')}
        style={{
          position: 'fixed',
          right: '20px',
          bottom: '20px',
          padding: '10px 20px',
          backgroundColor: '#383737',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Return to Dashboard
      </button>
    </div>
  );
};

export default UpdateBook;
