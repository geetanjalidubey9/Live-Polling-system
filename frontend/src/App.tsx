import  { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const Welcome = lazy(() => import("./Components/WelcomeScreen"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Welcome />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
