const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'components');

const replacements = {
  'text-indigo-600': 'text-[#6C4DF6]',
  'text-indigo-500': 'text-[#6C4DF6]',
  'text-indigo-400': 'text-[#8B5CF6]',
  'border-indigo-500': 'border-[#6C4DF6]',
  'border-indigo-200': 'border-[#E6E0FF]',
  'border-indigo-100': 'border-[#E6E0FF]',
  'hover:border-indigo-500': 'hover:border-[#6C4DF6]',
  'hover:text-indigo-600': 'hover:text-[#6C4DF6]',
  'text-purple-600': 'text-[#D946EF]',
  'text-purple-500': 'text-[#D946EF]',
  'text-pink-500': 'text-[#D946EF]',
  'bg-indigo-50': 'bg-[#FAF9FF]',
  'bg-indigo-100': 'bg-[#E6E0FF]',
  'bg-indigo-500': 'bg-[#6C4DF6]',
  'bg-indigo-600': 'bg-[#6C4DF6]',
  'bg-purple-100': 'bg-[#E6E0FF]',
  'bg-blue-50': 'bg-[#FAF9FF]',
  'border-blue-100': 'border-[#E6E0FF]',
  'text-blue-600': 'text-[#6C4DF6]',
  'from-indigo-500': 'from-[#6C4DF6]',
  'to-cyan-400': 'to-[#D946EF]',
  'to-cyan-500': 'to-[#D946EF]',
  'via-purple-500': 'via-[#8B5CF6]',
  'to-pink-500': 'to-[#D946EF]',
  'from-blue-600': 'from-[#6C4DF6]'
};

function processDir(directory) {
  const files = fs.readdirSync(directory);
  for (const file of files) {
    const fullPath = path.join(directory, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;
      for (const [key, value] of Object.entries(replacements)) {
        if (content.includes(key)) {
          content = content.split(key).join(value);
          changed = true;
        }
      }
      if (changed) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

processDir(dir);
console.log('Done replacing colors.');
