/**
 * Script to help fix Swiper key issues:
 * 
 * 1. For all SwiperSlide components that use array index as key:
 *    - Change from: key={index}
 *    - To: key={`unique-id-${some-unique-identifier-from-the-item}`}
 * 
 * 2. For all Swiper components with preloadImages:
 *    - Remove the preloadImages={false} prop
 * 
 * Instructions:
 * 
 * For ProductGallery components with images:
 * - Use the image URL as the unique key:
 * <SwiperSlide key={`slide-${typeof img === "string" ? img.substring(img.lastIndexOf('/') + 1, img.lastIndexOf('.')) : img.url.substring(img.url.lastIndexOf('/') + 1, img.url.lastIndexOf('.'))}`}>
 * 
 * For RelatedProducts components with products:
 * - Use the product name as the unique key:
 * <SwiperSlide key={`product-${product.name.toLowerCase().replace(/\s+/g, '-')}`}>
 * 
 * For SliderHero component:
 * - Use descriptive string keys for each slide:
 * <SwiperSlide key="localizadores">
 * <SwiperSlide key="llamador-meseros">
 * etc.
 * 
 * For any Swiper component that has preloadImages={false}:
 * - Simply remove this prop
 * 
 * For any Swiper component missing navigation arrows:
 * - Add navigation={true} prop
 * - Ensure proper CSS for swiper-button-next and swiper-button-prev
 */ 