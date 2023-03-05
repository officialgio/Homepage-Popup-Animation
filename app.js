const tl = gsap.timeline({ defaults: { duration: 0.75, ease: 'Power3.easeOut' } })

tl.fromTo('.hero__image',
    { scale: 1.3, borderRadius: '0rem' },
    { scale: 1, borderRadius: '2rem', delay: 0.35, duration: 2.5, ease: 'elastic.out(1.5, 1)' });

// Top
tl.fromTo('.cta1', { x: '110%', opacity: 0 }, { x: 0, opacity: 1 }, '<20%');
tl.fromTo('.cta3', { x: '-100%', opacity: 0 }, { x: 0, opacity: 1 }, '<20%');
tl.fromTo('.cta2', { y: '110%', opacity: 0 }, { y: 0, opacity: 1 }, '<20%');

// Bottom
tl.fromTo('.cta4', { x: '110%', opacity: 0 }, { x: 0, opacity: 1 }, '<20%');
tl.fromTo('.cta6', { x: '-100%', opacity: 0 }, { x: 0, opacity: 1 }, '<20%');
tl.fromTo('.cta5', { y: '110%', opacity: 0 }, { y: 0, opacity: 1 }, '<20%');

tl.fromTo('.cta__button', { y: '20', opacity: 0 }, { y: 0, opacity: 1 }, '<'); // sync at the same time

// Logo 
const logo = document.querySelector('.logo');
const letters = logo.textContent.split('');
logo.textContent = '';

letters.forEach(letter => {
    logo.innerHTML += '<span class="letter">' + letter + '</span>'; 
}); 

gsap.set('.letter', { display: 'inline-block' }); // allow x & y coordinates
gsap.fromTo('.letter', { y: '100%' }, {y: 0, delay: 2, stagger: 0.05}); // letter one by one animation 
