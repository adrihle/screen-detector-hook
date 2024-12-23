import { useCallback, useEffect, useMemo, useState } from "react";

type Screen = 'mobile' | 'tablet' | 'desktop';
type Width = number;

type UseScreenDetectorParams = {
  breakpoints: Partial<Record<Screen, Width>>;
  detector?: boolean;
};

const useScreenDetector = ({ breakpoints, detector }: UseScreenDetectorParams) => {
  const entries = useMemo(() => (Object.entries(breakpoints).sort((a, b) => a[1] > b[1] ? 1 : -1) as [Screen, Width][]), [breakpoints]);
  const [screen, setScreen] = useState<Screen>(entries[0][0]);
  const [landscape, setLandscape] = useState<boolean>(false);

  const handleSize = useCallback(() => {
    let innerWidth = window.innerWidth
    let innerHeight = window.innerHeight

    const screenDetected = entries.reduce((prev, [breakpoint, width]) => {
      if (width < innerWidth) return breakpoint;
      return prev;
    }, entries[0][0]);

    if (screenDetected) {
      setScreen(screenDetected);
    }

    setLandscape(innerWidth > innerHeight);
  }, [breakpoints]);

  useEffect(() => {
    handleSize();
    if (!detector) return;
    window.addEventListener('resize', handleSize)
    return () => { window.removeEventListener('resize', handleSize) }
  }, [breakpoints])

  return { screen, landscape };
};

export { useScreenDetector };
