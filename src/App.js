import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { render } from 'react-dom';

function Book(props) {
  return (
    <div className="container">
      <div className="book-item">
        <p>Название книги:</p>
        <span>{props.title}</span>
      </div>
      <div className="book-item">
        <p>Автор:</p>
        <span>{props.author}</span>
      </div>
      <div className="book-item">
        <p>Жанр:</p>
        <span>{props.genre}</span>
      </div>
      <div className="book-item">
        <p>К-ство страниц:</p>
        <span>{props.pages}</span>
      </div>
      <div className="book-item">
        <p>Рецензии:</p>
        <div className="reviews">{props.reviews}</div>
      </div>
    </div>
  );
}


function App() {
  let books = {
    qTitle: "Исток",
    qAuthor: "Ден Браун",
    qGenre: "детектив",
    qPages: "577",
    qReviews: ["Сюжет Браун завернул, как всегда, изысканно! Интрига сохранялась чуть ли не до последних страниц.",
      "Удачно вплетённые в сюжет экскурсы в живопись, архитектуру, историю.", "На сегодняшний день «Исток» - это последняя книга о профессоре Лэнгдоне."
    ]
  };

  let { qTitle, qAuthor, qGenre, qPages, qReviews } = books;

  return (
    <div className="App">
      <h1>Любимая книга</h1>

      <Book title={qTitle} author={qAuthor} genre={qGenre} pages={qPages} reviews={qReviews.map(review => (<p>{review}</p>))} />


    </div>
  )
}

export default App;
