import React from 'react'

export default function QuestionComponent({titulo, descricao}) {


  return (
    <div className="card mb-2">
      <details className="p-2">
        <summary className="border-bottom mb-2 p-2">
          {titulo}
        </summary>
        <p className="text-secondary">
          {descricao}
        </p>
      </details>
    </div>
  )
}
