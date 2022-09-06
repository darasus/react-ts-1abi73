import axios from 'axios';
import * as React from 'react';
import './style.css';

export default function App() {
  React.useEffect(() => {
    (async () => {
      const response = await axios({
        url: 'http://localhost:3001/api/hello',
      });

      console.log(response.data);
    })();
  }, []);
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
