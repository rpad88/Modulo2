import { React, useRef, useState } from 'react'
import './App.css'
import Form from './assets/components/Form'
import Header from './assets/components/Header'
import Card from './assets/components/Card'

function App() {
  const [userList, setUserList] = useState([
    {
      nickname: "teste",
      age: 23,
      email: "teste@teste",
      senha: "123",
      likes: 0
    },
  ])
  const [filter, setFilter] = useState(userList)
  const userFindRef = useRef()

  function userEdit(id) {
    const userForEdit = userList.map((user) => user.nickname === id)
    console.log(userForEdit)
  }

  function handleFilter(e) {
    // console.log(e.target.value)
    const nickname = userFindRef.current.value
    const filtered = userList.filter((user) => user.nickname.includes(nickname))
    setFilter(filtered)
    console.log(userList)
  } 

  return (
		<div className="app bg-dark">
			<Header />
			<div className="container text-bg-dark">
				<h1 className="text-center">Hello World</h1>
				<Form userList={userList} setUserList={setUserList} />
				<input
					type="text"
					placeholder="🔍 type to find..."
					className="mt-3 form-control"
					ref={userFindRef}
          onChange={handleFilter}
				/>
				<ul className="mt-4 row row-cols-3 gap-0 row-gap-2 p-4">
					{filter.map((user) => {
						return (
							<Card
								user={user}
								userList={userList}
								setUserList={setUserList}
								userEdit={userEdit}
							/>
						);
					})}
				</ul>
			</div>
		</div>
  );
}

export default App
