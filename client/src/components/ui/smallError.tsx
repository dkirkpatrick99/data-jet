import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

interface ISmallError {
  text?: string;
};

function SmallError({text}: ISmallError) {

  return (
    <>
      <div className='flex items-center mt-2'>
        <ErrorOutlineIcon fontSize='small' className='text-red-500 mr-1' />
        <p className='text-red-500'>{text}</p>
      </div>
    </>
  )
}

export default SmallError;