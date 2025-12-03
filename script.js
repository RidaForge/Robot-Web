  // Register GSAP plugins
        gsap.registerPlugin(ScrollTrigger, TextPlugin);

        // Hero section animations with pin and scrub
        const heroTl = gsap.timeline({
            scrollTrigger: {
                trigger: "#Home",
                pin: true,
                start: "top top",
                end: "+=1000",
                scrub: 1
            }
        });

        heroTl
            .to(".main-material h1", { 
                opacity: 1, 
                y: -50, 
                duration: 1 
            })
            .to(".main-material p", { 
                opacity: 1, 
                y: -30, 
                duration: 1 
            }, "-=0.5")
            .to(".main-material button", { 
                opacity: 1, 
                y: -20, 
                duration: 1 
            }, "-=0.5");

        // About section animations with scrub
        gsap.utils.toArray("#about").forEach(section => {
            // Animate about image
            gsap.to(".about-img", {
                opacity: 1,
                x: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    end: "bottom 20%",
                    scrub: 1
                }
            });

            // Animate about material
            gsap.to(".about-material", {
                opacity: 1,
                x: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    end: "bottom 20%",
                    scrub: 1
                }
            });

            // Animate cards with stagger
            gsap.to(".cards", {
                opacity: 1,
                y: 0,
                duration: 0.5,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: ".about-card-container",
                    start: "top 80%",
                    end: "bottom 20%",
                    scrub: 1
                }
            });
        });

        // Process section animations with pin and scrub
        const processTl = gsap.timeline({
            scrollTrigger: {
                trigger: "#process",
                pin: true,
                start: "top top",
                end: "+=2000",
                scrub: 1
            }
        });

        processTl
            .to(".section-title", { 
                opacity: 1, 
                y: 0, 
                duration: 1 
            })
            .to(".process-line", { 
                scaleX: 1, 
                duration: 2 
            }, "-=0.5")
            .to(".step", { 
                opacity: 1, 
                scale: 1, 
                stagger: 0.3, 
                duration: 0.5 
            }, "-=1");

        // Technology section animations
        gsap.to(".tech-heading h1", {
            transform: "translateX(-260%)",
            scrollTrigger: {
                trigger: "#technology h1",
                scroller: "body",
                start: "top 0%",
                end: "top -150%",
                scrub: 3,
                pin: true
            }
        });

        gsap.to(".tech-item", {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            scrollTrigger: {
                trigger: ".tech-grid",
                start: "top 80%",
                end: "bottom 20%",
                scrub: 1
            }
        });

        // Gallery section animations
        gsap.to(".gallery-item", {
            opacity: 1,
            scale: 1,
            duration: 1,
            stagger: 0.2,
            scrollTrigger: {
                trigger: ".gallery-grid",
                start: "top 80%",
                end: "bottom 20%",
                scrub: 1
            }
        });

        // Team section animations
        gsap.to(".team-card", {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            scrollTrigger: {
                trigger: ".team-grid",
                start: "top 80%",
                end: "bottom 20%",
                scrub: 1
            }
        });

        // Contact section animations
        gsap.to(".contact-form", {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
                trigger: "#contact",
                start: "top 80%",
                end: "bottom 20%",
                scrub: 1
            }
        });

        // Background animations
        gsap.to(".bg-animation", {
            backgroundPosition: "20px 20px, 20px 30px, 30px 10px, 10px 20px",
            duration: 30,
            repeat: -1,
            ease: "linear"
        });

        gsap.to(".circuit-lines", {
            backgroundPosition: "50px 0, 0 50px",
            duration: 15,
            repeat: -1,
            ease: "linear"
        });

        // Header scroll effect
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(11, 15, 19, 0.98)';
                header.style.padding = '15px 50px';
            } else {
                header.style.background = 'rgba(11, 15, 19, 0.9)';
                header.style.padding = '20px 50px';
            }
        });

        // Mobile menu toggle
        document.querySelector('.mobile-menu-toggle').addEventListener('click', function() {
            const navLinks = document.querySelector('.nav-links');
            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.backgroundColor = 'rgba(11, 15, 19, 0.95)';
                navLinks.style.padding = '20px';
            }
        });

        // Button click animation
        document.querySelector('.main-material button').addEventListener('click', function() {
            gsap.to(this, {
                scale: 0.95,
                duration: 0.1,
                yoyo: true,
                repeat: 1,
                ease: "power2.inOut",
                onComplete: () => {
                    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

        // Form submission
        document.querySelector('.contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (name && email && message) {
                // Show success message
                const successMsg = document.createElement('div');
                successMsg.textContent = 'Message sent successfully!';
                successMsg.style.cssText = `
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background: linear-gradient(45deg, var(--neon-blue), var(--neon-orange));
                    color: var(--bg-primary);
                    padding: 25px 50px;
                    border-radius: 15px;
                    font-weight: bold;
                    font-size: 1.2rem;
                    z-index: 10000;
                    box-shadow: 0 0 40px rgba(0, 209, 255, 0.5);
                `;
                document.body.appendChild(successMsg);
                
                // Animate success message
                gsap.fromTo(successMsg, 
                    { scale: 0, opacity: 0 },
                    { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)" }
                );
                
                // Remove message after 3 seconds
                setTimeout(() => {
                    gsap.to(successMsg, {
                        scale: 0,
                        opacity: 0,
                        duration: 0.4,
                        onComplete: () => successMsg.remove()
                    });
                }, 3000);
                
                // Reset form
                this.reset();
            }
        });