import { useState, useEffect } from 'react';
import axios from 'axios';



const Fib = (props) => {
  const [values, setValues] = useState({});
  const [seenIndexes, setSeenIndexes] = useState([]);
  const [index, setIndex] = useState('');

  async function fetchValues() {
    const vals = await axios.get('/api/values/current');
    setValues(vals.data);
  }

  async function fetchIndexes() {
    const indexes = await axios.get('/api/values/all');
    setSeenIndexes(indexes.data);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    await axios.post('/api/values', { index });

    setIndex('');
  }

  const renderSeenIndexes = () => {
    return seenIndexes.map(({ number }) => number).join(', ');
  };

  const renderValues = () => {
    const entries = [];

    for (let key in values) {
      entries.push(
        <div key={key}>
          For index {key} I calculated {values[key]}
        </div>
      );
    }

    return entries;
  };

  useEffect(() => {
    fetchValues();
    fetchIndexes();
  }, []);

  return (
    <div className="flex flex-col gap-10">
      <form className="w-full mx-auto text-center flex justify-between h-10 border-pink-400 border-2 rounded-full pl-3 overflow-hidden max-w-sm " onSubmit={handleSubmit}>
        <input
          className="bg-inherit focus:outline-none placeholder:text-pink-100"
          type="text"
          value={index}
          onChange={event => setIndex(event.target.value)}
          placeholder="Enter your index"
        />
        <button className="text-slate-100 bg-pink-400 px-4">Submit</button>
      </form>
      <section id="indexes">
        <h3>Indexes I have seen:</h3>
        {renderSeenIndexes()}
      </section>
      <section id="values">
        <h3>Calculated Values:</h3>
        {renderValues()}
      </section>
    </div>
  );
};

export default Fib;

