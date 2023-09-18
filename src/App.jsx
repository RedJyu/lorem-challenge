import { useState } from 'react';
import data from './data';

const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState('');
  const handleChange = (e) => {
    setCount(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    setText(data.slice(0, amount));
  };
  return (
    <div>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <div>
          <h4>ipsum</h4>
          <label htmlFor='count' className='lorem-label'>
            Paragraphs:
          </label>
          <input
            type='number'
            name='count'
            id='count'
            value={count}
            min={1}
            max={8}
            step={1}
            className='lorem-input'
            onChange={handleChange}
          />
        </div>
        <button type='submit' className='btn lorem-btn'>
          generate
        </button>
      </form>
      <article className='lorem-text'>
        {text.map((lorem, index) => {
          return <p key={index}>{lorem}</p>;
        })}
      </article>
    </div>
  );
};
export default App;
