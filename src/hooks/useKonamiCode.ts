import { useState, useEffect } from 'react';

const KONAMI_SEQUENCE = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a'
];

export function useKonamiCode(onSuccess: () => void) {
  const [keyIndex, setKeyIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      const expectedKey = KONAMI_SEQUENCE[keyIndex].length === 1 
        ? KONAMI_SEQUENCE[keyIndex].toLowerCase() 
        : KONAMI_SEQUENCE[keyIndex];

      if (key === expectedKey) {
        const nextIndex = keyIndex + 1;
        if (nextIndex === KONAMI_SEQUENCE.length) {
          onSuccess();
          setKeyIndex(0);
        } else {
          setKeyIndex(nextIndex);
        }
      } else {
        setKeyIndex(0);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [keyIndex, onSuccess]);
}
