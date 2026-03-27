import { useEffect, useRef } from 'react';

const ParticleField = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        let animId;
        let particles = [];
        const W = () => window.innerWidth;
        const H = () => window.innerHeight;

        const resize = () => {
            canvas.width = W();
            canvas.height = H();
        };
        resize();
        window.addEventListener('resize', resize);

        const COUNT = Math.min(100, Math.floor(W() / 14));

        class Particle {
            constructor() { this.reset(); }
            reset() {
                this.x = Math.random() * W();
                this.y = Math.random() * H();
                this.vx = (Math.random() - 0.5) * 0.3;
                this.vy = (Math.random() - 0.5) * 0.3;
                this.r = Math.random() * 1.2 + 0.3;
                this.alpha = Math.random() * 0.5 + 0.15;
                this.color = Math.random() > 0.6 ? '#FFFACD' : '#FFD700';
            }
            update() {
                this.x += this.vx;
                this.y += this.vy;
                if (this.x < 0 || this.x > W() || this.y < 0 || this.y > H()) this.reset();
            }
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.globalAlpha = this.alpha;
                ctx.fill();
                ctx.globalAlpha = 1;
            }
        }

        for (let i = 0; i < COUNT; i++) particles.push(new Particle());

        const drawConnections = () => {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 100) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = '#FFD700';
                        ctx.globalAlpha = (1 - dist / 100) * 0.12;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                        ctx.globalAlpha = 1;
                    }
                }
            }
        };

        const tick = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => { p.update(); p.draw(); });
            drawConnections();
            animId = requestAnimationFrame(tick);
        };

        tick();

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            id="particle-canvas"
            style={{ position: 'fixed', inset: 0, zIndex: -1, pointerEvents: 'none', opacity: 0.55 }}
        />
    );
};

export default ParticleField;
