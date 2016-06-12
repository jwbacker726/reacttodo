
// this is called an "Action creator"
// (a conveniance function)
export function createCourse(course) {
  // NOTE: Because we're using ES6 we don't have to do things
  // like this anymore (because the right side is the same as the left)
  // return { type: 'CREATE_COURSE', course: course };
  // This is an ES6 feature called "short-hand property names"
  return { type: 'CREATE_COURSE', course };
}
