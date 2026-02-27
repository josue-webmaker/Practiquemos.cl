export type { Question } from './questionsData';
export { categorias, licenseTypes } from './questionsData';
export { temarioChapters } from './temarioData';

import { questionsBank } from './questionsData';
import { questionsPart2 } from './questions-part2';
import { questionsPart3 } from './questions-part3';
import { questionsPart4 } from './questions-part4';
import { questionsPart5 } from './questions-part5';
import { questionsPart6 } from './questions-part6';
import { questionsPart7 } from './questions-part7';
import { questionsA2 } from './questions-a2';
import { questionsA4 } from './questions-a4';
import { questionsClaseC } from './questions-c';
import { questionsClaseD } from './questions-d';
import { questionsClaseE } from './questions-e';
import type { Question } from './questionsData';

const allQuestions: Question[] = [
  ...questionsBank,
  ...questionsPart2,
  ...questionsPart3,
  ...questionsPart4,
  ...questionsPart5,
  ...questionsPart6,
  ...questionsPart7,
  ...questionsA2,
  ...questionsA4,
  ...questionsClaseC,
  ...questionsClaseD,
  ...questionsClaseE,
];

export const mockQuestions = allQuestions;

export const EXAM_CONFIG = {
  questionsPerExam: 35,
  passingScore: 0.7,
  timeLimit: 45 * 60,
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function getQuestionsByLicense(licenseType: string): Question[] {
  return allQuestions.filter(q => q.licenseTypes.includes(licenseType));
}

export function getRandomExam(count: number, licenseType: string): Question[] {
  const filtered = getQuestionsByLicense(licenseType);
  return shuffle(filtered).slice(0, count);
}

export function getEasyExam(count: number, licenseType: string): Question[] {
  const filtered = getQuestionsByLicense(licenseType).filter(q => q.dificultad === 'facil');
  return shuffle(filtered).slice(0, count);
}

export function getHardExam(count: number, licenseType: string): Question[] {
  const filtered = getQuestionsByLicense(licenseType).filter(q => q.dificultad === 'dificil' || q.dificultad === 'media');
  return shuffle(filtered).slice(0, count);
}

export function getCategoryExam(category: string, licenseType: string): Question[] {
  const filtered = getQuestionsByLicense(licenseType).filter(q => q.categoria === category);
  return shuffle(filtered).slice(0, Math.min(filtered.length, EXAM_CONFIG.questionsPerExam));
}
