// Entry point for Javascript logic
import './style.css';
import heroVideoAuffahrt from '/Media/Auffahrt.mp4';
import heroVideoDroneFlyover from '/Media/Drone flyover Villa.mp4';

console.log('Finest Properties Mallorca initialized.');

document.addEventListener('DOMContentLoaded', () => {
    // Current Year for Footer
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // Sticky Header Logic
    const header = document.getElementById('site-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileNav = document.getElementById('mobile-nav');

    // Clone desktop nav to mobile nav
    const desktopNav = document.querySelector('.header__nav');
    if (desktopNav && mobileNav) {
        const navClone = desktopNav.cloneNode(true);
        navClone.classList.remove('desktop-only');
        navClone.classList.add('mobile-nav-inner');

        // Convert hover dropdowns to click for mobile
        const dropdowns = navClone.querySelectorAll('.has-dropdown');
        dropdowns.forEach(dd => {
            const link = dd.querySelector('a');
            link.addEventListener('click', (e) => {
                e.preventDefault();
                dd.classList.toggle('is-open');
            });
        });

        mobileNav.appendChild(navClone);
    }

    if (mobileBtn && mobileNav) {
        mobileBtn.addEventListener('click', () => {
            mobileBtn.classList.toggle('is-active');
            mobileNav.classList.toggle('is-open');
            // Prevent scrolling on body when mobile menu is open
            document.body.style.overflow = mobileNav.classList.contains('is-open') ? 'hidden' : '';
        });
    }

    // Hero header contract:
    // - Keep background moving continuously with no blank frame between clips.
    // - Use two stacked video elements so the next clip can preload off-screen.
    const heroVideoA = document.getElementById('hero-video-a');
    const heroVideoB = document.getElementById('hero-video-b');
    if (heroVideoA && heroVideoB) {
        const heroVideoPlaylist = [
            heroVideoAuffahrt,
            heroVideoDroneFlyover
        ];
        const heroVideos = [heroVideoA, heroVideoB];
        let activeHeroVideoSlot = 0;
        let currentHeroVideoIndex = 0;

        const safePlay = (videoElement) => {
            const autoplayPromise = videoElement.play();
            if (autoplayPromise && typeof autoplayPromise.catch === 'function') {
                autoplayPromise.catch(() => {
                    // Silent catch: browsers may block autoplay in edge cases.
                });
            }
        };

        const setVideoSource = (videoElement, src) => {
            if (videoElement.dataset.src === src) return;
            videoElement.src = src;
            videoElement.dataset.src = src;
            videoElement.load();
        };

        // Prime both video slots upfront so slot B is ready the moment slot A ends.
        setVideoSource(heroVideos[0], heroVideoPlaylist[0]);
        setVideoSource(heroVideos[1], heroVideoPlaylist[1 % heroVideoPlaylist.length]);
        heroVideos[0].classList.add('is-active');
        heroVideos[1].classList.remove('is-active');
        safePlay(heroVideos[0]);

        const swapToNextVideo = (event) => {
            const endedVideo = event.currentTarget;
            if (!endedVideo.classList.contains('is-active')) return;

            const nextSlot = (activeHeroVideoSlot + 1) % heroVideos.length;
            const nextVideo = heroVideos[nextSlot];
            const currentVideo = heroVideos[activeHeroVideoSlot];

            currentHeroVideoIndex = (currentHeroVideoIndex + 1) % heroVideoPlaylist.length;
            nextVideo.classList.add('is-active');
            currentVideo.classList.remove('is-active');
            safePlay(nextVideo);

            // Recycle the hidden slot by preloading the following clip for gapless handoff.
            currentVideo.pause();
            currentVideo.currentTime = 0;
            const preloadIndex = (currentHeroVideoIndex + 1) % heroVideoPlaylist.length;
            setVideoSource(currentVideo, heroVideoPlaylist[preloadIndex]);
            activeHeroVideoSlot = nextSlot;
        };

        heroVideos.forEach((videoElement) => {
            videoElement.addEventListener('ended', swapToNextVideo);
        });
    }

    // Floating Action Bubble Logic
    const fabTrigger = document.getElementById('fab-trigger');
    const fabSheet = document.getElementById('fab-sheet');
    const fabClose = document.getElementById('fab-close');

    if (fabTrigger && fabSheet) {
        fabTrigger.addEventListener('click', () => {
            fabSheet.classList.toggle('is-open');
        });

        if (fabClose) {
            fabClose.addEventListener('click', () => {
                fabSheet.classList.remove('is-open');
            });
        }

        // Click outside to close fab sheet
        document.addEventListener('click', (e) => {
            if (!fabSheet.contains(e.target) && !fabTrigger.contains(e.target)) {
                fabSheet.classList.remove('is-open');
            }
        });
    }

    // Scroll Animations (Fade in elements on scroll)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Select elements to animate. We'll animate all main sections and property cards.
    const animElements = document.querySelectorAll('.section, .finder-card, .property-card, .service-card, .guide-card, .detail-layout');

    animElements.forEach(el => {
        // Add the base class for the animation to all targeted elements
        el.classList.add('fade-in-section');
        observer.observe(el);
    });
});
