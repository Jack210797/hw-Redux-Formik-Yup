import 'bootstrap/dist/css/bootstrap.min.css'
import LoginForm from './components/LoginForm'

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <h1 className="my-5">React Bootstrap Form</h1>
          <LoginForm />
        </div>
      </div>
    </div>
  )
}

export default App
