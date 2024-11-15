// src/components/Layout.tsx
import React from 'react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="layout">
    <header>
      <h1>Fitness Tracker</h1>
    </header>
    <main>{children}</main>
  </div>
);

export default Layout;
