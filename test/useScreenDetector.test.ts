import { renderHook } from '@testing-library/react';
import { useScreenDetector } from '../src/useScreenDetector';

describe('useScreenDetector', () => {
  it.each([
    { breakpoint: 'mobile', width: 350 },
    { breakpoint: 'tablet', width: 600 },
    { breakpoint: 'desktop', width: 1001 },
  ])('Should return $breakpoint for $width', ({ breakpoint, width }) => {
    global.innerWidth = width;
    const { result } = renderHook(() => useScreenDetector({
      breakpoints: {
        mobile: 400,
        tablet: 500,
        desktop: 1000,
      }
    }));
    expect(result.current.screen).toBe(breakpoint);
  });
});
