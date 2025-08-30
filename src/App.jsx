import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Banner from "./sections/Banner/Banner";
import TechBar from "./sections/Banner/TechBar";
import Form from "./sections/Form/Form";
import ShowData from "./sections/ShowData/ShowData";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Projects/Projects";
import Contact from "./sections/Contact/Contact";

function App() {
  const [allData, setAllData] = useState();
  const data = JSON.stringify(allData, null, 2);
  // console.log(data);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setAllData(data);
      })
      .catch((err) => console.error("Error fetching JSON:", err));
  }, []);

  return (
    <div id="body">
      <Router>
        <Routes>
          {/* Home route */}
          <Route
            path="/"
            element={
              <>
                <Banner allData={allData} />
                <TechBar />
                <Skills allData={allData}></Skills>
                <Projects allData={allData}></Projects>
                <Contact></Contact>
                <ShowData data={data}></ShowData>
              </>
            }
          />

          {/* Form route */}
          <Route path="/form" element={<Form setAllData={setAllData} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
