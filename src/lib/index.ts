export const AppName = 'YelpCamp';

export function readMore(text: string | undefined | null, length = 255) {
	if (!text) return '';
	if (text.length <= length) return text;
	return `${text.substring(0, length)}...`;
}

export function formatAsCurrency(value: number | bigint | Intl.StringNumericLiteral) {
	return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
}
