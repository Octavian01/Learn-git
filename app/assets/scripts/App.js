import '../styles/styles.css';
import 'lazysizes';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickHeader from './modules/StickyHeader';

new RevealOnScroll(document.querySelectorAll('.feature-item'), 0.75);
new RevealOnScroll(document.querySelectorAll('.testimonial'), .6);
new StickHeader();
new MobileMenu();
let modal;

document.querySelectorAll('.open-modal').forEach(el => {
    el.addEventListener('click', e => {
        e.preventDefault();
        if ( !modal ) {
            import('./modules/Modal')
            .then(x => {
                modal = new x.default();
                modal.openTheModal();
            })
            .catch(err => {
                throw err;
            })
        } else {
            modal.openTheModal();
        }
    })
})


if ( module.hot ) {
    module.hot.accept();
}
