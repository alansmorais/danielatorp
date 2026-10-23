import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');
const indexPath = path.join(distDir, 'index.html');
const fallbackPath = path.join(distDir, '404.html');

if (fs.existsSync(indexPath)) {
  let html = fs.readFileSync(indexPath, 'utf8');

  // Inject early asset 404 handler into <head>
  const asset404Script = `<script>
    (function() {
      var path = window.location.pathname;
      if (path.startsWith('/images/') || /\\.(jpg|jpeg|png|gif|svg|webp|ico|css|js|json|woff|woff2|ttf)$/i.test(path)) {
        document.title = '404 Not Found';
        window.addEventListener('DOMContentLoaded', function() {
          document.body.innerHTML = '<div style="font-family:sans-serif;padding:3rem;text-align:center;"><h1>404 - Asset Not Found</h1><p>The requested asset <code>' + path + '</code> was not found on this server.</p></div>';
        });
        window.stop && window.stop();
      }
    })();
  </script>`;

  html = html.replace('<head>', '<head>\n    ' + asset404Script);
  fs.writeFileSync(fallbackPath, html, 'utf8');
  console.log('Successfully generated dist/404.html with asset 404 protection.');
} else {
  console.error('dist/index.html not found!');
  process.exit(1);
}
