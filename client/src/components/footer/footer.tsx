import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WebIcon from '@mui/icons-material/Web';
import { useWindowSize } from '../../hooks/useWindowSize';

function Footer() {
  const [width, height] = useWindowSize();
  
  return (
    <div className="h-48 bg-blue-50 text-black w-full flex items-center justify-around">
      <a href="https://github.com/dkirkpatrick99" target="blank">
        <div className="flex flex-col items-center">
          <GitHubIcon style={{ fontSize: width > 1024 ? 100 : 50 }} className="text-black cursor-pointer hover:text-gray-500"/>
          <p className="font-bold mt-2">GitHub</p>
        </div>
      </a>
     
      <a href="https://www.linkedin.com/in/dalton-kirkpatrick-9284b3184" target="blank">
        <div className="flex flex-col items-center">
          <LinkedInIcon style={{ fontSize: width > 1024 ? 100 : 50 }} className="text-black cursor-pointer hover:text-gray-500 " />
          <p className="font-bold mt-2">LinkedIn</p>
        </div>
      </a>
      
      <a href="https://daltonkirkpatrick.com/" target="blank">
        <div className="flex flex-col items-center">
          <WebIcon style={{ fontSize: width > 1024 ? 100 : 50 }} className="text-black cursor-pointer hover:text-gray-500" />
          <p className="font-bold mt-2">Portfolio</p>
        </div>
      </a>
    </div>
  )
}

export default Footer;
