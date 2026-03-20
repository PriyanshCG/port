import { useRef, useEffect } from 'react';

const DotBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        // Mouse position
        const mouse = { x: -1000, y: -1000 };

        const resize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };

        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', handleMouseMove);

        class Dot {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                this.baseSize = 1.5;
                this.size = this.baseSize;
                this.color = 'rgba(255, 255, 255, 0.15)';
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
            }

            update() {
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const maxDistance = 150;

                if (distance < maxDistance) {
                    const scale = (maxDistance - distance) / maxDistance;
                    this.size = this.baseSize + (scale * 3); // Scale up to 4.5px
                    this.color = `rgba(0, 174, 239, ${0.2 + scale * 0.8})`; // Blue glow
                } else {
                    this.size = this.baseSize;
                    this.color = 'rgba(255, 255, 255, 0.15)';
                }

                this.draw();
            }
        }

        const spacing = 30;
        let dots = [];

        const init = () => {
            dots = [];
            for (let x = spacing / 2; x < width; x += spacing) {
                for (let y = spacing / 2; y < height; y += spacing) {
                    dots.push(new Dot(x, y));
                }
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, width, height);
            dots.forEach(dot => dot.update());
            requestAnimationFrame(animate);
        };

        init();
        animate();

        // Re-init on resize to fill new space
        const handleResize = () => {
            resize();
            init();
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 z-0 bg-pure-black pointer-events-none" />;
};

export default DotBackground;
