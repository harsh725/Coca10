import React from 'react';
import { companyInfo } from '../data/config';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          © 2023 {companyInfo.name}. All rights reserved. | {companyInfo.tagline}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
