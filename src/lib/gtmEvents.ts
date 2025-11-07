"use client";

declare global {
  interface Window {
    dataLayer: Record<string, any>[];
  }
}
function gtmPush(event: string, params: Record<string, any> = {}) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event,
    ...params,
  });
}

/**
 * Клік по кнопці "Візит" (наприклад, перехід на Google Maps, запис, сайт-партнер).
 * @param label - куди веде клік (google_maps, book_visit, etc.)
 */
export function trackVisitClick(label: string = "visit") {
  gtmPush("click_visit", {
    click_area: "visit",
    click_label: label,
  });
}

/**
 * Клік по телефону
 * @param phone - номер, по якому клікнули
 * @param place - звідки клікнули (header, footer, contact_page, etc.)
 */
export function trackPhoneClick(
  phone: string,
  place: string = "unknown"
) {
  gtmPush("click_phone", {
    click_area: "phone",
    phone,
    place,
  });
}

/**
 * Клік по контактах (кнопка "Контакти", скролл до секції, відкриття форми)
 * @param action - тип дії (open_contacts_section, open_contact_form, etc.)
 * @param place - звідки клікнули (header, hero, footer, etc.)
 */
export function trackContactClick(
  action: string = "open_contacts",
  place: string = "unknown"
) {
  gtmPush("click_contacts", {
    click_area: "contacts",
    action,
    place,
  });
}
