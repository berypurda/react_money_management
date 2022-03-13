import { useState } from 'react'

import styles from './SignUp.module.css'

export default function SignUp() {
  const [email, setEmail] = useState('')
  const [DisplayName, setDisplayName] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email, DisplayName, password)
  }

  return (
    <form onSubmit={handleSubmit} className={styles['signup-form']}>
      <h2>SignUp</h2>
      <label>
        <span>email:</span>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>DisplayName:</span>
        <input
          type="text"
          onChange={(e) => setDisplayName(e.target.value)}
          value={DisplayName}
        />
      </label>
      <label>
        <span>password:</span>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      <button className="btn">SignUp</button>
    </form>
  )
}
