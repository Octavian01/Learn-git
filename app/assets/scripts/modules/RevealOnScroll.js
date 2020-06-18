import throttle from 'lodash/throttle';
import debounce from 'lodash/debounce';

class RevealOnScroll {
    constructor(items, threshold) {
        this.threshold = threshold;
        this.itemsToReveal = items;
        this.browserHeight = window.innerHeight;
        this.hideInitially();
        this.scrollThrottle = throttle(this.calcCaller, 200).bind(this);
        this.events();
    }

    events() {
        window.addEventListener('scroll', this.scrollThrottle);
        window.addEventListener('resize', debounce(() => {
            this.browserHeight = window.innerHeight;
        }, 333));
    }

    calcCaller() {
        this.itemsToReveal.forEach(el => {
            if ( !el.isRevealed ) {
                this.calculateIfScrolledTo(el);
            }
        })
    }

    hideInitially() {
        this.itemsToReveal.forEach(el => {
            el.classList.add('reveal-item');
            el.isRevealed = false;
        });
        this.itemsToReveal[this.itemsToReveal.length - 1].isLastItem = true;
    }

    calculateIfScrolledTo(el) {
        if ( window.scrollY + this.browserHeight > el.offsetTop ) {
            let scrollPercent = (el.getBoundingClientRect().top / this.browserHeight);
            if ( scrollPercent < this.threshold ) {
                el.classList.add('reveal-item--is-visible');
                el.isRevealed = true;
                if ( el.isLastItem ) {
                    window.removeEventListener('scroll', this.scrollThrottle);
                }
            }
        }
    }
}

export default RevealOnScroll;