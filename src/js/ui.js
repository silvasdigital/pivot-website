// UI rendering utilities
import { getCurrentLanguage } from './utils.js';

export function getText(item) {
  if (!item) return '';
  if (typeof item === 'string') return item;
  const lang = getCurrentLanguage();
  return item[lang] || item.en || '';
}

export function renderServiceCard(service, lang) {
  const title = getText(service.title);
  const description = getText(service.description);
  const features = service.features ? getText(service.features) : [];

  const card = document.createElement('div');
  card.className = 'icon-card';

  const iconClass = service.icon || 'fas fa-star';

  card.innerHTML = `
    <div class="icon"><i class="${iconClass}"></i></div>
    <h3>${title}</h3>
    <p>${description}</p>
    ${
      Array.isArray(features) && features.length > 0
        ? `
      <ul style="text-align: left; margin-top: 1rem; list-style: none;">
        ${features
          .map(
            (f) =>
              `<li style="padding: 0.4rem 0; color: var(--text-muted); font-size: 0.9rem;"><i class="fas fa-check" style="color: var(--success); margin-right: 0.6rem;"></i>${f}</li>`,
          )
          .join('')}
      </ul>
    `
        : ''
    }
  `;
  return card;
}

export function renderProjectCard(project, lang) {
  const title = getText(project.title);
  const description = getText(project.description);
  const category = getText(project.category);
  const status = getText(project.status);
  const location = getText(project.location);

  const card = document.createElement('div');
  card.className = 'property-card';

  const imageUrl =
    project.image || 'https://via.placeholder.com/600x350?text=Project';

  card.innerHTML = `
    <img src="${imageUrl}" alt="${title}" class="property-image" onerror="this.src='https://via.placeholder.com/600x350?text=Project'">
    <div class="property-content">
      <div class="property-type">${category}</div>
      <h3 class="property-title">${title}</h3>
      <p class="property-description">${description}</p>
      <div style="display: flex; gap: 1rem; align-items: center; font-size: 0.9rem; color: var(--text-muted); margin: 1rem 0;">
        <span><i class="fas fa-map-marker-alt" style="color: var(--accent); margin-right: 0.3rem;"></i>${location}</span>
        <span><i class="fas fa-check-circle" style="color: var(--success); margin-right: 0.3rem;"></i>${status}</span>
      </div>
      <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--border);">
        <a href="/portfolio.html" class="cta-button" style="display: inline-block; padding: 0.6rem 1.5rem; font-size: 0.9rem;">
          <i class="fas fa-external-link-alt" style="margin-right: 0.5rem;"></i>${
            lang === 'ar' ? 'عرض التفاصيل' : 'View Details'
          }
        </a>
      </div>
    </div>
  `;
  return card;
}

export function renderProjectDetailCard(project, lang) {
  const title = getText(project.title);
  const description = getText(project.fullDescription || project.description);
  const category = getText(project.category);
  const status = getText(project.status);
  const location = getText(project.location);
  const features = project.features ? getText(project.features) : [];

  const card = document.createElement('div');
  card.className = 'property-card';

  const imageUrl =
    project.image || 'https://via.placeholder.com/800x400?text=Project';

  card.innerHTML = `
    <img src="${imageUrl}" alt="${title}" class="property-image" style="height: 350px;" onerror="this.src='https://via.placeholder.com/800x400?text=Project'">
    <div class="property-content">
      <div class="property-type">${category}</div>
      <h2 class="property-title" style="font-size: 2rem;">${title}</h2>
      <div style="display: flex; gap: 2rem; align-items: center; font-size: 0.95rem; color: var(--text-muted); margin: 1.5rem 0; flex-wrap: wrap;">
        <span><i class="fas fa-map-marker-alt" style="color: var(--accent); margin-right: 0.5rem;"></i>${location}</span>
        <span><i class="fas fa-check-circle" style="color: var(--success); margin-right: 0.5rem;"></i>${status}</span>
      </div>
      <div style="white-space: pre-wrap; line-height: 1.8; margin: 2rem 0; color: var(--text-muted);">${description}</div>
      ${
        Array.isArray(features) && features.length > 0
          ? `
        <div style="margin: 2rem 0;">
          <h3 style="margin-bottom: 1rem; color: var(--text-light);">${
            lang === 'ar' ? 'المميزات' : 'Features'
          }</h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
            ${features
              .map(
                (f) => `
              <div style="display: flex; align-items: center; gap: 0.8rem; padding: 1rem; background: rgba(212, 165, 116, 0.05); border-radius: 6px; border: 1px solid var(--border);">
                <i class="fas fa-check-circle" style="color: var(--success); font-size: 1.2rem;"></i>
                <span style="color: var(--text-muted);">${f}</span>
              </div>
            `,
              )
              .join('')}
          </div>
        </div>
      `
          : ''
      }
    </div>
  `;
  return card;
}

export function renderTeamMember(member, lang) {
  const name = member.name || '';
  const role = member.role || '';
  const description = member.description || '';
  const email = member.email || '';
  const icon = member.icon || 'fas fa-user-tie';

  const card = document.createElement('div');
  card.className = 'team-card';

  card.innerHTML = `
    <div>
      <div class="team-avatar"><i class="${icon}"></i></div>
      <h3 class="team-name">${name}</h3>
      <p class="team-role">${role}</p>
      <p class="team-description">${description}</p>
    </div>
    <p class="team-email">${email}</p>
  `;
  return card;
}

export function renderContactInfo(company, lang) {
  const div = document.createElement('div');
  div.className = 'contact-section';

  const contact = company.contact;

  div.innerHTML = `
    <div style="text-align: center; margin-bottom: 2rem;">
      <h2 style="font-size: 1.8rem; color: var(--text-light); margin-bottom: 0.5rem;">
        <i class="fas fa-envelope" style="color: var(--accent); margin-right: 0.8rem;"></i>
        ${lang === 'ar' ? 'تواصل معنا' : 'Get In Touch'}
      </h2>
      <p style="color: var(--text-muted);">${
        lang === 'ar'
          ? 'نحن هنا للإجابة على كل أسئلتك'
          : "We're here to answer any questions"
      }</p>
    </div>
    <div class="contact-info">
      <div class="contact-item">
        <div class="contact-icon"><i class="fas fa-phone"></i></div>
        <div class="contact-details">
          <h4>${lang === 'ar' ? 'الهاتف' : 'Phone'}</h4>
          <p><a href="tel:${contact.phone}" class="contact-link">${
            contact.phone
          }</a></p>
        </div>
      </div>
      <div class="contact-item">
        <div class="contact-icon"><i class="fab fa-whatsapp"></i></div>
        <div class="contact-details">
          <h4>WhatsApp</h4>
          <p><a href="https://wa.me/${contact.whatsapp.replace(
            /[^0-9+]/g,
            '',
          )}" class="contact-link" target="_blank">${contact.whatsapp}</a></p>
        </div>
      </div>
      <div class="contact-item">
        <div class="contact-icon"><i class="fas fa-envelope"></i></div>
        <div class="contact-details">
          <h4>${lang === 'ar' ? 'البريد الإلكتروني' : 'Email'}</h4>
          <p><a href="mailto:${contact.email}" class="contact-link">${
            contact.email
          }</a></p>
        </div>
      </div>
      <div class="contact-item">
        <div class="contact-icon"><i class="fas fa-map-marker-alt"></i></div>
        <div class="contact-details">
          <h4>${lang === 'ar' ? 'المقر الرئيسي' : 'Location'}</h4>
          <p>${contact.address}</p>
        </div>
      </div>
    </div>
  `;
  return div;
}
