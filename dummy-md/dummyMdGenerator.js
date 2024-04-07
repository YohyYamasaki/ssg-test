const fs = require("fs");
const path = require("path");
const {LoremIpsum} = require("lorem-ipsum");

// Define the categories
const categories = ["category1", "category2", "category3", "category4", "category5"];

// Delete all files in dummy-posts
const dir = "dummy-posts";
fs.readdirSync(dir).forEach(file => {
    fs.unlinkSync(path.join(dir, file));
});

// Prepare dummy texts
const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 8,
        min: 4
    },
    wordsPerSentence: {
        max: 16,
        min: 4
    }
});

// Create 1000 markdown files
for (let i = 1; i <= 1000; i++) {
    // Choose a random category for each file
    const category = categories[Math.floor(Math.random() * categories.length)];

    // Generate dummy text
    const text = lorem.generateParagraphs(5);

    // Define the frontmatter
    const frontmatter = `---
title: "title${i}"
slug: "title_${i}"
date: "2024-04-07"
category: "${category}"
---

`;

    fs.writeFileSync(`dummy-posts/title_${i}.md`, frontmatter + `# Title ${i}\n` + text + "\n");
}

console.log("1000 markdown files have been created.");
