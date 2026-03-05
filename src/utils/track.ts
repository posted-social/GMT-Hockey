declare function gtag(...args: unknown[]): void;

export function track(label: string, category = 'outbound') {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'click', {
      event_category: category,
      event_label: label,
    });
  }
}
