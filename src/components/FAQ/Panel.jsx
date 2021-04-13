import React from 'react';
import './Panel.css';

export const Panel = () => {
  return (
    <div className="Panel">
      <p>Кошельки бывают:</p>
        <p>
          Desktop wallets
          <br/>
          Hardware wallets
          <br/>
          Online wallets or Mobile wallets
          <br/>
          Paper wallets
        </p>
        
        <p>
          Самые удобные — мобильные кошельки. Например <a href="#" className="Panel__link">
            Exodus
          </a>
        </p>
        <p>
          Вот несколько, которые хорошо себя зарекомендовали
        </p>
        <p>Mobile: <a href="#" className="Panel__link">
           Exodus
          </a>
        </p>
        <p>Hardware wallets: <a href="#" className="Panel__link">
            Ledger
          </a> or <a href="#" className="Panel__link">
            Trezor
          </a>
        </p>
        <p>Desktop: <a href="#" className="Panel__link">
            Electrum
          </a> (для страниц BTC) / <a href="#" className="Panel__link">
            Metamask
          </a>
          (для страниц ETH)
        </p>
    </div>
  );
};