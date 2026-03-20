import { useRef, useEffect } from 'react';

const FallingShapes = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        const shapes = [];

        const resize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resize);

        class Shape {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height - height; // Start above
                this.size = Math.random() * 20 + 10;
                this.speed = Math.random() * 2 + 1;
                this.angle = Math.random() * 360;
                this.rotationSpeed = Math.random() * 2 - 1;
                this.opacity = Math.random() * 0.3 + 0.1;
            }

            update() {
                this.y += this.speed;
                this.angle += this.rotationSpeed;

                if (this.y > height + 50) {
                    this.y = -50;
                    this.x = Math.random() * width;
                }
            }

            draw() {
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.rotate((this.angle * Math.PI) / 180);

                ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
                // Draw rounded rectangle
                const w = this.size;
                const h = this.size;
                const r = this.size / 4;

                ctx.beginPath();
                ctx.moveTo(-w / 2 + r, -h / 2);
                ctx.lineTo(w / 2 - r, -h / 2);
                ctx.quadraticCurveTo(w / 2, -h / 2, w / 2, -h / 2 + r);
                ctx.lineTo(w / 2, h / 2 - r);
                ctx.quadraticCurveTo(w / 2, h / 2, w / 2 - r, h / 2);
                ctx.lineTo(-w / 2 + r, h / 2);
                ctx.quadraticCurveTo(-w / 2, h / 2, -w / 2, h / 2 - r);
                ctx.lineTo(-w / 2, -h / 2 + r);
                ctx.quadraticCurveTo(-w / 2, -h / 2, -w / 2 + r, -h / 2);

                ctx.fill();
                ctx.restore();
            }
        }

        const init = () => {
            for (let i = 0; i < 30; i++) {
                shapes.push(new Shape());
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, width, height);
            shapes.forEach(shape => {
                shape.update();
                shape.draw();
            });
            requestAnimationFrame(animate);
        };

        init();
        animate();

        return () => {
            window.removeEventListener('resize', resize);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 z-0 bg-pure-black" />;
};

export default FallingShapes;
