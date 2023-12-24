import './pageNotFound.css';
import { Link } from 'react-router-dom';

function PageNotFound(): JSX.Element {
  return (
    <body className='pageNotFound'>
      <section className="notFound">
        <div className="img">
          <img src="https://assets.codepen.io/5647096/backToTheHomepage.png" alt="Back to the Homepage" />
          <img src="https://assets.codepen.io/5647096/Delorean.png" alt="El Delorean, El Doc y Marti McFly" />
        </div>
        <div className="text">
          <h1>404</h1>
          <h2>Page not found</h2>
          <Link to="/">Go to main page</Link>
        </div>
      </section>
    </body>
  );
}
export default PageNotFound;
