import React from 'react';
import NavBar from '../components/layout/NavBar';
import Gallery from '../components/ui/Gallery';


function HeadshotsPage() {
  const photos = [
    {
      id: 1,
      imgSrc:
        'https://live.staticflickr.com/65535/52764917784_103ae901a0_b.jpg',
    },
    {
      id: 2,
      imgSrc:
        'https://live.staticflickr.com/65535/52764126962_2192c02804_b.jpg',
    },
    {
      id: 3,
      imgSrc:
        'https://live.staticflickr.com/65535/52764126937_d41c2c8ae8_b.jpg',
    },
    {
      id: 4,
      imgSrc:
        'https://live.staticflickr.com/65535/52765072465_4b21a5a98a_b.jpg',
    },
    {
      id: 5,
      imgSrc:
        'https://live.staticflickr.com/65535/52765150558_937872b23e_b.jpg',
    },
    {
      id: 6,
      imgSrc:
        'https://live.staticflickr.com/65535/52764667116_2715b194c0_b.jpg',
    },
    {
      id: 7,
      imgSrc:
        'https://live.staticflickr.com/65535/52764918109_607cbb11b3_b.jpg',
    },
    {
      id: 8,
      imgSrc:
        'https://live.staticflickr.com/65535/52764669936_b2bb17ee1f_b.jpg',
    },
    {
      id: 9,
      imgSrc:
        'https://live.staticflickr.com/65535/52764920934_195d7ae116_b.jpg',
    },
    {
      id: 10,
      imgSrc:
        'https://live.staticflickr.com/65535/52764669831_5d4ea3dab9_b.jpg',
    }
  ];

  return (
    <>
      <NavBar />
      <Gallery props={photos} />
    </>
  );
}

export default HeadshotsPage;
