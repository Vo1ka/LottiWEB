'use client';

import { useEffect } from 'react';
import 'vanilla-cookieconsent/dist/cookieconsent.css';
import * as CookieConsent from 'vanilla-cookieconsent';

export function CookieBanner() {
  useEffect(() => {
    CookieConsent.run({
      guiOptions: {
        consentModal: {
          layout: 'box inline',
          position: 'bottom left',
        },
        preferencesModal: {
          layout: 'box',
        },
      },
      categories: {
        necessary: {
          enabled: true,
          readOnly: true,
        },
        analytics: {
          enabled: false,
        },
        marketing: {
          enabled: false,
        },
      },
      language: {
        default: 'es',
        translations: {
          es: {
            consentModal: {
              title: 'Usamos cookies',
              description:
                'Utilizamos cookies propias y de terceros para mejorar nuestros servicios y mostrarle publicidad relacionada con sus preferencias mediante el análisis de sus hábitos de navegación.',
              acceptAllBtn: 'Aceptar todas',
              acceptNecessaryBtn: 'Rechazar todas',
              showPreferencesBtn: 'Configurar',
            },
            preferencesModal: {
              title: 'Preferencias de cookies',
              acceptAllBtn: 'Aceptar todas',
              acceptNecessaryBtn: 'Rechazar todas',
              savePreferencesBtn: 'Guardar preferencias',
              closeIconLabel: 'Cerrar',
              sections: [
                {
                  title: 'Uso de cookies',
                  description:
                    'Utilizamos cookies para garantizar las funcionalidades básicas del sitio web y mejorar su experiencia en línea.',
                },
                {
                  title: 'Cookies estrictamente necesarias',
                  description:
                    'Estas cookies son esenciales para el correcto funcionamiento del sitio web. Sin estas cookies, el sitio web no funcionaría correctamente.',
                  linkedCategory: 'necessary',
                },
                {
                  title: 'Cookies de análisis',
                  description:
                    'Estas cookies nos permiten analizar el uso del sitio web para medir y mejorar el rendimiento.',
                  linkedCategory: 'analytics',
                },
                {
                  title: 'Cookies de marketing',
                  description:
                    'Estas cookies se utilizan para rastrear a los visitantes en los sitios web. La intención es mostrar anuncios relevantes y atractivos para el usuario individual.',
                  linkedCategory: 'marketing',
                },
                {
                  title: 'Más información',
                  description:
                    'Para cualquier consulta relacionada con nuestra política de cookies, por favor <a href="/contacto">contáctenos</a>.',
                },
              ],
            },
          },
          en: {
            consentModal: {
              title: 'We use cookies',
              description:
                'We use our own and third-party cookies to improve our services and show you advertising related to your preferences by analyzing your browsing habits.',
              acceptAllBtn: 'Accept all',
              acceptNecessaryBtn: 'Reject all',
              showPreferencesBtn: 'Settings',
            },
            preferencesModal: {
              title: 'Cookie preferences',
              acceptAllBtn: 'Accept all',
              acceptNecessaryBtn: 'Reject all',
              savePreferencesBtn: 'Save preferences',
              closeIconLabel: 'Close',
              sections: [
                {
                  title: 'Cookie usage',
                  description:
                    'We use cookies to ensure the basic functionalities of the website and to enhance your online experience.',
                },
                {
                  title: 'Strictly necessary cookies',
                  description:
                    'These cookies are essential for the proper functioning of the website. Without these cookies, the website would not work properly.',
                  linkedCategory: 'necessary',
                },
                {
                  title: 'Analytics cookies',
                  description:
                    'These cookies allow us to analyze website usage to measure and improve performance.',
                  linkedCategory: 'analytics',
                },
                {
                  title: 'Marketing cookies',
                  description:
                    'These cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user.',
                  linkedCategory: 'marketing',
                },
                {
                  title: 'More information',
                  description:
                    'For any queries in relation to our policy on cookies, please <a href="/contacto">contact us</a>.',
                },
              ],
            },
          },
          ru: {
            consentModal: {
              title: 'Мы используем cookies',
              description:
                'Мы используем собственные и сторонние файлы cookie для улучшения наших услуг и показа рекламы, связанной с вашими предпочтениями, путем анализа ваших привычек просмотра.',
              acceptAllBtn: 'Принять все',
              acceptNecessaryBtn: 'Отклонить все',
              showPreferencesBtn: 'Настройки',
            },
            preferencesModal: {
              title: 'Настройки cookies',
              acceptAllBtn: 'Принять все',
              acceptNecessaryBtn: 'Отклонить все',
              savePreferencesBtn: 'Сохранить настройки',
              closeIconLabel: 'Закрыть',
              sections: [
                {
                  title: 'Использование cookies',
                  description:
                    'Мы используем файлы cookie для обеспечения основных функций веб-сайта и улучшения вашего онлайн-опыта.',
                },
                {
                  title: 'Строго необходимые cookies',
                  description:
                    'Эти файлы cookie необходимы для правильной работы веб-сайта. Без этих файлов cookie веб-сайт не будет работать должным образом.',
                  linkedCategory: 'necessary',
                },
                {
                  title: 'Аналитические cookies',
                  description:
                    'Эти файлы cookie позволяют нам анализировать использование веб-сайта для измерения и улучшения производительности.',
                  linkedCategory: 'analytics',
                },
                {
                  title: 'Маркетинговые cookies',
                  description:
                    'Эти файлы cookie используются для отслеживания посетителей на веб-сайтах. Цель - показывать рекламу, которая актуальна и интересна для отдельного пользователя.',
                  linkedCategory: 'marketing',
                },
                {
                  title: 'Дополнительная информация',
                  description:
                    'По любым вопросам, связанным с нашей политикой в отношении файлов cookie, пожалуйста, <a href="/contacto">свяжитесь с нами</a>.',
                },
              ],
            },
          },
        },
      },
    });
  }, []);

  return null;
}

