import React, { useEffect, useRef, useState } from 'react'
import "./faqComponent.css"
import QuestionComponent from './Question/QuestionComponent'
import SearchFaqComponent from './SearchFaq/SearchFaqComponent'

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

  const [inputFindFaq, setInputFindFaq] = useState('')
  const [filter, setFilter] = useState(questionList)

  useEffect(() => {
    const filtered = questionList.filter((q) => q.titulo.includes(inputFindFaq))
    setFilter(filtered)
  },[inputFindFaq])

  return (
    <section className="container m-5">

        {/* Envio o setInputFindFaq para o filho setar o findFaq no pai */}
        <SearchFaqComponent setInputFindFaq={setInputFindFaq}/>

      {filter.map((question) => {
        return (
          <QuestionComponent>{question}</QuestionComponent>
        )
      })}
    </section>
  );
}
