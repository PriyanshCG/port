import { useRef, useEffect } from 'react';

const MatrixBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%";
        const fontSize = 14;
        const columns = width / fontSize;
        const drops = [];

        for (let x = 0; x < columns; x++) {
            drops[x] = 1;
        }

        const resize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            // Reset drops on resize might be too jarring, but necessary for correct column count
            // Alternatively, just extend the array if width increases
        };

        window.addEventListener('resize', resize);

        const draw = () => {
            ctx.fillStyle = "rgba(0, 0, 0, 0.05)"; // Fade effect
            ctx.fillRect(0, 0, width, height);

            ctx.fillStyle = "#0F0"; // Green text (or change to blue)
            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                const text = letters.charAt(Math.floor(Math.random() * letters.length));
                // Use blue tint instead of pure green for theme consistency or mix
                // ctx.fillStyle = Math.random() > 0.5 ? "#00AEEF" : "#0F0"; 
                ctx.fillStyle = "#00AEEF"; // Keeping it theme consistent (Neon Blue)

                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };

        const interval = setInterval(draw, 33);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 z-0 bg-pure-black opacity-30" />;
};

export default MatrixBackground;
