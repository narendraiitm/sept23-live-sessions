const p = new Promise((res, rej) => {
  setTimeout(() => {
    res(20)
  }, 2000)
})

const p1 = new Promise((res, rej) => {
  setTimeout(() => {
    rej(30)
  }, 3000)
})

async function hello() {
  const pr = await p
  const pr1 = await p1.catch((err) => {
    console.log('Test')
  })
  console.log(pr)
  return pr
}

const h = hello()
h.catch((err) => {
  console.log('Something went wrong')
})
console.log('waiting')
