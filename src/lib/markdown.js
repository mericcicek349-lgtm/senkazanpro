import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const guidesDirectory = path.join(process.cwd(), 'src/content/guides');
const reviewsDirectory = path.join(process.cwd(), 'src/content/reviews');

// ===== GUIDES =====

export function getSortedGuidesData() {
  if (!fs.existsSync(guidesDirectory)) return [];
  
  // We assume guides are in category folders like: src/content/guides/slotlar/rtp-nedir.md
  const categories = fs.readdirSync(guidesDirectory);
  let allGuidesData = [];

  categories.forEach(category => {
    const categoryPath = path.join(guidesDirectory, category);
    if (!fs.statSync(categoryPath).isDirectory()) return;

    const fileNames = fs.readdirSync(categoryPath);
    const categoryGuides = fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(fileName => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(categoryPath, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);

        return {
          slug,
          category,
          ...matterResult.data
        };
      });
      
    allGuidesData = allGuidesData.concat(categoryGuides);
  });

  return allGuidesData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllGuideSlugs() {
  if (!fs.existsSync(guidesDirectory)) return [];
  
  let paths = [];
  const categories = fs.readdirSync(guidesDirectory);

  categories.forEach(category => {
    const categoryPath = path.join(guidesDirectory, category);
    if (!fs.statSync(categoryPath).isDirectory()) return;

    const fileNames = fs.readdirSync(categoryPath);
    fileNames.filter(fileName => fileName.endsWith('.md')).forEach(fileName => {
      paths.push({
        params: {
          category: category,
          slug: fileName.replace(/\.md$/, '')
        }
      });
    });
  });

  return paths;
}

export async function getGuideData(category, slug) {
  const fullPath = path.join(guidesDirectory, category, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    category,
    contentHtml,
    ...matterResult.data
  };
}

// ===== REVIEWS =====

export function getSortedReviewsData() {
  if (!fs.existsSync(reviewsDirectory)) return [];
  
  const fileNames = fs.readdirSync(reviewsDirectory);
  const allReviewsData = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(reviewsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);

      return {
        slug,
        ...matterResult.data
      };
    });

  return allReviewsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllReviewSlugs() {
  if (!fs.existsSync(reviewsDirectory)) return [];
  
  const fileNames = fs.readdirSync(reviewsDirectory);
  return fileNames.filter(fileName => fileName.endsWith('.md')).map(fileName => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, '')
      }
    };
  });
}

export async function getReviewData(slug) {
  const fullPath = path.join(reviewsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    ...matterResult.data
  };
}
