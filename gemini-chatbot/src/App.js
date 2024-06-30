// import React, { useState } from 'react';
// import axios from 'axios';
// import './App.css';

// function App() {
//   const [input, setInput] = useState('');
//   const [response, setResponse] = useState('');

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:5000/api/chat', { input });
//       setResponse(res.data.response);
//     } catch (error) {
//       console.error('Error fetching response:', error);
//     }
//   };

//   return (
//     <div className="App">
//       <div className="menu-bar">
//         <h1>Gemini Chatbot</h1>
//       </div>
//       <div className="chat-container">
//         <form onSubmit={handleSubmit} className="chat-form">
//           <input
//             type="text"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             placeholder="Ask me anything..."
//             className="chat-input"
//             onKeyDown={(e) => {
//               if (e.key === 'Enter') handleSubmit(e);
//             }}
//           />
//           <button type="submit" className="chat-button">Submit</button>
//         </form>
//         <div className="response-container">
//           <p className="response-text">{response}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';
import axios from 'axios';

import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [queries, setQueries] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/chat', { input });
      const newQuery = { query: input, response: res.data.response };
      setQueries([...queries, newQuery]);
      setInput('');
    } catch (error) {
      console.error('Error fetching response:', error);
    }
  };

  return (
    <div className="App">
      <div className="menu-bar">
        <h1>Avi Chatbot</h1>
      </div>
      <div className="chat-container">
        <form onSubmit={handleSubmit} className="chat-form">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything..."
            className="chat-input"
          />
          <button type="submit" className="chat-button">Submit</button>
        </form>
        <div className="response-container">
          {queries.map((q, index) => (
            <div key={index} className="query-response">
              <p><strong>You:</strong> {q.query}</p>
              <p><strong>Avishkar:</strong> {q.response}</p>
              {index !== queries.length - 1 && <hr />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
