// Active nav on scroll
const navLinks = document.querySelectorAll('.nav-links a');
const sections = ['experience', 'education', 'impact', 'contact'].map((id) =>
  document.getElementById(id)
);

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach((section) => {
    if (section && window.scrollY >= section.offsetTop - 220) {
      current = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.style.color =
      link.getAttribute('href') === `#${current}` ? 'var(--accent)' : '';
  });
});

// =============================================
// Low-Code Technology Hero Animation
// Subtle, looping network of connected nodes
// representing visual modeling, flows, components
// =============================================
(function initHeroAnimation() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d', { alpha: true });
  let width = 0;
  let height = 0;
  let nodes = [];
  let time = 0;
  let nodeCount = 16;
  const MAX_DIST = 185;
  const BASE_SPEED = 0.35;

  function updateNodeCount() {
    const w = window.innerWidth;
    if (w < 480) nodeCount = 9;
    else if (w < 768) nodeCount = 12;
    else nodeCount = 16;
  }

  function resizeCanvas() {
    width = canvas.offsetWidth || window.innerWidth;
    height = canvas.offsetHeight || Math.max(600, window.innerHeight * 0.9);
    canvas.width = width;
    canvas.height = height;
  }

  function createNodes() {
    nodes = [];
    updateNodeCount();
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * (height * 0.95),
        vx: (Math.random() - 0.5) * BASE_SPEED,
        vy: (Math.random() - 0.5) * BASE_SPEED,
        radius: Math.random() * 2.2 + 1.8,
        phase: Math.random() * Math.PI * 2,
        type: Math.random() > 0.65 ? 'accent' : 'normal' // some highlight nodes
      });
    }
  }

  function updateNodes() {
    for (let node of nodes) {
      // gentle velocity movement
      node.x += node.vx;
      node.y += node.vy;

      // soft boundary bounce with padding
      const pad = 28;
      if (node.x < pad) {
        node.x = pad;
        node.vx = Math.abs(node.vx);
      }
      if (node.x > width - pad) {
        node.x = width - pad;
        node.vx = -Math.abs(node.vx);
      }
      if (node.y < pad) {
        node.y = pad;
        node.vy = Math.abs(node.vy);
      }
      if (node.y > height - pad) {
        node.y = height - pad;
        node.vy = -Math.abs(node.vy);
      }

      // slight random wander
      node.vx += (Math.random() - 0.5) * 0.018;
      node.vy += (Math.random() - 0.5) * 0.018;

      // speed limit
      const speed = Math.hypot(node.vx, node.vy);
      if (speed > 0.55) {
        node.vx = (node.vx / speed) * 0.55;
        node.vy = (node.vy / speed) * 0.55;
      }

      // organic low-frequency oscillation (alive feel)
      const oscAmp = 0.22;
      node.x += Math.sin(time * 0.42 + node.phase) * oscAmp;
      node.y += Math.cos(time * 0.51 + node.phase * 1.1) * oscAmp * 0.9;

      // keep inside after osc
      node.x = Math.max(pad, Math.min(width - pad, node.x));
      node.y = Math.max(pad, Math.min(height - pad, node.y));
    }
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    // Subtle tech grid background (very faint)
    ctx.strokeStyle = 'rgba(97, 93, 85, 0.045)';
    ctx.lineWidth = 1;
    const grid = 52;
    for (let x = grid; x < width; x += grid) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = grid; y < height; y += grid) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Draw connections (data flows / relationships)
    ctx.lineWidth = 1.15;
    for (let i = 0; i < nodes.length; i++) {
      const a = nodes[i];
      for (let j = i + 1; j < nodes.length; j++) {
        const b = nodes[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.hypot(dx, dy);

        if (dist < MAX_DIST && dist > 4) {
          const alpha = Math.pow(1 - dist / MAX_DIST, 1.15) * 0.22;

          // mix between muted and accent for "live" connections
          let r = 97, g = 93, b = 85;
          const pulse = Math.sin(time * 0.9 + i * 1.7 + j) > 0.65;
          if (pulse || a.type === 'accent' || b.type === 'accent') {
            r = 217; g = 119; b = 87;
          }

          ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();

          // Animated flow dots (low-code execution / data movement)
          // Only on stronger connections, every few pairs
          if (dist < MAX_DIST * 0.78 && (i + j) % 4 < 2) {
            const speed = 0.9 + Math.sin(time * 0.3) * 0.15;
            const t = ((time * speed) + (i * 0.3)) % 1;
            const px = a.x + (b.x - a.x) * t;
            const py = a.y + (b.y - a.y) * t;

            const flowAlpha = alpha * 1.35;
            ctx.fillStyle = `rgba(217, 119, 87, ${flowAlpha})`;
            ctx.beginPath();
            ctx.arc(px, py, 1.65, 0, Math.PI * 2);
            ctx.fill();

            // tiny trailing dot
            const t2 = (t - 0.12 + 1) % 1;
            const px2 = a.x + (b.x - a.x) * t2;
            const py2 = a.y + (b.y - a.y) * t2;
            ctx.fillStyle = `rgba(217, 119, 87, ${flowAlpha * 0.55})`;
            ctx.beginPath();
            ctx.arc(px2, py2, 1.1, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }
    }

    // Draw nodes (abstract components / entities / widgets)
    for (let node of nodes) {
      const pulse = 1 + Math.sin(time * 1.35 + node.phase) * 0.18;
      const r = node.radius * pulse;

      // soft core fill
      ctx.fillStyle = 'rgba(37, 35, 31, 0.09)';
      ctx.beginPath();
      ctx.arc(node.x, node.y, r * 0.95, 0, Math.PI * 2);
      ctx.fill();

      // main node stroke
      ctx.strokeStyle = 'rgba(97, 93, 85, 0.32)';
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      ctx.arc(node.x, node.y, r, 0, Math.PI * 2);
      ctx.stroke();

      // accent pulse ring for selected "active" modeling elements
      const highlight = Math.sin(time * 0.75 + node.phase * 1.3) > 0.78 || node.type === 'accent';
      if (highlight) {
        const ringSize = r + 4.5 + Math.sin(time * 1.1 + node.phase) * 1.5;
        ctx.strokeStyle = 'rgba(217, 119, 87, 0.38)';
        ctx.lineWidth = 1.9;
        ctx.beginPath();
        ctx.arc(node.x, node.y, ringSize, 0, Math.PI * 2);
        ctx.stroke();
      }

      // very subtle inner dot for some nodes
      if (node.type === 'accent' || Math.random() < 0.3) {
        ctx.fillStyle = 'rgba(217, 119, 87, 0.25)';
        ctx.beginPath();
        ctx.arc(node.x, node.y, Math.max(0.8, r * 0.28), 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }

  function animate() {
    updateNodes();
    draw();
    time += 0.018;
    requestAnimationFrame(animate);
  }

  function start() {
    resizeCanvas();
    createNodes();

    // initial frame
    draw();

    // start loop
    animate();

    // handle resize
    let resizeTimer = null;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        const oldW = width;
        const oldH = height;
        resizeCanvas();
        updateNodeCount();

        // gently reposition existing nodes relative to new size
        const scaleX = width / (oldW || width);
        const scaleY = height / (oldH || height);
        for (let node of nodes) {
          node.x *= scaleX;
          node.y *= scaleY;
          // clamp
          node.x = Math.max(20, Math.min(width - 20, node.x));
          node.y = Math.max(20, Math.min(height - 20, node.y));
        }

        // if count changed significantly, adjust by adding/removing
        if (nodes.length !== nodeCount) {
          createNodes(); // simplest reliable reset on big viewport change
        }
        draw();
      }, 120);
    });

    // Pause animation when tab hidden for perf
    document.addEventListener('visibilitychange', () => {
      // animation continues via rAF but will be cheap when hidden
    });
  }

  // Initialize
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    start();
  } else {
    window.addEventListener('load', start);
  }
})();