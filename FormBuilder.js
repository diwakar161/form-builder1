import { useState } from 'react';
import { createForm } from '../services/api';

const FormBuilder = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [fields, setFields] = useState([]);

  const addField = () => {
    setFields([...fields, { label: '', name: '', type: 'text', required: false }]);
  };

  const handleSubmit = async () => {
    await createForm({ title, description, fields });
    alert('Form created!');
  };

  return (
    <div>
        <div className="container">
      <h2>Create Form</h2>
      <input placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
      <textarea placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
      {fields.map((field, index) => (
        <div key={index}>
          <input placeholder="Label" onChange={(e) => {
            const newFields = [...fields];
            newFields[index].label = e.target.value;
            setFields(newFields);
          }} />
          <select onChange={(e) => {
            const newFields = [...fields];
            newFields[index].type = e.target.value;
            setFields(newFields);
          }}>
            <option value="text">Text</option>
            <option value="number">Number</option>
            <option value="checkbox">Checkbox</option>
            <option value="dropdown">Dropdown</option>
          </select>
        </div>
      ))}
      <button onClick={addField}>Add Field</button>
      <button onClick={handleSubmit}>Save Form</button>
    </div>
    </div>
    
  );
};

export default FormBuilder;
