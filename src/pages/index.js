import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout title="NTK Docs">
      <main style={{ padding: '3rem', textAlign: 'center' }}>
        <img
          src="/img/logo.png"
          alt="NTK Logo"
          style={{ width: 120, height: 120, objectFit: 'contain' }}
        />
        <h1>NTK Documentation</h1>
        <p style={{ fontSize: '1.1rem', color: '#555' }}>
          Studio-grade docs for a tactical FPS. Clean, modular, and built to grow.
        </p>
        <div style={{ margin: '2rem 0' }}>
          <Link className="button button--primary" to="/docs/HOME">
            Get Started
          </Link>
          <Link
            className="button button--secondary"
            style={{ marginLeft: '1rem' }}
            to="/assets/"
          >
            Browse Assets
          </Link>
          <Link
            className="button button--primary"
            style={{ marginLeft: '1rem' }}
            to="https://github.com/6ftdotexe/ntk-docs/releases/latest/download/ntk-docs-package.zip"
          >
            Download NTK Bundle
          </Link>
        </div>
      </main>
    </Layout>
  );
}
