import { isRouteErrorResponse, useRouteError, useNavigate } from 'react-router';
import Button from '../components/Button';
import mchatLogoLarge from '../assets/mchat-logo-large.png';

function RootErrorBoundary() {
  const navigate = useNavigate();
  const error = useRouteError();

  // Checks if the error is generated from a 4xx/5xx response thrown from an action loader or function
  if (isRouteErrorResponse(error)) {
    return (
      <>
        <div className='h-lvh flex flex-col flex-1 gap-8 justify-center items-center'>
          <img
            src={mchatLogoLarge}
            alt='Mchat messaging logo'
            width={299}
            height={110}
          />
          <h1 className='text-3xl'>
            {error.status} {error.statusText}
          </h1>
          <p>Check that the URL is correct.</p>
          <Button
            type={'button'}
            onClick={() => navigate(-1)}
            disabled={false}
            settings={
              'w-24 p-3 rounded-md shadow-md shadow-black bg-customLimeAccent'
            }
          >
            Return
          </Button>
        </div>
      </>
    );
    // Handles component rendering errors
  } else if (error instanceof Error) {
    return (
      <div className='h-lvh flex flex-col flex-1 gap-8 justify-center items-center'>
        <img
          src={mchatLogoLarge}
          alt='Mchat messaging logo'
          width={299}
          height={110}
        />
        <h1 className='text-3xl'>Error</h1>
        <p>
          Try again later or contact site administrator if problem persists.
        </p>
        <Button
          type={'button'}
          onClick={() => navigate(-1)}
          disabled={false}
          settings={
            'w-24 p-3 rounded-md shadow-md shadow-black bg-customLimeAccent'
          }
        >
          Return
        </Button>
      </div>
    );
  } else {
    return (
      <div className='h-lvh flex flex-col flex-1 gap-8 justify-center items-center'>
        <img
          src={mchatLogoLarge}
          alt='Mchat messaging logo'
          width={299}
          height={110}
        />
        <h1 className='text-3xl'>Unknown Error</h1>
        <p>
          Try again later or contact site administrator if problem persists.
        </p>
        <Button
          type={'button'}
          onClick={() => navigate(-1)}
          disabled={false}
          settings={
            'w-24 p-3 rounded-md shadow-md shadow-black bg-customLimeAccent'
          }
        >
          Return
        </Button>
      </div>
    );
  }
}

export default RootErrorBoundary;
