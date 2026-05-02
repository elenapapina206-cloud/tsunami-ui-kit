import React from 'react';
import './Footer.css';

// Иконка VK
const VKIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M15.07 2H8.93C3.45 2 2 3.45 2 8.93v6.14C2 20.55 3.45 22 8.93 22h6.14c5.48 0 6.93-1.45 6.93-6.93V8.93C22 3.45 20.55 2 15.07 2zm2.78 14.5h-1.3c-.69 0-.92-.39-1.3-.86-.49-.65-.98-1.26-1.65-1.26-.69 0-.82.31-.82.86v1.26c0 .77-.2 1-1.02 1H9.96c-1.89 0-3.19-1.28-4.06-3.15-.84-1.77-1.03-3.57-1.03-5.4 0-.67.22-.99 1.01-1h1.4c.67 0 .8.29 1.04.83.86 1.87 1.72 3.41 3.31 4.47.52.35.81.2.81-.52v-1.7c-.05-1.37-.8-1.48-1.26-1.56.38-.34.7-.77.9-1.2.12-.27.3-.45.6-.45h2.28c.58 0 .79.34.79.81v4.25c0 .34.23.46.43.3.8-.58 1.54-1.88 1.54-3.15 0-.46.32-.81.67-.94.55-.2 1.2-.29 1.73-.29 1.1 0 1.57.53 1.38 1.52-.26 1.01-.83 1.97-1.4 2.82-.49.73-.99 1.44-1.49 2.15-.45.64-.98 1.33-.02 2.05.5.38.85.81 1.13 1.3.32.56.24 1.18-.01 1.44z"/>
  </svg>
);

export const Footer = ({
  variant = 'default',
  theme = 'light',
  ...props
}) => {
  const isDark = theme === 'dark';

  const handleLinkClick = (linkName) => {
    console.log(`Нажата ссылка: ${linkName}`);
  };

  return (
    <footer className={`footer footer-${variant} footer-${theme}`} {...props}>
      <div className="footer-container">
        
        {variant === 'default' && (
          <div className="footer-default-blocks">
            <div className="footer-block-1">
              <div className="block1-top">
                <div className="logo-square">
                  <img src="https://i127.fastpic.org/big/2026/0501/a6/573586341493ce8987547aedb2c8a2a6.png?md5=t80Lm4ovEvicidCpmP2dIA&expires=1777654800" alt="Логотип" />
                </div>
                <div className="slogan-title">
                  <p className="slogan">Цунами - Накройтесь волной настоящего вкуса!</p>
                </div>
              </div>
              <div className="address-block">
                <p>Адрес: г. Хабаровск, ул. Муравьева-Амурского, д. 4</p>
                <p>Телефон: +7 (909) 435-67-89</p>
              </div>
            </div>

            <div className="footer-block-2">
              <div className="schedule-block">
                <p>График работы:</p>
                <p>ПН-ПТ - 09:00 - 22:00</p>
                <p>СБ-ВС - 11:00 - 00:00</p>
              </div>
              <div className="contacts-block">
                <a className="contacts-link" onClick={() => handleLinkClick('Контакты и реквизиты')}>Контакты и реквизиты</a>
              </div>
            </div>

            <div className="footer-block-3">
              <div className="social-block">
                <span>Социальные сети:</span>
                <div className="social-icons">
                  <a href="#" onClick={() => handleLinkClick('VK')}><VKIcon /></a>
                </div>
              </div>
              <div className="copyright-block">
                <p>Цунами © 2026</p>
              </div>
            </div>
          </div>
        )}

        {variant === 'compact' && (
          <div className="footer-compact-blocks">
            <div className="compact-block-1">
              <ul>
                <li><a href="#" onClick={() => handleLinkClick('О нас')}>О нас</a></li>
		<li><a href="#" onClick={() => handleLinkClick('Контакты и реквизиты')}>Контакты и реквизиты</a></li>
                <li><a href="#" onClick={() => handleLinkClick('Доставка')}>Доставка</a></li>
                <li><a href="#" onClick={() => handleLinkClick('График работы')}>График работы</a></li>
              </ul>
            </div>
            <div className="compact-block-2">
              <div className="logo-square-small">
                <img src="https://i127.fastpic.org/big/2026/0501/a6/573586341493ce8987547aedb2c8a2a6.png?md5=t80Lm4ovEvicidCpmP2dIA&expires=1777654800" alt="Логотип" />
              </div>
              <div className="compact-slogan">Накройтесь волной настоящего вкуса!</div>
            </div>
            <div className="compact-block-3">
              <p>Цунами © 2026</p>
            </div>
          </div>
        )}

        {variant === 'minimal' && (
          <div className="footer-minimal-blocks">
            <div className="minimal-block-1">
              <div className="minimal-logo-area">
                <div className="logo-square-medium">
                  <img src="https://i127.fastpic.org/big/2026/0501/a6/573586341493ce8987547aedb2c8a2a6.png?md5=t80Lm4ovEvicidCpmP2dIA&expires=1777654800" alt="Логотип" />
                </div>
                <div className="minimal-company-name">Цунами</div>
              </div>
              <div className="minimal-slogan">Накройтесь волной настоящего вкуса! Кафе итальянской кухни поможет почувствовать вкус лета.</div>
            </div>
            <div className="minimal-block-2">
              <div className="minimal-links">
                <ul>
                  <li><a href="#" onClick={() => handleLinkClick('О нас')}>О нас</a></li>
                  <li><a href="#" onClick={() => handleLinkClick('Контакты и реквизиты')}>Контакты и реквизиты</a></li>
                  <li><a href="#" onClick={() => handleLinkClick('Доставка')}>Доставка</a></li>
                  <li><a href="#" onClick={() => handleLinkClick('График работы')}>График работы</a></li>
                </ul>
              </div>
              <div className="minimal-social">
                <span>Социальные сети:</span>
                <div className="social-icons">
                  <a href="#" onClick={() => handleLinkClick('VK')}><VKIcon /></a>
                </div>
              </div>
              <div className="minimal-copyright">
                <p>Цунами © 2026</p>
              </div>
              <div className="minimal-divider"></div>
            </div>
          </div>
        )}

      </div>
    </footer>
  );
};