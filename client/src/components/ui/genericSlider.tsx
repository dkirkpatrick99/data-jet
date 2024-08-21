import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from 'react-router-dom';
import { useWindowSize } from '../../hooks/useWindowSize';

interface IGenericSlider {
  title?: string;
  children?: JSX.Element[];
  url?: string;
}

export function GenericSlider({ title, url, children }: IGenericSlider) {
  const [width, height] = useWindowSize();

  return (
    <>
      {title &&
        <div className='flex justify-between items-end mb-4'>
          <h2 className="font-bold text-xl">{title}</h2>

          {url &&
            <Link to={url} className='flex items-center'>
              <p className="text-md mr-1">see all</p>
              <ChevronRightIcon />
            </Link>
          }
        </div>
      }

      <Swiper
        slidesPerView={width > 1024 ? 6 : width > 900 ? 4 : 3}
        spaceBetween={20}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {
          children?.map((child) => (
            <SwiperSlide key={child.key}>
              {child}
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>

  );
}


