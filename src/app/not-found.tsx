import { NextPage } from 'next';
import './404.css';
import Image from 'next/image';

const NotFound: NextPage = () => {
  return (
    <body className="bg-purple">
      <div className="stars">
        <div className="custom-navbar">
          <div className="brand-logo">
            <Image
              src="http://salehriaz.com/404Page/img/logo.svg"
              width={80}
              height={80}
              alt={'logo'}
            />
          </div>
        </div>
        <div className="central-body">
          <Image
            className="image-404"
            src="http://salehriaz.com/404Page/img/404.svg"
            width={300}
            height={135}
            alt={'404'}
          />
          <a href="http://salehriaz.com/404Page/404.html" className="btn-go-home" target="_blank">
            GO BACK HOME
          </a>
        </div>
        <div className="objects">
          <Image
            className="object_rocket"
            src="http://salehriaz.com/404Page/img/rocket.svg"
            width={40}
            height={40}
            alt={'rocket'}
          />
          <div className="earth-moon">
            <Image
              className="object_earth"
              src="http://salehriaz.com/404Page/img/earth.svg"
              width={100}
              height={100}
              alt={'earth'}
            />
            <Image
              className="object_moon"
              src="http://salehriaz.com/404Page/img/moon.svg"
              width={80}
              height={80}
              alt={'moon'}
            />
          </div>
          <div className="box_astronaut">
            <Image
              className="object_astronaut"
              src="http://salehriaz.com/404Page/img/astronaut.svg"
              width={140}
              height={140}
              alt={'astronaut'}
            />
          </div>
        </div>
        <div className="glowing_stars">
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
        </div>
      </div>
    </body>
  );
};

export default NotFound;
