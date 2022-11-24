import { Person } from 'types/product.types';

export const isMatchKeyword = (target: string, keyword: string) => {
  return target.includes(keyword);
};

export const isMatchName = (names: Person[], keyword: string) => {
  return names.filter(person => isMatchKeyword(person.name, keyword)).length;
};

export const isMatchOptions = (target: string, category: string[]) => {
  return category.filter(option => isMatchKeyword(target, option)).length;
};
