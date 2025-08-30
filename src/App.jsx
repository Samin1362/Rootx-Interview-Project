import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Banner from "./sections/Banner/Banner";
import TechBar from "./sections/Banner/TechBar";
import Form from "./sections/Form/Form";

function App() {
  const [allData, setAllData] = useState();
  const data = JSON.stringify(allData, null, 2);
  console.log(data);

  return (
    <Router>
      <Routes>
        {/* Home route */}
        <Route
          path="/"
          element={
            <>
              <Banner />
              <TechBar />
            </>
          }
        />

        {/* Form route */}
        <Route path="/form" element={<Form setAllData={setAllData} />} />
      </Routes>
    </Router>
  );
}

export default App;
