import React from 'react';
import './CowsayOutput.css';

const CowsayOutput = ({ message }) => {
    const text = message || 'Moo!';
    const maxWidth = 40;

    // Word wrap the text
    const words = text.split(' ');
    const lines = [];
    let currentLine = '';

    words.forEach(word => {
        if ((currentLine + ' ' + word).trim().length <= maxWidth) {
            currentLine = (currentLine + ' ' + word).trim();
        } else {
            if (currentLine) lines.push(currentLine);
            currentLine = word;
        }
    });
    if (currentLine) lines.push(currentLine);

    const bubbleWidth = Math.max(...lines.map(l => l.length), 4);
    const topBorder = ' ' + '_'.repeat(bubbleWidth + 2);
    const bottomBorder = ' ' + '-'.repeat(bubbleWidth + 2);

    const paddedLines = lines.map((line, i) => {
        const padded = line.padEnd(bubbleWidth);
        if (lines.length === 1) {
            return `< ${padded} >`;
        } else if (i === 0) {
            return `/ ${padded} \\`;
        } else if (i === lines.length - 1) {
            return `\\ ${padded} /`;
        } else {
            return `| ${padded} |`;
        }
    });

    const cow = `        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`;

    const output = [
        topBorder,
        ...paddedLines,
        bottomBorder,
        cow
    ].join('\n');

    return (
        <pre className="cowsay-output">
            {output}
        </pre>
    );
};

export default CowsayOutput;
