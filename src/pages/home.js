import {Link} from 'react-router-dom';
function Home (){
    return(
  <div>
      <h1>Home</h1>
      <ul>
          <Link to = "/about" > <li>About</li></Link>
      </ul>
  
  </div>
    )
}

export default Home;