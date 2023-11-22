// const user = {
//   name: 'Narendra',
//   job: 'Teaching',
// }

// const res = fetch('https://reqres.in/api/users/204')

// res
//   .then((res) => {
//     if (res.ok) {
//       return res.json()
//     } else {
//       throw new Error(res.status)
//     }
//   })
//   .then((data) => {
//     console.log(data)
//   })
//   .catch((err) => {
//     console.log(err)
//   })

async function makeRequest() {
  const res = await fetch('https://reqres.in/api/users/2')
  const data = await res.json()
  console.log(data)
}

makeRequest()
