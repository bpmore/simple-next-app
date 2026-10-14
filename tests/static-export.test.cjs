const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const test = require('node:test')

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ''
const html = fs.readFileSync('out/index.html', 'utf8')

test('Pages export includes the home and 404 pages', () => {
  assert.match(html, /Actions-based deployments/)
  assert.ok(fs.existsSync('out/404.html'))
})

test('exported framework assets resolve under the deployment base path', () => {
  const urls = [...html.matchAll(/(?:src|href)="([^"]+)"/g)]
    .map(match => match[1]).filter(url => url.startsWith('/') && !url.startsWith('//'))
  assert.ok(urls.length > 0)
  for (const url of urls) {
    assert.ok(url.startsWith(`${prefix}/`), url)
    const relative = url.slice(prefix.length).split('?')[0]
    assert.ok(fs.existsSync(path.join('out', relative)), url)
  }
})
