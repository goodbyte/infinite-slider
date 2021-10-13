{
  const slider = document.querySelector('#slider');
  const slides = () => slider.querySelectorAll('.slide');

  const firstSlide = () => slides()[0];
  const lastSlide = () => {
    const _slides = slides();
    return _slides[_slides.length - 1];
  };

  const btnLeft = document.querySelector('#btnLeft');
  const btnRight = document.querySelector('#btnRight');

  slider.insertAdjacentElement('afterbegin', lastSlide());

  btnLeft.onclick = moveSlider.bind(null, 'left');
  btnRight.onclick = moveSlider.bind(null, 'right');

  function moveSlider(dir) {
    const isLeft = dir === 'left';

    slider.style.marginLeft = isLeft ? '0' : '-200%';
    slider.ontransitionend = () => {
      slider.style.transition = 'none';
      slider.insertAdjacentElement(
        isLeft ? 'afterbegin' : 'beforeend',
        isLeft ? lastSlide() : firstSlide()
      );
      slider.style.marginLeft = '-100%';
      setTimeout(() => {
        slider.style.transition = 'all 0.5s ease';
      }, 0);
      slider.ontransitionend = undefined;
    };
  }
}