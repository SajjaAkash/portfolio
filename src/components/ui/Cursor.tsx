"use client"

import React, { useEffect, useRef, useState } from 'react';

const CURSOR_TYPES = {
  default: { size: 20, opacity: 0.4, blur: 0, border: '1px solid rgba(99, 102, 241, 0.5)' },
  link: { size: 40, opacity: 0.8, blur: 4, border: '1px solid rgba(99, 102, 241, 0.8)' },
  button: { size: 50, opacity: 0.9, blur: 2, border: 'none', background: 'rgba(99, 102, 241, 0.2)' },
  card: { size: 80, opacity: 0.6, blur: 8, border: '2px solid rgba(99, 102, 241, 0.3)' },
};

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [cursorType, setCursorType] = useState('default');
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  const mousePos = useRef({ x: 0, y: 0 });
  const followerPos = useRef({ x: 0, y: 0 });
  const rafId = useRef<number>();
  const idleTimer = useRef<NodeJS.Timeout>();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);
    
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
      
      setIsMoving(true);
      if (idleTimer.current) clearTimeout(idleTimer.current);
      idleTimer.current = setTimeout(() => setIsMoving(false), 1000);

      // Simple event delegation for data-cursor
      const target = e.target as HTMLElement;
      const interactive = target.closest('[data-cursor]');
      if (interactive) {
        const type = interactive.getAttribute('data-cursor') || 'default';
        const text = interactive.getAttribute('data-cursor-text') || '';
        setCursorType(type);
        setCursorText(text);
      } else {
        setCursorType('default');
        setCursorText('');
      }
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    const animate = () => {
      const lerp = isReducedMotion ? 1 : 0.15;
      
      followerPos.current.x += (mousePos.current.x - followerPos.current.x) * lerp;
      followerPos.current.y += (mousePos.current.y - followerPos.current.y) * lerp;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0)`;
      }
      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${followerPos.current.x}px, ${followerPos.current.y}px, 0)`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (rafId.current) cancelAnimationFrame(rafId.current);
      if (idleTimer.current) clearTimeout(idleTimer.current);
    };
  }, [isVisible, isReducedMotion]);

  if (!mounted) return null;

  const activeStyle = CURSOR_TYPES[cursorType as keyof typeof CURSOR_TYPES] || CURSOR_TYPES.default;

  return (
    <div className={`fixed inset-0 pointer-events-none z-[9999] transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Base Layer (Static Size) */}
      <div
        ref={cursorRef}
        className="absolute top-0 left-0 w-2 h-2 -ml-1 -mt-1 bg-primary-500 rounded-full will-change-transform"
      />

      {/* Follower Layer (Animated Size/Style) */}
      <div
        ref={followerRef}
        className="absolute top-0 left-0 rounded-full flex items-center justify-center will-change-transform overflow-hidden"
        style={{
          width: activeStyle.size,
          height: activeStyle.size,
          marginLeft: -activeStyle.size / 2,
          marginTop: -activeStyle.size / 2,
          border: activeStyle.border,
          background: (activeStyle as any).background || 'transparent',
          backdropFilter: `blur(${activeStyle.blur}px)`,
          opacity: isMoving ? activeStyle.opacity : activeStyle.opacity * 0.6,
          transition: `width ${isReducedMotion ? '0s' : '0.2s'} ease-out, 
                       height ${isReducedMotion ? '0s' : '0.2s'} ease-out, 
                       margin ${isReducedMotion ? '0s' : '0.2s'} ease-out,
                       opacity 0.4s ease-out,
                       background 0.2s ease-out,
                       border 0.2s ease-out,
                       backdrop-filter 0.2s ease-out`,
        }}
      >
        {cursorText && (
          <span className="text-[10px] font-bold text-primary-400 uppercase tracking-widest animate-fade-in">
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
}
