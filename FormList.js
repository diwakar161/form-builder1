import React, { useEffect, useState } from 'react';
import { getForms } from '../services/api';
import { Link } from 'react-router-dom';

const FormList = () => {
  const [forms, setForms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchForms = async () => {
      try {
        const res = await getForms();
        setForms(res.data);
      } catch (err) {
        console.error('❌ Failed to load forms:', err);
        setError('Something went wrong while fetching forms.');
      } finally {
        setLoading(false);
      }
    };

    fetchForms();
  }, []);

  return (
    <div className="container">
      <h2>📃 Available Forms</h2>

      {loading && <p>Loading forms...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {!loading && forms.length === 0 && <p>No forms available yet.</p>}

      {!loading &&
        forms.map((form) =>
          form._id ? (
            <div key={form._id} style={{ marginBottom: '10px' }}>
              <Link to={`/form/${form._id}`}>
                <strong>{form.title}</strong> - {form.description}
              </Link>
            </div>
          ) : null
        )}
    </div>
  );
};

export default FormList;
