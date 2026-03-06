import { Link } from 'react-router';

function ErrorPage() {
  return (
    <div className='error container'>
      <h1>‼️‼️ 404 Error: Page Not Found</h1>
      <Link to='/'>
        <button style={{ display: 'flex', marginInline: 'auto' }}>
          Go back home
        </button>
      </Link>
    </div>
  );
}

export default ErrorPage;
