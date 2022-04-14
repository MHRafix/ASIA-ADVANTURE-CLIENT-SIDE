/**
 * React-Slick-Carousel settings here
 */
export const sliderSettings = (
  fade_animation,
  slides_show,
  slides_scroll,
  is_autoplay,
  autoplay_speed
) => {
  const settings = {
    fade: fade_animation,
    infinite: true,
    speed: 1000,
    slidesToShow: slides_show,
    slidesToScroll: slides_scroll,
    autoplay: is_autoplay,
    autoplaySpeed: autoplay_speed,
    nextArrow: false,
    prevArrow: false,
  };

  return { settings };
};
