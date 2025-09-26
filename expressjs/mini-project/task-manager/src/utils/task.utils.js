import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filepath = path.join(__dirname, "data", "tasks.json");

export const ensureFileExists = () => {
    try {
        if (!fs.existsSync(path.dirname(filepath))) {
            fs.mkdirSync(path.dirname(filepath), { recursive: true }); // ✅ ensure "data" folder exists
        }

        if (!fs.existsSync(filepath)) {
            fs.writeFileSync(filepath, JSON.stringify([]), 'utf-8'); // ✅ create file
        }
    } catch (error) {
        console.error("Error ensuring tasks file exists:", error);
    }
};

export const readTask = () => {
    try {
        ensureFileExists();
        const data = fs.readFileSync(filepath, 'utf-8');
        return JSON.parse(data || '[]');
    } catch (error) {
        console.error("Error reading tasks:", error);
        return [];
    }
};

export const writeTask = (task) => {
    try {
        fs.writeFileSync(filepath, JSON.stringify(task, null, 2), 'utf-8'); // ✅ fixed: writeFileSync
    } catch (error) {
        console.error("Error writing tasks:", error);
    }
};
