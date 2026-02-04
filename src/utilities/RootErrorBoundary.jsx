import { isRouteErrorResponse, useRouteError, useNavigate } from 'react-router';
import Button from '../components/Button';
import mchatLogoLarge from '../assets/mchat-logo-large.png';

function RootErrorBoundary() {
  const navigate = useNavigate();
  const error = useRouteError();

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
          <p>{error.data}</p>
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
  } else if (error instanceof Error) {
    return (
      <div>
        <h1>Error</h1>
        <p>{error.message}</p>
        <p>The stack trace is:</p>
        <pre>{error.stack}</pre>
      </div>
    );
  } else {
    return <h1>Unknown Error</h1>;
  }
}

export default RootErrorBoundary;
