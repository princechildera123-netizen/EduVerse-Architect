import { readFile } from 'node:fs/promises'

const files = ['index.html', 'src/main.js', 'src/styles.css']
for (const file of files) {
  const text = await readFile(file, 'utf8')
  if (text.includes('\t')) throw new Error(`${file} contains tabs`)
  if (!text.endsWith('\n')) throw new Error(`${file} must end with a newline`)
}
console.log('Static dashboard lint checks passed')
