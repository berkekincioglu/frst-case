import { Dimensions, PixelRatio, Platform } from 'react-native';

// Device dimensions
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// Base dimensions (for iPhone 11, used as base reference)
const BASE_WIDTH = 375;
const BASE_HEIGHT = 812;

// Determine if it's an iPhone X or newer with notch
const isIphoneX = () => {
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTV &&
    (SCREEN_HEIGHT >= 812 || SCREEN_WIDTH >= 812)
  );
};

/**
 * Width Percentage
 * Converts width dimension to percentage
 * @param dimension - number | string
 * @returns string - percentage string e.g. '25%'
 */
export function wp(dimension: number | string): string {
  const dimension_number = typeof dimension === 'number' ? dimension : parseFloat(dimension);
  return `${(dimension_number / BASE_WIDTH) * 100}%`;
}

/**
 * Height Percentage
 * Converts height dimension to percentage
 * @param dimension - number | string
 * @returns string - percentage string e.g. '25%'
 */
export function hp(dimension: number | string): string {
  const dimension_number = typeof dimension === 'number' ? dimension : parseFloat(dimension);
  return `${(dimension_number / BASE_HEIGHT) * 100}%`;
}

/**
 * Scale a size horizontally based on screen width
 * @param size - number
 * @returns number - scaled size
 */
export function s(size: number): number {
  return PixelRatio.roundToNearestPixel((SCREEN_WIDTH / BASE_WIDTH) * size);
}

/**
 * Scale a size vertically based on screen height
 * @param size - number
 * @returns number - scaled size
 */
export function vs(size: number): number {
  return PixelRatio.roundToNearestPixel((SCREEN_HEIGHT / BASE_HEIGHT) * size);
}

/**
 * Moderately scale a size based on screen width
 * More consistent than s() for text sizes across different screen sizes
 * @param size - number
 * @param factor - number - adjustment factor, default 0.5
 * @returns number - scaled size
 */
export function ms(size: number, factor: number = 0.5): number {
  const scaledSize = s(size);
  const moderateFactor = size * factor;
  return PixelRatio.roundToNearestPixel(scaledSize + (scaledSize - size) * (moderateFactor / 100));
}

/**
 * Get responsive size based on both height and width
 * Useful for elements that need to be responsive in both dimensions
 * @param size - number
 * @returns number - scaled size
 */
export function rs(size: number): number {
  const widthScale = SCREEN_WIDTH / BASE_WIDTH;
  const heightScale = SCREEN_HEIGHT / BASE_HEIGHT;
  const scale = Math.min(widthScale, heightScale);
  return PixelRatio.roundToNearestPixel(size * scale);
}

/**
 * Get responsive padding that accounts for notched devices
 * @param top - number - default top padding
 * @param bottom - number - default bottom padding
 * @returns object - { top, bottom } padding values
 */
export function getResponsivePadding(top: number = 0, bottom: number = 0) {
  return {
    paddingTop: isIphoneX() ? vs(top + 20) : vs(top),
    paddingBottom: isIphoneX() ? vs(bottom + 20) : vs(bottom),
  };
}

/**
 * Get responsive font size
 * Uses ms() for more consistent text scaling
 * @param size - number
 * @returns number - scaled font size
 */
export function fs(size: number): number {
  return ms(size, 0.3); // Use a smaller factor for fonts
}

// Listen for dimension changes (e.g. orientation changes)
Dimensions.addEventListener('change', () => {
  const { width, height } = Dimensions.get('window');
  // Update the dimensions
  if (width !== SCREEN_WIDTH || height !== SCREEN_HEIGHT) {
    // You could put additional logic here if needed
    // This will cause the next call to s(), vs(), ms() to use the new dimensions
  }
});

export default {
  s,
  vs,
  ms,
  rs,
  wp,
  hp,
  fs,
  getResponsivePadding,
  screenWidth: SCREEN_WIDTH,
  screenHeight: SCREEN_HEIGHT,
  isIphoneX: isIphoneX(),
};
