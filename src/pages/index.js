import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout title="NTK Docs" description="Need To Know – Tactical FPS Documentation Portal">
      <main>
        {/* Hero Banner */}
        <section className="heroBanner">
          <img
            src="/img/logo.png"
            alt="NTK Logo"
            style={{ width: 140, height: 140, objectFit: 'contain', marginBottom: '1rem' }}
          />
          <h1>NTK Documentation</h1>
          <p>Need To Know – Tactical FPS with modular systems and smart AI.</p>
          <div className="heroButtons">
            <Link className="button button--primary" to="/docs/HOME">
              📖 Get Started
            </Link>
            <Link className="button button--secondary" to="/docs/ASSETS">
              🖼 Browse Assets
            </Link>
            <Link
              className="button button--primary"
              href="https://github.com/6ftdotexe/ntk-docs/releases/latest/download/ntk-docs-package.zip"
            >
              ⬇ Download NTK Bundle
            </Link>
          </div>
        </section>

        {/* Features Grid */}
        <section style={{ padding: '3rem 1rem' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>🔑 Key Features</h2>
          <div className="featuresGrid">
            <div className="card">
              <h3>⚡ Modular Architecture</h3>
              <p>
                Game Modes, Characters, Weapons, and State Management — structured for scalability
                and clean dev workflows.
              </p>
              <Link to="/docs/ARCHITECTURE.md">Learn more →</Link>
            </div>

            <div className="card">
              <h3>🔧 Customizable Weapons</h3>
              <p>
                Modular weapon base with optics, barrels, grips, and magazines for tactical
                loadouts.
              </p>
              <Link to="/docs/WEAPONS.md">Weapon system →</Link>
            </div>

            <div className="card">
              <h3>🎮 Smart AI & Modes</h3>
              <p>
                Team Deathmatch, Domination, Extraction — powered by AI controllers for adaptive
                combat.
              </p>
              <Link to="/docs/GAME_MODES.md">Game modes →</Link>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section style={{ padding: '3rem 1rem', background: '#111', color: '#eee' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>📚 Quick Links</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link className="button button--secondary" to="/docs/SETUP">
              ⚙ Setup Guide
            </Link>
            <Link className="button button--secondary" to="/docs/CHANGELOG">
              📝 Changelog
            </Link>
            <Link className="button button--secondary" to="/docs/ASSETS">
              🖼 Assets
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
