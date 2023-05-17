function getValues() {
    return {
        empresa: document.formulario.empresa.value,
        cnpj: document.formulario.cnpj.value,
        responsavel: document.formulario.responsavel.value,
        email: document.formulario.email.value,
        telefone: document.formulario.telefone.value,
        password: document.formulario.password.value,
        confirmaSenha: document.formulario.confirm.value
    }
}


form.addEventListener('submit', (e) => {
    e.preventDefault()    
    const cadastro = getValues()

    console.log("dados para cadastro: ",cadastro)
})


