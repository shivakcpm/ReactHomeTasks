import React, { Component } from 'react';
import { Formik } from 'formik';
import { GENRE } from '../../consts/constants';
import { DEFAULT_MOVIE } from '../../consts/movie';
import './AddMovie.css';

export default class AddMovieComponent extends Component {
  isDataValid(values) {
    const { title, release_date, poster_path, genres, overview, runtime } = values;
    const errors = {};
    if (this.isEmptyField(title)) {
      errors.title = 'Title is required';
    }
    if (this.isEmptyField(poster_path)) {
      errors.poster_path = 'MovieURL is required';
    }
    if (this.isEmptyField(overview)) {
      errors.overview = 'Overview is required';
    }
    if (!genres || genres.length === 0) {
      errors.genres = 'Genre is required';
    }
    if (!release_date) {
      errors.release_date = 'Release Date is required';
    } else if (new Date() < new Date(release_date)) {
      errors.release_date = 'Release Date should not exceed current date';
    }
    if (!runtime) {
      errors.runtime = 'Runtime  is required';
    }

    return errors;
  }

  isEmptyField(value) {
    return !value || !value.trim();
  }

  render() {
    const { editMode, onSubmit } = this.props;
    const movie = this.props.movie || DEFAULT_MOVIE;

    const  validator = (values) => {
      return this.isDataValid(values);
    };

    const submitHandler = (values, { setSubmitting }) => {
      values.runtime = Number(values.runtime);
      onSubmit(values);
      setSubmitting(false);
    };

    return (
      <Formik
        initialValues={movie}
        validate={validator}
        onSubmit={submitHandler}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, handleReset, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <div className="addmovie-header">
              {
                editMode
                  ? 'Edit Movie'
                  : 'Add Movie'
              }
            </div>
            {editMode && (
              <>
                <label className="input-label">Movie Id</label>
                <div className="movie-id">{values.id}</div>
              </>
            )}
            <div>
              <label className="input-label" htmlFor="title">
                Title
              </label>
              <input
                className="input-field"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Movie Title here"
                type="text"
                id="title"
                name="title"
                value={values.title}
              />
              {touched.title && errors.title && <div className="showErrors">{errors.title}</div>}
            </div>
            <div>
              <label className="input-label" htmlFor="release_date">
                Release Date
              </label>
              <input
                className="input-field"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Select Date"
                type="date"
                id="release_date"
                value={values.release_date}
                name="release_date"
              />
              {touched.release_date && errors.release_date && <div className="showErrors">{errors.release_date}</div>}
            </div>
            <div>
              <label className="input-label" htmlFor="poster_path">
                Movie URL
              </label>
              <input
                className="input-field"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Movie URL here"
                type="text"
                value={values.poster_path}
                name="poster_path"
                id="poster_path"
              />
              {errors.poster_path && <div className="showErrors">{errors.poster_path}</div>}
            </div>
            <div>
              <label className="input-label" htmlFor="genres">
                Genre
              </label>
              <select
                className="input-field"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.genres}
                multiple
                id="genres"
                name="genres"
              >
                <option value="">Select Genre</option>
                {GENRE.map((item, index) => {
                  return (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
              {touched.genres && errors.genres && <div className="showErrors">{errors.genres}</div>}
            </div>
            <div>
              <label className="input-label" htmlFor="overview">
                Overview
              </label>
              <input
                className="input-field"
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                value={values.overview}
                placeholder="Overview here"
                name="overview"
                id="overview"
              />
              {touched.overview && errors.overview && <div className="showErrors">{errors.overview}</div>}
            </div>
            <div>
              <label className="input-label" htmlFor="runtime">
                RunTime
              </label>
              <input
                className="input-field"
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                value={values.runtime}
                id="runtime"
                placeholder="Runtime here"
                name="runtime"
              />
              {touched.runtime && errors.runtime && <div className="showErrors">{errors.runtime}</div>}
            </div>
            <div className="buttons-wrapper">
              <button className="button-reset" onClick={handleReset}>
                RESET
              </button>
              <button
                disabled={Object.keys(errors).length > 0 || isSubmitting}
                className="button-submit"
                onClick={handleSubmit}
              >
                {
                  editMode
                    ? 'SAVE'
                    : 'SUBMIT'
                }
              </button>
            </div>
          </form>
        )}
      </Formik>
    );
  }
}
