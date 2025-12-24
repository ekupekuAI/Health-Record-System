export function showToast({ type = 'info', message = '', duration = 4000 } = {}) {
  window.dispatchEvent(new CustomEvent('show-toast', { detail: { type, message, duration } }))
}
