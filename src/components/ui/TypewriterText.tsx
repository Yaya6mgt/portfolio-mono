import { useEffect, useMemo, useState, type ElementType } from 'react';

interface TypewriterTextProps {
  text: string;
  className?: string;
  as?: ElementType;
  typingSpeed?: number;
  startDelay?: number;
  loop?: boolean;
  loopDelay?: number;
  showCursor?: boolean;
  cursorChar?: string;
}

function TypewriterText({
  text,
  className,
  as: Component = 'span',
  typingSpeed = 70,
  startDelay = 0,
  loop = false,
  loopDelay = 2200,
  showCursor = true,
  cursorChar = '|',
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState('');

  const safeTypingSpeed = Math.max(15, typingSpeed);
  const safeStartDelay = Math.max(0, startDelay);
  const safeLoopDelay = Math.max(500, loopDelay);

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      return false;
    }

    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayedText(text);
      return;
    }

    let cancelled = false;
    const timeouts: number[] = [];

    const schedule = (callback: () => void, delay: number) => {
      const timeoutId = window.setTimeout(() => {
        if (!cancelled) {
          callback();
        }
      }, delay);

      timeouts.push(timeoutId);
    };

    const runTyping = (index: number) => {
      setDisplayedText(text.slice(0, index));

      if (index >= text.length) {
        if (loop) {
          schedule(() => runTyping(0), safeLoopDelay);
        }
        return;
      }

      schedule(() => runTyping(index + 1), safeTypingSpeed);
    };

    setDisplayedText('');
    schedule(() => runTyping(0), safeStartDelay);

    return () => {
      cancelled = true;
      timeouts.forEach((id) => window.clearTimeout(id));
    };
  }, [loop, prefersReducedMotion, safeLoopDelay, safeStartDelay, safeTypingSpeed, text]);

  return (
    <Component className={className}>
      {displayedText}
      {showCursor && (
        <span aria-hidden="true" className="ml-0.5 inline-block animate-pulse opacity-80">
          {cursorChar}
        </span>
      )}
    </Component>
  );
}

export default TypewriterText;
