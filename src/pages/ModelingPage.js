import React from 'react';

import NavBar from '../components/layout/NavBar';
import Gallery from '../components/ui/Gallery';

function ModelingPage() {

  const photos = [
    {
      id: 1,
      imgSrc:
        'https://live.staticflickr.com/65535/52764669011_f71ddb3193_k.jpg',
    },
    {
      id: 2,
      imgSrc:
        'https://live.staticflickr.com/65535/52765152573_5763b44155_k.jpg',
    },
    {
      id: 3,
      imgSrc:
        'https://live.staticflickr.com/65535/52764668731_064830dc0f_k.jpg',
    },
    {
      id: 4,
      imgSrc:
        'https://live.staticflickr.com/65535/52765074615_1d006bab16_k.jpg',
    },
    {
      id: 5,
      imgSrc:
        'https://live.staticflickr.com/65535/52764668846_16e48fd24e_k.jpg',
    },
    {
      id: 6,
      imgSrc:
        'https://live.staticflickr.com/65535/52765152338_ee2c1b1b7a_k.jpg',
    },
    {
      id: 7,
      imgSrc:
        'https://live.staticflickr.com/65535/52765152278_8fb55a242b_k.jpg',
    },
    {
      id: 8,
      imgSrc:
        'https://live.staticflickr.com/65535/52764126252_a07450bfe6_k.jpg',
    },
    {
      id: 9,
      imgSrc:
        'https://live.staticflickr.com/65535/52764668476_62b42707a4_k.jpg',
    },
    {
      id: 10,
      imgSrc:
        'https://live.staticflickr.com/65535/52764919384_b977e6c8f1_k.jpg',
    },

    {
      id: 11,
      imgSrc:
        'https://live.staticflickr.com/65535/52765151953_233ea7b871_k.jpg',
    },
    {
      id: 12,
      imgSrc:
        'https://live.staticflickr.com/65535/52765151743_e41159fe6b_k.jpg',
    },
    {
      id: 13,
      imgSrc:
        'https://live.staticflickr.com/65535/52765151308_59fb5971c4_k.jpg',
    },
    {
      id: 14,
      imgSrc:
        'https://live.staticflickr.com/65535/52764125052_3c9258aee9_k.jpg',
    },
    {
      id: 15,
      imgSrc:
        'https://live.staticflickr.com/65535/52764125037_fdb3e0ea6c_k.jpg',
    },
    {
      id: 16,
      imgSrc:
        'https://live.staticflickr.com/65535/52764667131_179491eb48_k.jpg',
    },
    {
      id: 17,
      imgSrc:
        'https://live.staticflickr.com/65535/52765150373_5540ac75ef_b.jpg',
    },
    {
      id: 18,
      imgSrc:
        'https://live.staticflickr.com/65535/52765150358_1a3cf7862c_b.jpg',
    },
    {
      id: 19,
      imgSrc:
        'https://live.staticflickr.com/65535/52785432908_838cc1a169_z.jpg',
    },
    {
      id: 20,
      imgSrc:
        'https://live.staticflickr.com/65535/52785216034_305ab1d209_z.jpg',
    },
    {
      id: 21,
      imgSrc:
        'https://live.staticflickr.com/65535/52785216034_305ab1d209_z.jpg',
    },
    {
      id: 22,
      imgSrc:
        'https://live.staticflickr.com/65535/52785374545_11021a5b7b_z.jpg',
    },
  ];

    return (
      <>
        <NavBar />
        <Gallery props={photos} />
      </>
    );
}

export default ModelingPage;
