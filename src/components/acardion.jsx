import { useState } from 'react';
function Accordion({title, description}) {
    const [accordion, setAccordion] = useState(false);
    function accordionFunc() {
        setAccordion(!accordion);
    }
  return (
    <div className="accordion-box">
      <div className='arrow-and-text-box'>
      <p>{title}</p>
      
      <b onClick={accordionFunc}>{accordion? "-" : "+"}</b>
      </div>
      <div className="accordion" style={{display: accordion ? "block" : "none"}}>
        <p>{description}</p>
      </div>
    </div>
  );
}
export default Accordion;