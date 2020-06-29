'use strict';

const sources = [
  {
    title: '2019/01/22',
    image: {
      src: 'images/2019_01_22.JPG',
      alt: '水族館で写真を撮るの僕'
    },
    body: '水族館の水槽を撮っている僕です。'
  },
  {
    title: '2019/03/14',
    image: {
      src: 'images/2019_03_14.JPG',
      alt: '鉄板焼きを食べている僕'
    },
    body: '鉄板焼きを食べている僕です。'
  },
  {
    title: '2019/04/08',
    image: {
      src: 'images/2019_04_08.JPG',
      alt: 'ブランコを漕いでる僕'
    },
    body: 'ブランコを漕いでる僕です。'
  },
  {
    title: '2019/04/22',
    image: {
      src: 'images/2019_04_22.JPG',
      alt: 'チューリップ畑にいる僕'
    },
    body: 'チューリップ畑にいる僕です。'
  },
  {
    title: '2019/10/01',
    image: {
      src: 'images/2019_10_01.JPG',
      alt: '顔はめしてる僕'
    },
    body: '顔はめしてる僕です。'
  },
  {
    title: '2019/11/26',
    image: {
      src: 'images/2019_11_26.JPG',
      alt: 'チーズハットグを食べる僕'
    },
    body: 'チーズハットグを食べる僕です。'
  },
]

sources.forEach(source => {
  const root = document.querySelector('#root');

  const section = document.createElement('section');

  const h2 = document.createElement('h2');

  h2.setAttribute('class', 'section-title');
  h2.innerHTML = source.title;

  section.appendChild(h2);

  const image = document.createElement('img');

  image.setAttribute('class', 'section-image',);
  image.setAttribute('src', source.image.src,);
  image.setAttribute('alt', source.image.alt,);

  section.appendChild(image);

  const p = document.createElement('p');

  p.setAttribute('class', 'section-body');
  p.innerHTML = source.body;

  section.appendChild(p);

  root.appendChild(section);
});

// スクロール

const scrollTop = (elem,duration) => {
  let target = document.getElementById(elem);
  target.addEventListener('click', () => {
    let currentY = window.pageYOffset;
    let step = duration/currentY > 1 ? 10 : 100;
    let timeStep = duration/currentY * step;
    let intervalID = setInterval(scrollUp, timeStep);

    function scrollUp(){
      currentY = window.pageYOffset;
      if(currentY === 0) {
          clearInterval(intervalID);
      } else {
          scrollBy( 0, -step );
      }
    }
  });
}

scrollTop('js-button', 500);