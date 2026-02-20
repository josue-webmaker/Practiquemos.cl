export type { Question } from './questionsData';
export { categorias, licenseTypes } from './questionsData';
export { questionsBank as mockQuestions } from './questionsData';
export { temarioChapters } from './temarioData';

import { questionsBank } from './questionsData';
import type { Question } from './questionsData';

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
  return questionsBank.filter(q => q.licenseTypes.includes(licenseType));
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
