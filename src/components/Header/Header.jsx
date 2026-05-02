import React from 'react';
import './Header.css';
import { Button } from '../Button/Button';

export const Header = ({
  variant = '1',
  theme = 'light',
  logoSrc = 'https://i127.fastpic.org/big/2026/0501/a6/573586341493ce8987547aedb2c8a2a6.png?md5=t80Lm4ovEvicidCpmP2dIA&expires=1777654800',
  cartBgColor = '',
  cartTextColor = '',
  saleBgColor = '#0063FF',
  saleTextColor = '#FFFFFF',
  ...props
}) => {
  const isDark = theme === 'dark';

  // Логотип с картинкой
  const Logo = () => (
    <div className="header-logo">
      <a href="#" className="logo-link">
        <img src={logoSrc} alt="Логотип" className="logo-image" />
        <span className="logo-text">Цунами</span>
      </a>
    </div>
  );

  // Навигация
  const NavItems = () => (
    <nav className="header-nav">
      <ul>
        <li><a href="#" className="nav-link">Меню</a></li>
        <li><a href="#" className="nav-link">О нас</a></li>
        <li><a href="#" className="nav-link sale-link">Акции</a></li>
        <li><a href="#" className="nav-link">Доставка</a></li>
      </ul>
    </nav>
  );

  // Кнопка Корзина
  const CartButton = ({ type = 'default', noBg = false }) => {
    let bgColor = '';
    let textColor = '';

    if (type === 'outline' && noBg) {
      bgColor = 'transparent';
      textColor = cartTextColor || (isDark ? '#FFFFFF' : '#21236E');
    } else {
      bgColor = cartBgColor || (isDark ? '#FFFFFF' : '#21236E');
      textColor = cartTextColor || (isDark ? '#21236E' : '#FFFFFF');
    }

    return (
      <Button 
        type={type === 'outline' ? 'outlined' : 'default'}
        size="medium"
        customBgColor={bgColor}
        customTextColor={textColor}
      >
        Корзина
      </Button>
    );
  };

  // Кнопка Акции
  const SaleButton = () => (
    <Button 
      type="default" 
      size="medium"
      customBgColor={saleBgColor}
      customTextColor={saleTextColor}
    >
      Акции
    </Button>
  );

  // Рендер вариантов
  const renderVariant = () => {
    switch(variant) {
      case '1':
        return (
          <div className="header-row">
            <Logo />
            <div className="header-right">
              <NavItems />
            </div>
          </div>
        );
      case '2':
        return (
          <div className="header-row">
            <Logo />
            <div className="header-right">
              <NavItems />
              <CartButton type="default" />
            </div>
          </div>
        );
      case '3':
        return (
          <div className="header-row">
            <div className="header-left">
              <Logo />
            </div>
            <div className="header-center">
              <NavItems />
            </div>
            <div className="header-right">
              <CartButton type="default" />
            </div>
          </div>
        );
      case '4':
        return (
          <div className="header-row">
            <div className="header-left">
              <NavItems />
            </div>
            <div className="header-center">
              <Logo />
            </div>
            <div className="header-right">
              <CartButton type="outline" noBg={true} />
            </div>
          </div>
        );
      case '5':
        return (
          <div className="header-row">
            <div className="header-left">
              <NavItems />
              <CartButton type="outline" noBg={true} />
            </div>
            <div className="header-right">
              <Logo />
            </div>
          </div>
        );
      case '6':
        return (
          <div className="header-row">
            <div className="header-left">
              <nav className="header-nav">
                <ul>
                  <li><a href="#" className="nav-link">Меню</a></li>
                  <li><a href="#" className="nav-link">О нас</a></li>
                  <li><SaleButton /></li>
                  <li><a href="#" className="nav-link">Доставка</a></li>
                  <li><CartButton type="default" /></li>
                </ul>
              </nav>
            </div>
            <div className="header-right">
              <Logo />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <header className={`header header-${theme} header-variant-${variant}`} {...props}>
      <div className="header-container">
        {renderVariant()}
      </div>
    </header>
  );
};