const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'components');

const replacements = {
  'to-purple-600': 'to-[#D946EF]',
  'to-purple-500': 'to-[#D946EF]',
  'border-l-purple-500': 'border-l-[#D946EF]',
  'border-l-indigo-500': 'border-l-[#6C4DF6]',
  'hover:border-indigo-300': 'hover:border-[#E6E0FF]',
  'hover:border-indigo-600': 'hover:border-[#6C4DF6]',
  'focus:ring-indigo-500/50': 'focus:ring-[#6C4DF6]/50',
  'text-blue-500': 'text-[#6C4DF6]'
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
console.log('Done replacing remaining colors.');
