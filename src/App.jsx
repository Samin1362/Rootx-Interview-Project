import { useEffect, useState, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Banner from "./sections/Banner/Banner";
import TechBar from "./sections/Banner/TechBar";
import Form from "./sections/Form/Form";
import ShowData from "./sections/ShowData/ShowData";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Projects/Projects";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";

function App() {
  const [allData, setAllData] = useState([]);
  const contactRef = useRef(null);

  useEffect(() => {
    // Only fetch if allData is empty
    if (allData.length === 0) {
      fetch("/data.json")
        .then((res) => res.json())
        .then((data) => setAllData(data))
        .catch((err) => console.error("Error fetching JSON:", err));
    }
  }, [allData]); // dependency on allData

  return (
    <div id="body">
      <Router>
        <Routes>
          {/* Home route */}
          <Route
            path="/"
            element={
              <>
                <Banner contactRef={contactRef} allData={allData} />
                <TechBar />
                <Skills allData={allData}></Skills>
                <Projects allData={allData}></Projects>
                <Contact ref={contactRef} />
                <Footer></Footer>
                {/* <ShowData data={data}></ShowData> */}
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
