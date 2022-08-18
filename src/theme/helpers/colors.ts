type Color = [number, number, number];
export type RGBColor = Color;
export type HSLColor = Color;
export type HSVColor = Color;

/**
 * Converts an RGB color value to Hex color.
 * @param rgb The RGB color value
 */
export const rgb2hex = (rgb: RGBColor): string => {
	// eslint-disable-next-line no-bitwise
	return '#' + ((1 << 24) + (rgb[0] << 16) + (rgb[1] << 8) + rgb[2]).toString(16).slice(1);
};

/**
 * Converts a Hex color value to RGB.
 * @param hex Hex color value
 */
export const hex2rgb = (hex: string): RGBColor => {
	// Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
	const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
	hex = hex.replace(shorthandRegex, function (m, r, g, b) {
		return r + r + g + g + b + b;
	});

	const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : [0, 0, 0];
};

/**
 * Convert an RGB color value to HSV.
 * @param r Red channel value
 * @param g Green channel value
 * @param b Blue channel value
 */
export const rgb2hsv = (r: number, g: number, b: number): HSVColor => {
	let v = Math.max(r, g, b),
		c = v - Math.min(r, g, b);
	let h = c && (v === r ? (g - b) / c : v === g ? 2 + (b - r) / c : 4 + (r - g) / c);
	return [60 * (h < 0 ? h + 6 : h), v && c / v, v];
};

/**
 * Convert an HSV color value to RGB.
 * @param h Hue
 * @param s Saturation
 * @param v Value
 */
export const hsv2rgb = (h: number, s: number, v: number): RGBColor => {
	let f = (n: number, k = (n + h / 60) % 6) => v - v * s * Math.max(Math.min(k, 4 - k, 1), 0);
	return [f(5), f(3), f(1)];
};

/**
 * Convert an RGB color value to HSL.
 * @param r Red channel value
 * @param g Green channel value
 * @param b Blue channel value
 */
export const rgb2hsl = (r: number, g: number, b: number): HSLColor => {
	let v = Math.max(r, g, b),
		c = v - Math.min(r, g, b),
		f = 1 - Math.abs(v + v - c - 1);
	let h = c && (v === r ? (g - b) / c : v === g ? 2 + (b - r) / c : 4 + (r - g) / c);
	return [60 * (h < 0 ? h + 6 : h), f ? c / f : 0, (v + v - c) / 2];
};

/**
 * Convert an HSL color value to RGB.
 * @param h Hue
 * @param s Saturation
 * @param l Lightness
 */
export const hsl2rgb = (h: number, s: number, l: number): RGBColor => {
	let a = s * Math.min(l, 1 - l);
	let f = (n: number, k = (n + h / 30) % 12) => l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
	return [f(0), f(8), f(4)];
};

/**
 * Convert an HSL color value to HSV.
 * @param h Hue
 * @param s Saturation
 * @param l Lightness
 * @param v Value
 */
export const hsl2hsv = (h: any, s: number, l: number, v = s * Math.min(l, 1 - l) + l): HSVColor => [
	h,
	v ? 2 - (2 * l) / v : 0,
	v,
];

/**
 * Convert an HSV color value to HSL.
 * @param h Hue
 * @param s Saturation
 * @param v Value
 * @param l Lightness
 * @param m Max value
 */
export const hsv2hsl = (h: any, s: number, v: number, l = v - (v * s) / 2, m = Math.min(l, 1 - l)): HSLColor => [
	h,
	m ? (v - l) / m : 0,
	l,
];
