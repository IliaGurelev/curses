export function existsCourse(courses, course) {
  return courses.some(item => item.id === course.id)
}
