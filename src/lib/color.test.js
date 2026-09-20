import { describe, it, expect, beforeEach, afterEach } from 'vitest';

import { resolveColor } from '$lib/color';

const DEFAULT = '#3388ff';

describe('resolveColor', () => {
	beforeEach(() => {
		document.documentElement.style.setProperty('--brand-color', '#00ff00');
	});

	afterEach(() => {
		document.documentElement.style.removeProperty('--brand-color');
	});

	it('passes through concrete colours untouched', () => {
		expect(resolveColor('#ff0000')).toBe('#ff0000');
		expect(resolveColor('red')).toBe('red');
		expect(resolveColor('hsl(1 2% 3%)')).toBe('hsl(1 2% 3%)');
	});

	it('resolves a CSS custom property to a real colour', () => {
		expect(resolveColor('var(--brand-color)')).toBe('#00ff00');
	});

	it('resolves a var() with whitespace', () => {
		expect(resolveColor('var( --brand-color )')).toBe('#00ff00');
	});

	it('uses the inline fallback when the variable is not defined', () => {
		expect(resolveColor('var(--missing-color, #abcdef)')).toBe('#abcdef');
	});

	it('resolves nested var() fallbacks', () => {
		expect(resolveColor('var(--missing-color, var(--brand-color))')).toBe('#00ff00');
	});

	it('falls back to the provided default when nothing resolves', () => {
		expect(resolveColor('var(--missing-color)', DEFAULT)).toBe(DEFAULT);
		expect(resolveColor('var(--missing-color, var(--also-missing))', DEFAULT)).toBe(DEFAULT);
		expect(resolveColor('var()', DEFAULT)).toBe(DEFAULT);
	});

	it('falls back for empty or non-string input instead of throwing', () => {
		expect(resolveColor(null, DEFAULT)).toBe(DEFAULT);
		expect(resolveColor(undefined, DEFAULT)).toBe(DEFAULT);
		expect(resolveColor('', DEFAULT)).toBe(DEFAULT);
		expect(resolveColor({}, DEFAULT)).toBe(DEFAULT);
	});
});
