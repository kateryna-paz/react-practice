import "./index.css";
import Card from "./components/Card";
import { profileData, faqData } from "./storage";
import AccordianList from "./components/AccordionList";

function App() {
  return (
    <div className="app">
      <Card profile={profileData} />
      <AccordianList faqs={faqData} />
    </div>
  );
}

export default App;
