import React from 'react';

interface IProps {
  film: IFilmObject;
}

const Information = ({ film }: IProps) => (
  <section id="information">
    <h2>Information</h2>
    <p><strong>Directed by:</strong> {film.director}</p>
    <p><strong>Produced by:</strong> {film.producer}</p>
    <p><strong>Synopsis:</strong> {film.opening_crawl}</p>
  </section>
);

export default Information;
