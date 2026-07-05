import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../context/LanguageContext';

const Sidebar: React.FC = () => {
  const { t } = useTranslation();
  const { language, setLanguage } = useLanguage();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    { path: '/', label: t('common.dashboard'), icon: '📊' },
    { path: '/members', label: t('common.members'), icon: '👥' },
    { path: '/payments', label: t('common.payments'), icon: '💰' },
    { path: '/dues', label: t('common.dues'), icon: '📋' },
    { path: '/reports', label: t('common.reports'), icon: '📈' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className={`${isOpen ? 'w-64' : 'w-20'} bg-primary-700 text-white transition-all duration-300 flex flex-col`}>
      {/* Logo */}
      <div className="p-4 border-b border-primary-600 flex items-center justify-between">
        {isOpen && <h1 className="font-bold text-lg">مسجد</h1>}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-1 hover:bg-primary-600 rounded"
        >
          {isOpen ? '◀' : '▶'}
        </button>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center space-x-3 px-4 py-3 rounded transition ${
              isActive(item.path)
                ? 'bg-primary-600'
                : 'hover:bg-primary-600'
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            {isOpen && <span>{item.label}</span>}
          </Link>
        ))}
      </nav>

      {/* Language Switcher */}
      <div className="p-4 border-t border-primary-600">
        <div className="flex space-x-2">
          <button
            onClick={() => setLanguage('en')}
            className={`flex-1 py-2 px-2 rounded text-sm ${
              language === 'en'
                ? 'bg-primary-600'
                : 'bg-primary-800 hover:bg-primary-600'
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setLanguage('bn')}
            className={`flex-1 py-2 px-2 rounded text-sm ${
              language === 'bn'
                ? 'bg-primary-600'
                : 'bg-primary-800 hover:bg-primary-600'
            }`}
          >
            বাংলা
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
