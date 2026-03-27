import { useEffect, useRef } from 'react';

const CustomCursor = () => {
    const dotRef = useRef(null);
    const ringRef = useRef(null);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        const dot = dotRef.current;
        const ring = ringRef.current;
        if (!dot || !ring) return;

        let mouseX = 0, mouseY = 0;
        let ringX = 0, ringY = 0;
        let animId;

        const onMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            dot.style.left = mouseX + 'px';
            dot.style.top = mouseY + 'px';
        };

        const animateRing = () => {
            ringX += (mouseX - ringX) * 0.12;
            ringY += (mouseY - ringY) * 0.12;
            ring.style.left = ringX + 'px';
            ring.style.top = ringY + 'px';
            animId = requestAnimationFrame(animateRing);
        };

        window.addEventListener('mousemove', onMouseMove);
        animateRing();

        const onEnter = () => {
            dot.style.transform = 'translate(-50%,-50%) scale(1.8)';
            dot.style.background = '#FFFACD';
            ring.style.transform = 'translate(-50%,-50%) scale(1.5)';
            ring.style.borderColor = 'rgba(168,85,247,0.6)';
        };
        const onLeave = () => {
            dot.style.transform = 'translate(-50%,-50%) scale(1)';
            dot.style.background = '#FFD700';
            ring.style.transform = 'translate(-50%,-50%) scale(1)';
            ring.style.borderColor = 'rgba(0,212,255,0.5)';
        };

        const interactives = document.querySelectorAll('a, button, input, textarea, [data-hover]');
        interactives.forEach(el => {
            el.addEventListener('mouseenter', onEnter);
            el.addEventListener('mouseleave', onLeave);
        });

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('mousemove', onMouseMove);
        };
    }, []);

    return (
        <>
            <div
                ref={dotRef}
                className="cursor-dot"
                style={{
                    position: 'fixed', zIndex: 99999, pointerEvents: 'none',
                    width: 8, height: 8, background: '#FFD700', borderRadius: '50%',
                    transform: 'translate(-50%,-50%)', transition: 'transform 0.2s, background 0.2s',
                    boxShadow: '0 0 10px #FFD700, 0 0 20px #FFD700'
                }}
            />
            <div
                ref={ringRef}
                className="cursor-ring"
                style={{
                    position: 'fixed', zIndex: 99998, pointerEvents: 'none',
                    width: 36, height: 36, border: '1.5px solid rgba(0,212,255,0.5)',
                    borderRadius: '50%', transform: 'translate(-50%,-50%)',
                    transition: 'transform 0.3s, border-color 0.3s'
                }}
            />
        </>
    );
};

export default CustomCursor;
