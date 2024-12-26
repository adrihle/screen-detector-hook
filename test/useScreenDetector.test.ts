import { act, renderHook } from '@testing-library/react';
import { useScreenDetector } from '../src/useScreenDetector';

const HOOK_PARAMS = {
  breakpoints: {
    mobile: 400,
    tablet: 500,
    desktop: 1000,
  }
};

describe('useScreenDetector', () => {
  it.each([
    { breakpoint: 'mobile', width: 350, landscape: true },
    { breakpoint: 'tablet', width: 600, landscape: false },
    { breakpoint: 'desktop', width: 1001, landscape: true },
  ])('Should return $breakpoint for $width and landscape: $landscape', ({ breakpoint, width, landscape }) => {
    global.innerWidth = width;
    if (landscape) global.innerHeight = 200;
    else global.innerHeight = 2000;

    const { result } = renderHook(() => useScreenDetector(HOOK_PARAMS));
    expect(result.current.landscape).toBe(landscape);
    expect(result.current.screen).toBe(breakpoint);
  });

  it('Should detect screen change', () => {
    global.innerHeight = 900;
    global.innerWidth = 500;

    const { result } = renderHook(() => useScreenDetector({ ...HOOK_PARAMS, detector: true }))

    expect(result.current.landscape).toBeFalsy();

    act(() => {
      global.innerWidth = 1000;
      global.dispatchEvent(new Event('resize'));
    });

    expect(result.current.landscape).toBeTruthy();
  })
});
