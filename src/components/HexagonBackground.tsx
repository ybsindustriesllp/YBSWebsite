
'use client';

import React, { useEffect, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const HexagonBackground = () => {
  const canvasRef1 = useRef<HTMLCanvasElement>(null);
  const canvasRef2 = useRef<HTMLCanvasElement>(null);
  const scriptInitialized = useRef(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (scriptInitialized.current || typeof window === 'undefined') {
      return;
    }
    scriptInitialized.current = true;

    const script = () => {
      Object.getOwnPropertyNames(Math).map(function (p) {
        (window as any)[p] = (Math as any)[p];
      });

      const HEX_CRAD = 32,
        HEX_BG = '#171717',
        HEX_HL = '#1a1a1a', // Darkened the static grid lines
        HEX_HLW = 2,
        HEX_GAP = 4,
        NEON_PALETE = [
          '#2a6a62',
          '#2e746b',
          '#327e74',
          '#3e9a8e',
          '#327e74',
          '#2e746b',
          '#2a6a62',
        ],
        T_SWITCH = 64,
        unit_x = 3 * HEX_CRAD + HEX_GAP * Math.sqrt(3),
        unit_y = HEX_CRAD * Math.sqrt(3) * 0.5 + 0.5 * HEX_GAP,
        off_x = 1.5 * HEX_CRAD + HEX_GAP * Math.sqrt(3) * 0.5;

      let wp = NEON_PALETE.map(function (c) {
          var num = parseInt(c.replace('#', ''), 16);
          return {
            r: (num >> 16) & 0xff,
            g: (num >> 8) & 0xff,
            b: num & 0xff,
          };
        }),
        nwp = wp.length,
        csi = 0,
        f = 1 / T_SWITCH,
        c = [canvasRef1.current, canvasRef2.current],
        n = c.length;

      let w: number,
        h: number,
        _min: number,
        ctx: (CanvasRenderingContext2D | null)[] = [],
        grid: any,
        source: { x: number; y: number } | null = null,
        t = 0,
        request_id: number | null = null;

      var GridItem = function (this: any, x: number, y: number) {
        this.x = x || 0;
        this.y = y || 0;
        this.points = { hex: [], hl: [] };
        this.init = function () {
          var x,
            y,
            a,
            ba = Math.PI / 3,
            ri = HEX_CRAD - 0.5 * HEX_HLW;
          for (var i = 0; i < 6; i++) {
            a = i * ba;
            x = this.x + HEX_CRAD * Math.cos(a);
            y = this.y + HEX_CRAD * Math.sin(a);
            this.points.hex.push({
              x: x,
              y: y,
            });
            if (i > 2) {
              x = this.x + ri * Math.cos(a);
              y = this.y + ri * Math.sin(a);
              this.points.hl.push({
                x: x,
                y: y,
              });
            }
          }
        };
        this.draw = function (ct: CanvasRenderingContext2D) {
          for (var i = 0; i < 6; i++) {
            ct[(i === 0 ? 'move' : 'line') + 'To'](
              this.points.hex[i].x,
              this.points.hex[i].y
            );
          }
        };
        this.highlight = function (ct: CanvasRenderingContext2D) {
          for (var i = 0; i < 3; i++) {
            ct[(i === 0 ? 'move' : 'line') + 'To'](
              this.points.hl[i].x,
              this.points.hl[i].y
            );
          }
        };
        this.init();
      };

      var Grid = function (this: any, rows: number, cols: number) {
        this.cols = cols || 16;
        this.rows = rows || 16;
        this.items = [];
        this.n = this.items.length;
        this.init = function () {
          var x, y;
          for (var row = 0; row < this.rows; row++) {
            y = row * unit_y;
            for (var col = 0; col < this.cols; col++) {
              x = (row % 2 == 0 ? 0 : off_x) + col * unit_x;
              this.items.push(new (GridItem as any)(x, y));
            }
          }
          this.n = this.items.length;
        };
        this.draw = function (ct: CanvasRenderingContext2D) {
          ct.fillStyle = HEX_BG;
          ct.beginPath();
          for (var i = 0; i < this.n; i++) {
            this.items[i].draw(ct);
          }
          ct.closePath();
          ct.fill();
          ct.strokeStyle = HEX_HL;
          ct.beginPath();
          for (var i = 0; i < this.n; i++) {
            this.items[i].highlight(ct);
          }
          ct.closePath();
          ct.stroke();
        };
        this.init();
      };

      var neon = function () {
        if (!ctx[0]) return;
        var k = (t % T_SWITCH) * f,
          rgb = {
            r: ~~(wp[csi].r * (1 - k) + wp[(csi + 1) % nwp].r * k),
            g: ~~(wp[csi].g * (1 - k) + wp[(csi + 1) % nwp].g * k),
            b: ~~(wp[csi].b * (1 - k) + wp[(csi + 1) % nwp].b * k),
          },
          rgb_str = 'rgb(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ')',
          light = ctx[0]!.createRadialGradient(
            source!.x,
            source!.y,
            0,
            source!.x,
            source!.y,
            0.875 * _min
          ),
          stp;
        stp = 0.3 + 0.1 * Math.sin(t * 0.1); // "Breathing" effect restored
        light.addColorStop(0, rgb_str);
        light.addColorStop(stp, 'rgba(0,0,0,.03)');
        fillBackground('rgba(0,0,0,.02)');
        fillBackground(light);
        t += 0.1; // Slowed down the animation speed
        if (t % T_SWITCH === 0) {
          csi++;
          if (csi === nwp) {
            csi = 0;
            t = 0;
          }
        }
        request_id = requestAnimationFrame(neon);
      };

      var fillBackground = function (bg_fill: string | CanvasGradient) {
        if (!ctx[0]) return;
        ctx[0]!.fillStyle = bg_fill;
        ctx[0]!.beginPath();
        ctx[0]!.rect(0, 0, w, h);
        ctx[0]!.closePath();
        ctx[0]!.fill();
      };
      
      var init = function () {
        if (!c[0]) return;
        var s = getComputedStyle(c[0]!),
          rows,
          cols;

        w = ~~s.width.split('px')[0];
        h = ~~s.height.split('px')[0];
        _min = 0.75 * Math.min(w, h);
        rows = ~~(h / unit_y) + 2;
        cols = ~~(w / unit_x) + 2;

        for (var i = 0; i < n; i++) {
          if (c[i]) {
            c[i]!.width = w;
            c[i]!.height = h;
            ctx[i] = c[i]!.getContext('2d');
          }
        }
        
        grid = new (Grid as any)(rows, cols);
        if(ctx[1]) {
          grid.draw(ctx[1]);
        }

        if (!source) {
          source = { x: ~~(w / 2), y: ~~(h / 2) };
        }
        if (request_id) {
          cancelAnimationFrame(request_id);
        }
        neon();
      };

      const handleResize = () => init();
      const handleMouseMove = (e: MouseEvent) => {
        source = { x: e.clientX, y: e.clientY };
      };
      
      init();
      window.addEventListener('resize', handleResize, false);
      if (!isMobile) {
        window.addEventListener('mousemove', handleMouseMove, false);
      }

      return () => {
        if (request_id) {
          cancelAnimationFrame(request_id);
        }
        window.removeEventListener('resize', handleResize);
        if (!isMobile) {
            window.removeEventListener('mousemove', handleMouseMove);
        }
      };
    };

    const cleanup = script();
    return cleanup;
  }, [isMobile]);

  const canvasStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    zIndex: -1,
    filter: 'blur(5px)',
  };

  return (
    <>
      <canvas ref={canvasRef1} style={canvasStyle}></canvas>
      <canvas ref={canvasRef2} style={canvasStyle}></canvas>
    </>
  );
};

export default HexagonBackground;
