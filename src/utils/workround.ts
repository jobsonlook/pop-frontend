const timeout = (t: any) =>
  new Promise((res) => {
    setTimeout(() => {
      res(t)
    }, t)
  })

const retry = (times: any) => (promiseThunk: any) =>
  promiseThunk().catch((e: any) => {
    return times === 0
      ? Promise.reject(e)
      : timeout(1000).then(() => retry(times - 1)(promiseThunk))
  })

export const retry5 = retry(5)
