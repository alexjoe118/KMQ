import Header from './components/Header'
import TestingArea from './components/TestingArea'
import Landing from './components/Landing'
export default function App() {
  

  return (
    <div className='App'>
      <Header />
      <Landing />
      <TestingArea />
      {/* <TestingArea></TestingArea> */}
      {/* {isLoggedIn ? <LoggedInText /> : <LoggedOutText />} */}
    </div>
  )
}

// const LoggedInText = () => {
//   const {account} = useAuth()

//   return <p>Hey, {account.username}! I'm happy to let you know: you are authenticated!</p>
// }

// const LoggedOutText = () => (
//   <p>Don't forget to start your backend server, then authenticate yourself.</p>
// )
