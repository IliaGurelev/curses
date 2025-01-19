export function filterByTopic(courses, topic) {
  if (topic === '') {
    return courses;
  }

  return courses.filter((course) => course.topics === topic)
}

export function filterByDifficulty(courses, difficulty) {
  if (difficulty === 0) {
    return courses;
  }

  return courses.filter((course) => course.difficulty === difficulty)
}
