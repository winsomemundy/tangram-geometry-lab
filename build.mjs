// Assembles the deployable tool in dist/: the page, the printable worksheet and formula sheet PDFs and the design system's
// stylesheets from the pinned @winsomemundy/design-system package.
// DS_DIR=<folder> builds against a local design-system checkout instead.
import { cpSync, mkdirSync, rmSync } from 'node:fs'
import { join } from 'node:path'

const out = 'dist'
const ds = process.env.DS_DIR ?? 'node_modules/@winsomemundy/design-system'

rmSync(out, { recursive: true, force: true })
mkdirSync(join(out, 'ds'), { recursive: true })

cpSync('index.html', join(out, 'index.html'))
cpSync('Tangram Geometry Lab Worksheet.pdf', join(out, 'tangram-geometry-lab-worksheet.pdf'))
cpSync('Tangram Geometry Lab Formula Sheet.pdf', join(out, 'tangram-geometry-lab-formula-sheet.pdf'))
cpSync(join(ds, 'tokens.css'), join(out, 'ds', 'tokens.css'))
cpSync(join(ds, 'components', 'bundle.css'), join(out, 'ds', 'bundle.css'))

console.log(`Built ${out}/ with design system from ${ds}`)
