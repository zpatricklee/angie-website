import React from 'react';
import NavBar from '../components/layout/NavBar';
import Gallery from '../components/ui/Gallery';


function ProductionBTSPage(props) {
    const photos = [
      {
        id: 1,
        imgSrc:
          'https://live.staticflickr.com/65535/52764918564_af5c98df90_b.jpg',
      },
      {
        id: 2,
        imgSrc:
          'https://live.staticflickr.com/65535/52764666776_94188d663a_z.jpg',
      },
      {
        id: 3,
        imgSrc:
          'https://live.staticflickr.com/65535/52765073210_aa6cbec11a_z.jpg',
      },
      {
        id: 4,
        imgSrc:
          'https://live.staticflickr.com/65535/52765072460_53f9dcecb9_z.jpg',
      },
      {
        id: 5,
        imgSrc:
          'https://live.staticflickr.com/65535/52764124557_79136e4d66_z.jpg',
      },
      {
        id: 6,
        imgSrc:
          'https://live.staticflickr.com/65535/52764917744_c27fa008c2_z.jpg',
      },
      {
        id: 7,
        imgSrc:
          'https://live.staticflickr.com/65535/52764124662_716b563e0d_z.jpg',
      },
      {
        id: 8,
        imgSrc:
          'https://live.staticflickr.com/65535/52764666736_bb5b5d39b9_z.jpg',
      },
      {
        id: 9,
        imgSrc:
          'https://live.staticflickr.com/65535/52764666691_02eebe2587_z.jpg',
      },
      {
        id: 10,
        imgSrc:
          'https://live.staticflickr.com/65535/52765150483_74d9c65f97_z.jpg',
      },
      {
        id: 11,
        imgSrc:
          'https://live.staticflickr.com/65535/52764917684_7e95c37acb_z.jpg',
      },
      {
        id: 12,
        imgSrc:
          'https://live.staticflickr.com/65535/52764124592_07ba76e9ff_z.jpg',
      },
      {
        id: 13,
        imgSrc:
          'https://live.staticflickr.com/65535/52764666676_16edd59473_z.jpg',
      },
      {
        id: 14,
        imgSrc:
          'https://live.staticflickr.com/65535/52764666656_a0d7b807eb_z.jpg',
      },
      {
        id: 15,
        imgSrc:
          'https://live.staticflickr.com/65535/52765072300_82f8d4166b_z.jpg',
      },
      {
        id: 16,
        imgSrc:
          'https://live.staticflickr.com/65535/52764918089_f82e7c92ec_z.jpg',
      },
      {
        id: 17,
        imgSrc:
          'https://live.staticflickr.com/65535/52765072895_e65ac4b168_z.jpg',
      },
      {
        id: 18,
        imgSrc:
          'https://live.staticflickr.com/65535/52764666971_4b2aa7f479_z.jpg',
      },
      {
        id: 19,
        imgSrc:
          'https://live.staticflickr.com/65535/52764124822_b62a5cb4b0_z.jpg',
      },
      {
        id: 20,
        imgSrc:
          'https://live.staticflickr.com/65535/52784978101_3c9f45d786_z.jpg',
      },
      {
        id: 21,
        imgSrc:
          'https://live.staticflickr.com/65535/52784427882_6b6bca36af_z.jpg',
      },
      {
        id: 22,
        imgSrc:
          'https://live.staticflickr.com/65535/52785216119_1e53b02a83_z.jpg',
      },
      {
        id: 23,
        imgSrc:
          'https://live.staticflickr.com/65535/52785216134_1139b8c6e5_z.jpg',
      },
      {
        id: 24,
        imgSrc:
          'https://live.staticflickr.com/65535/52785374615_4ae47b24fa_z.jpg',
      },
      {
        id: 25,
        imgSrc:
          'https://live.staticflickr.com/65535/52785374625_2a1f68ba55_z.jpg',
      },
      {
        id: 26,
        imgSrc:
          'https://live.staticflickr.com/65535/52784978056_0744c3c04a_z.jpg',
      },
      {
        id: 27,
        imgSrc:
          'https://live.staticflickr.com/65535/52784428152_0618b25c81_z.jpg',
      },
    ];

  return (
    <>
      <NavBar />
      <Gallery props={photos} />
    </>
  );
}

export default ProductionBTSPage;
