import React, {useState, useCallback} from 'react'

function CallBack() {

  const[age, setAge] = useState(23)
  const[salary, setSalary] = useState(4500000)

  const incrementAge = useCallback(() => {
    setAge(age + 5)
  }, [age])
  const incrementSalary = useCallback(() => {
    setSalary(salary + 40000)
  }, [salary])

  return (
    <div>
      <p>person's age {age}</p>
      <button onClick={incrementAge}>Age</button>
      <p>person's salary {salary}</p>
      <button onClick={incrementSalary}>Salary</button>
    </div>
  )
}

export default CallBack
