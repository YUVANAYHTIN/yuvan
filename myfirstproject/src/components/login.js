import React from 'react' ;
import image from './background4.jpeg' ;
import './login.css' ;
import './secondpage';
function Greet()
{
    return(
       <>
       <div className='yuvan'>
        <h2>Freaks!</h2>
        <form>
            <input type="text" placeholder='search...'name='search'></input>
            <a href='./secondpage.css' target='_blank'>👤</a>
            <a href='' target='_blank'>🛒</a>
        </form>
      <ul className='selva'>
        <li><a href=''>Mens</a></li><br/><br/>
        <li><a href=''>Womens</a></li><br/><br/>
        <li><a href=''>Sports</a></li><br/><br/>
      </ul>
       </div>
       </>
    );

}
 export default Greet