import React, {PropTypes} from 'react';

class CoursesPage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      course: { title: "" }
    };

    // "Bind" these functions so that their "this" is correct
    // DO NOT bind where the change is wired up
    // (onChange={this.onTitleChange.bind(this)})
    // because this causes a new function to be created on each render
    // which is a performance issue
    // ALWAYS bind in the constructor
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course: course});
  }

  onClickSave() {
    alert(`Saving ${this.state.course.title}`);
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
        <h2>Add Course</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title} />

          <input
            type="submit"
            value="Save"
            onClick={this.onClickSave} />

      </div>
    );
  }
}

export default CoursesPage;
