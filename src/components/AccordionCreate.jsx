import { useState } from 'react';
import Accordion from './acardion';
function AccordionCreate() {

    let title = "";
    let text = "";

    const titleFunc = (e) => {
        title = e.target.value;
    }

    const textFunc = (e) => {
        text = e.target.value;
    }

    const createAccordion = (e) => {
        e.preventDefault();
    }

    return (
    <form>
        <input type="text" placeholder='Title' onChange={titleFunc} id='titleInput'/>

        <textarea name="" id="textarea" rows={7} onChange={textFunc} placeholder='Description'></textarea>

        <input type="submit" value="Add" onClick={createAccordion} id='submit'/>
    </form>
  );
}
export default AccordionCreate;