'use client';

import { useState, useEffect } from 'react';
import ExplorerRenderer from './ExplorerRenderer';
import type { ExplorerConfig } from '@/lib/explorer/types';

/**
 * Wraps ExplorerRenderer in a device bezel sized to the config's formFactor.
 * - tablet (default): iPad Pro 12.9" landscape (1366x1024 shell, 1398x1056 outer)
 * - mobile: iPhone 14 Pro Max portrait (430x932 shell, 446x948 outer)
 *
 * The ExplorerShell itself renders at the locked form-factor dimensions;
 * this wrapper supplies the chrome and scales the frame to fit the viewport.
 */

const TABLET = {
  shell: { w: 1366, h: 1024 },
  outer: { w: 1398, h: 1056 },
  padding: 16,
  radius: 22,
  label: 'iPad Pro 12.9" Landscape',
};

const MOBILE = {
  shell: { w: 430, h: 932 },
  outer: { w: 446, h: 948 },
  padding: 8,
  radius: 48,
  label: 'iPhone 14 Pro Max',
};

export default function ExplorerBezelWrapper({ config }: { config: ExplorerConfig }) {
  const formFactor = config.formFactor ?? 'tablet';
  const spec = formFactor === 'mobile' ? MOBILE : TABLET;

  const [scale, setScale] = useState(1);

  useEffect(() => {
    function resize() {
      const w = window.innerWidth;
      const h = window.innerHeight - 48;
      const sx = w / spec.outer.w;
      const sy = h / spec.outer.h;
      setScale(Math.min(sx, sy, 1));
    }
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, [spec.outer.w, spec.outer.h]);

  const isMobile = formFactor === 'mobile';

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        overflow: 'hidden',
        background: '#000E1F',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          width: spec.outer.w * scale,
          height: spec.outer.h * scale,
          flexShrink: 0,
        }}
      >
        <div
          style={{
            position: 'relative',
            width: spec.outer.w,
            height: spec.outer.h,
            background: '#0a1628',
            borderRadius: spec.radius,
            border: '1.5px solid rgba(255,255,255,0.1)',
            boxShadow:
              '0 0 0 1px rgba(255,255,255,0.03), 0 30px 100px rgba(0,0,0,0.65), 0 6px 24px rgba(0,0,0,0.4), inset 0 0.5px 0 rgba(255,255,255,0.08)',
            padding: spec.padding,
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
          }}
        >
          {isMobile ? (
            /* Dynamic Island for iPhone */
            <div
              style={{
                position: 'absolute',
                top: 14,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 120,
                height: 34,
                borderRadius: 20,
                background: '#000',
                zIndex: 2,
              }}
            />
          ) : (
            /* Camera dot for iPad (landscape = right edge) */
            <div
              style={{
                position: 'absolute',
                top: '50%',
                right: 5,
                transform: 'translateY(-50%)',
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: '#0a1628',
                border: '0.5px solid rgba(255,255,255,0.06)',
              }}
            />
          )}
          <div
            style={{
              width: spec.shell.w,
              height: spec.shell.h,
              borderRadius: isMobile ? 40 : 6,
              overflow: 'hidden',
              background: '#000E1F',
            }}
          >
            <ExplorerRenderer config={config} />
          </div>
        </div>
      </div>
      <div
        style={{
          fontSize: 11,
          color: 'rgba(255,255,255,0.2)',
          letterSpacing: '0.03em',
          whiteSpace: 'nowrap',
          textAlign: 'center',
          fontFamily: "'Inter', sans-serif",
          marginTop: 12,
          flexShrink: 0,
        }}
      >
        {config.name} &mdash; {spec.label}
      </div>
    </div>
  );
}
