import React, { useContext } from 'react';
import PortfolioContext from '../../context/context';

const SocialLinks = () => {
  const {
    footer: { networks },
  } = useContext(PortfolioContext);

  return (
    <div className="social-links">
      {networks &&
        networks.map((network) => {
          const { id, name, url } = network;
          return (
            url && (
              <a key={id} href={url} rel="noopener noreferrer" target="_blank" aria-label={name}>
                <i className={`fa fa-${name || 'refresh'} fa-inverse`} />
              </a>
            )
          );
        })}
    </div>
  );
};

export default SocialLinks;
