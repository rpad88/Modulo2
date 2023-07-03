import React from 'react'

export default function FaqQuestionComponent() {

    const questionArray = []

  return (
    <div className="card mb-2">
      <details className="p-2">
        <summary className="border-bottom mb-2 p-2">
          1. Lorem, ipsum dolor.
        </summary>
        <p className="text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo odit
          neque voluptas et itaque accusamus hic consectetur architecto maxime
          quod!
        </p>
      </details>
    </div>
  );
}
