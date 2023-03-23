export function valida(input) {
  const tipoDeInput = input.dataset.tipo

  if (validadores[tipoDeInput]) {
    validadores[tipoDeInput](input)
  }
}

const validadores = {
  dataNascimento: input => validaDataNascimento(input)
}

dataNascimento.addEventListener('blur', evento => {
  validaDataNascimento(evento.target)
})

function validaDataNascimento(input) {
  const dataRecebida = new Date(input.value)
  let mensagem = ''
  maiorQue18(dataRecebida)

  if (!maiorQue18(dataRecebida)) {
    mensagem = 'Você deve ser maior de idade para se cadastar.'
  }
  input.setCustomValidity(mensagem)
}

function maiorQue18(data) {
  const dataAtual = new Date()
  const dataMais18 = new Date(
    data.getUTCFullYear() + 18,
    data.getUTCMonth(),
    data.getUTCDate()
  )

  return dataMais18 <= dataAtual
}
