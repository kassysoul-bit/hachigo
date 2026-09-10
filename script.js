// 問い合わせ先が確定したら null を { label: 'Instagram', url: 'https://www.instagram.com/アカウント/' } に変更。
const contact = null;
if (contact) {
  try {
    const url = new URL(contact.url);
    if (['https:', 'mailto:'].includes(url.protocol)) {
      const link = document.createElement('a');
      link.href = url.href;
      link.textContent = contact.label;
      const container = document.getElementById('contact');
      container.append(link);
      container.hidden = false;
    }
  } catch { /* URLが無効な場合は問い合わせ欄を表示しません。 */ }
}
