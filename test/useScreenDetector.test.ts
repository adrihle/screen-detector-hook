import { renderHook } from '@testing-library/react';
import { useScreenDetector } from '../src/useScreenDetector';

describe('useScreenDetector', () => {
  it.each([
    { breakpoint: 'mobile', width: 350, landscape: true },
    { breakpoint: 'tablet', width: 600, landscape: false },
    { breakpoint: 'desktop', width: 1001, landscape: true },
  ])('Should return $breakpoint for $width and landscape: $landscape', ({ breakpoint, width, landscape }) => {
    global.innerWidth = width;
    if (landscape) global.innerHeight = 200;
    else global.innerHeight = 2000;

    const { result } = renderHook(() => useScreenDetector({
      breakpoints: {
        mobile: 400,
        tablet: 500,
        desktop: 1000,
      }
    }));
    expect(result.current.landscape).toBe(landscape);
    expect(result.current.screen).toBe(breakpoint);
  });
});
