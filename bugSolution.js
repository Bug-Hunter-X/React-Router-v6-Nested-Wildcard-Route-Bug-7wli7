```javascript
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/:id" element={<Users />} />
        <Route path="/users/:id/*" element={<UserDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() { return <div>Home</div>; }
function About() { return <div>About</div>; }
function Users() { 
  const {id} = useParams();
  return <div>Users {id}</div>; }
function UserDetail() { return <div>User Detail</div>; }
export default App;
```