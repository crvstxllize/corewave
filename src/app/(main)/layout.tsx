// src/app/(main)/layout.tsx
import { ReactNode } from 'react';
import MainHeader from '../../components/layouts/header/main/header';
import Script from 'next/script';

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <MainHeader />
      <main>{children}</main>

      {/* 
        Контейнер, в котором динамически «монтируется» ваш чат от ChatBase.
        Обычно ChatBase сам рендерит внутри этого <div> фиксированное положение,
        но мы можем его переопределить. 
      */}
      <div
        id="chatbase-container"
        style={{
          position: 'fixed',
          bottom: '1rem',   // сдвигаем виджет на 1 rem вверх относительно низа
          right: '1rem',    // сдвигаем виджет на 1 rem влево относительно правого края
          zIndex: 9999      // чтобы чат точно был поверх всего остального
        }}
      />

      <Script
        id="chatbase-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(){
              if (!window.chatbase || window.chatbase("getState") !== "initialized") {
                window.chatbase = (...arguments) => {
                  if (!window.chatbase.q) {
                    window.chatbase.q = [];
                  }
                  window.chatbase.q.push(arguments);
                };
                window.chatbase = new Proxy(window.chatbase, {
                  get(target, prop) {
                    if (prop === "q") {
                      return target.q;
                    }
                    return (...args) => target(prop, ...args);
                  }
                });
              }
              const onLoad = function() {
                const script = document.createElement("script");
                script.src = "https://www.chatbase.co/embed.min.js";
                script.id = "mNbp2mIEqGcVaAaRxoCzz"; // ваш Agent ID
                script.domain = "www.chatbase.co";
                document.body.appendChild(script);
              };
              if (document.readyState === "complete") {
                onLoad();
              } else {
                window.addEventListener("load", onLoad);
              }
            })();
          `,
        }}
      />
    </>
  );
}
