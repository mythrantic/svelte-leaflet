/**
 * Colour resolution helpers.
 *
 * Leaflet needs real colour values in several option positions — notably SVG
 * presentation attributes such as a Circle's `fillColor`/`color` — and rejects
 * `var(--token)` because those attributes are not CSS declarations. Consumers
 * that theme with CSS custom properties can therefore pass a token and have it
 * resolved to a concrete colour here.
 *
 * Resolution never throws: anything that cannot be resolved (missing variable,
 * SSR, malformed input) falls back to a sane default.
 */

const DEFAULT_COLOR = '#3388ff';

function readCustomProperty(name: string): string {
	if (typeof window === 'undefined' || typeof document === 'undefined') return '';

	try {
		return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
	} catch {
		return '';
	}
}

/** Split `var(<name>[, <fallback>])` at the first top-level comma. */
function parseVar(expression: string): { name: string; fallback?: string } | null {
	if (!expression.startsWith('var(') || !expression.endsWith(')')) return null;

	const inner = expression.slice(4, -1);
	let depth = 0;

	for (let i = 0; i < inner.length; i += 1) {
		const char = inner[i];

		if (char === '(') {
			depth += 1;
		} else if (char === ')') {
			depth -= 1;
		} else if (char === ',' && depth === 0) {
			return {
				name: inner.slice(0, i).trim(),
				fallback: inner.slice(i + 1).trim()
			};
		}
	}

	return { name: inner.trim() };
}

/**
 * Resolve a colour option to a real value. Concrete colours pass through
 * untouched; `var(...)` tokens are resolved against the document, using the
 * inline fallback (recursively, if needed) when the variable is undefined.
 */
export function resolveColor(value: unknown, fallback: string = DEFAULT_COLOR): string {
	if (typeof value !== 'string') return fallback;

	const trimmed = value.trim();
	if (!trimmed) return fallback;

	const parsed = parseVar(trimmed);
	if (!parsed) return trimmed;

	const { name, fallback: inlineFallback } = parsed;

	if (name.startsWith('--')) {
		const resolved = readCustomProperty(name);
		if (resolved) return resolved;
	}

	if (inlineFallback) return resolveColor(inlineFallback, fallback);

	return fallback;
}
