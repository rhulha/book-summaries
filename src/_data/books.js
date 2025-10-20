import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const contentPath = path.resolve(__dirname, '../content');

function readSummaries(bookPath, pattern) {
  const summaries = [];
  const files = fs.readdirSync(bookPath);

  files.forEach(file => {
    if (file.match(pattern)) {
      const filePath = path.join(bookPath, file);
      const content = fs.readFileSync(filePath, 'utf-8');
      const chapterMatch = file.match(/\d+/);
      const chapterNum = chapterMatch ? parseInt(chapterMatch[0]) : 0;

      summaries.push({
        chapter: chapterNum,
        content: content.trim(),
        filename: file
      });
    }
  });

  return summaries.sort((a, b) => a.chapter - b.chapter);
}

export default function() {
  const books = [];

  const book1984Path = path.join(contentPath, '1984');
  if (fs.existsSync(book1984Path)) {
    books.push({
      id: '1984',
      title: '1984',
      author: 'George Orwell',
      slug: '1984',
      summaries: readSummaries(book1984Path, /chapter\d+\.md$/)
    });
  }

  const bladeRunnerPath = path.join(contentPath, 'blade-runner');
  if (fs.existsSync(bladeRunnerPath)) {
    books.push({
      id: 'blade-runner',
      title: 'Do Androids Dream of Electric Sheep?',
      author: 'Philip K. Dick',
      slug: 'blade-runner',
      summaries: readSummaries(bladeRunnerPath, /chapter\d+\.md$/)
    });
  }

  const neuromancerPath = path.join(contentPath, 'neuromancer');
  if (fs.existsSync(neuromancerPath)) {
    books.push({
      id: 'neuromancer',
      title: 'Neuromancer',
      author: 'William Gibson',
      slug: 'neuromancer',
      summaries: readSummaries(neuromancerPath, /chapter\d+\.md$/)
    });
  }

  return books;
}
