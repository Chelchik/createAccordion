import { useState } from 'react';
import './App.css';
import Acardion from './components/acardion';
import AccordionCreate from './components/AccordionCreate';
import IsMore from './isMore';

function App() {
  let text  = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis totam repellat aliquid eaque, accusantium laudantium inventore necessitatibus, a harum incidunt impedit sunt dolore excepturi numquam sint deleniti non, rem maxime asperiores fugit itaque! Exercitationem, ex recusandae! Soluta est cum ab error ex veritatis quibusdam necessitatibus distinctio dolores, culpa porro, minima ipsam repellat natus aut alias accusamus ducimus? Dolorum alias rem corporis ut iusto consequatur molestiae sint dolores a architecto quia ad culpa aut sit blanditiis illo, eius aliquam adipisci consequuntur provident minus laboriosam sunt! Totam iure perspiciatis deleniti praesentium laboriosam, consequuntur earum quaerat impedit fuga, ex, architecto enim dignissimos rem.";

  return (
    <div className='root'>
      {/* <IsMore maxLength={50} text={text}/>

      <Acardion /> */}

      <AccordionCreate />
    </div>
  );
}

export default App;