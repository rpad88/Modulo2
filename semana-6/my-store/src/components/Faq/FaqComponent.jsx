import React, { useRef, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import "./faqComponent.css"
import QuestionComponent from './Question/QuestionComponent'

export default function FaqComponent() {

  const [questionList, setQuestionList] = useState([
    {
      titulo: "Lorem ipsum dolor sit.",
      descricao: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, dolorum!"
    },
    {
      titulo: "Lorem ipsum dolor",
      descricao: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, dolorum!"
    },
    {
      titulo: "Lorem ipsum",
      descricao: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, dolorum!"
    },
    {
      titulo: "Lorem ipsum dolor sit amet.",
      descricao: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, dolorum!"
    },
  ])

  const [filter, setFilter] = useState(questionList)
  const findRef = useRef()

  function find() {
    const question = findRef.current.value
    const filtered = questionList.filter((q) => q.titulo.includes(question))
    setFilter(filtered)
  }

  return (
    <section className="container m-5">
      <div className="input-group gap-1 mb-3">
        <input
          type="text"
          placeholder="Descreva brevemente sua dúvida"
          name="searchFaq"
          id="searchFaq"
          className="form-control p-2 focus-ring focus-ring-warning"
          ref={findRef}
          onBlur={() => setFilter(questionList)}
        />
        <button className="btn btn-warning text-white" onClick={find}>
          <SearchIcon className="icon" />
        </button>
      </div>

      {filter.map((question) => {
        return (
          <QuestionComponent
            titulo={question.titulo}
            descricao={question.descricao}
          />
        )
      })}
    </section>
  );
}
