import '../styles/styles.css';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickHeader from './modules/StickyHeader';

new RevealOnScroll(document.querySelectorAll('.feature-item'), 0.75);
new RevealOnScroll(document.querySelectorAll('.testimonial'), .6);
new StickHeader();

let mobileMenu = new MobileMenu();


if ( module.hot ) {
    module.hot.accept();
}
