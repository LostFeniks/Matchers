import sortHeroesByHealth from './index';

test('should sort heroes by health in descending order', () => {
  const input = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  const result = sortHeroesByHealth(input);

  // Проверяем через toEqual (глубокое сравнение объектов)
  expect(result).toEqual(expected);
});

// Дополнительный тест для проверки иммутабельности или других случаев
test('should handle empty array', () => {
  expect(sortHeroesByHealth([])).toEqual([]);
});

test('should handle array with one hero', () => {
  const input = [{ name: 'лучник', health: 80 }];
  expect(sortHeroesByHealth(input)).toEqual(input);
});

test('should handle heroes with equal health', () => {
  const input = [
    { name: 'воин', health: 50 },
    { name: 'целитель', health: 50 },
  ];
  // Порядок при равном здоровье не определён, но функция должна отработать без ошибок
  const result = sortHeroesByHealth(input);
  expect(result).toHaveLength(2);
  expect(result[0].health).toBe(50);
  expect(result[1].health).toBe(50);
});