import { useEffect, useState } from 'react';
import { getFormById, submitResponse } from '../services/api';

const FormRenderer = ({ formId }) => {
  const [form, setForm] = useState(null);
  const [responses, setResponses] = useState({});

  useEffect(() => {
    getFormById(formId).then((res) => setForm(res.data));
  }, [formId]);

  const handleChange = (e, fieldName) => {
    setResponses({ ...responses, [fieldName]: e.target.value });
  };

  const handleSubmit = async () => {
    await submitResponse({ formId, answers: responses });
    alert('Submitted!');
  };

  if (!form) return <div>Loading...</div>;

  return (
    <div>
        <div className="container">
      <h2>{form.title}</h2>
      <p>{form.description}</p>
      {form.fields.map((field, index) => (
        <div key={index}>
          <label>{field.label}</label>
          <input type={field.type} onChange={(e) => handleChange(e, field.name)} />
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
    </div>
  );
};

export default FormRenderer;
