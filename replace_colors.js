import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const directoryPath = path.join(__dirname, 'src');

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let hasChanges = false;

    // 1. Replace safety-yellow with brand-red
    if (content.includes('safety-yellow')) {
        content = content.replace(/safety-yellow/g, 'brand-red');
        hasChanges = true;
    }

    // 2. Replace yellow-400 with red-500, yellow-500 with red-600
    if (content.includes('yellow-400') || content.includes('yellow-500')) {
        content = content.replace(/yellow-400/g, 'red-500');
        content = content.replace(/yellow-500/g, 'red-600');
        hasChanges = true;
    }

    // 3. Handle contrast: text-black -> text-white inside elements that are now brand-red
    // This requires some heuristic. Since we can't easily parse AST, we'll do some specific replacements
    // based on the grep results. Often 'bg-brand-red text-black' or 'group-hover:text-black'.

    // In many places we have `bg-safety-yellow text-black px-6...` which is now `bg-brand-red text-black px-6...`
    if (content.includes('bg-brand-red') && content.includes('text-black')) {
        // Simple case: replace 'text-black' with 'text-white' if 'bg-brand-red' is on the same line
        const lines = content.split('\n');
        for (let i = 0; i < lines.length; i++) {
            if (lines[i].includes('bg-brand-red') && lines[i].includes('text-black')) {
                lines[i] = lines[i].replace(/text-black/g, 'text-white');
                hasChanges = true;
            }
            if (lines[i].includes('hover:bg-brand-red') && lines[i].includes('hover:text-black')) {
                lines[i] = lines[i].replace(/hover:text-black/g, 'hover:text-white');
                hasChanges = true;
            }
            if (lines[i].includes('group-hover:bg-brand-red') && lines[i].includes('group-hover:text-black')) {
                lines[i] = lines[i].replace(/group-hover:text-black/g, 'group-hover:text-white');
                hasChanges = true;
            }
        }
        content = lines.join('\n');
    }

    // specific manual fixes based on grep
    // "bg-brand-red p-10 rounded-2xl text-black" (Fleet.tsx, etc) -> "text-white"
    if (content.match(/bg-brand-red.*text-black/)) {
        content = content.replace(/(bg-brand-red.*)text-black/g, '$1text-white');
        hasChanges = true;
    }

    // Update the App.tsx selection text color
    if (filePath.endsWith('App.tsx') && content.includes('selection:bg-brand-red selection:text-black')) {
        content = content.replace('selection:bg-brand-red selection:text-black', 'selection:bg-brand-red selection:text-white');
        hasChanges = true;
    }


    if (hasChanges) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated: ${filePath}`);
    }
}

function traverseDirectory(dir) {
    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.lstatSync(fullPath).isDirectory()) {
            traverseDirectory(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.css')) {
            processFile(fullPath);
        }
    });
}

traverseDirectory(directoryPath);
console.log('Finished updating colors.');
