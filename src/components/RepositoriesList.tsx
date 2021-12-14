import {useState} from 'react';
import { useActions } from '../hooks/useActions';
import { useSelector } from '../hooks/useSelector';
const RepositoriesList:React.FC =()=>{

  const [term,setTerm] = useState("")
  const {searchRepositories,testAction} = useActions();
  const {error,loading,data} = useSelector(state => state.repositories)
  const test = useSelector(state => state.test)
  console.log(test,"kkkkk");
  const submit  =(event:React.FormEvent<HTMLFormElement>)=>{
      event.preventDefault();
       testAction(true)
      searchRepositories(term);
  }
  return(
    <div>
        <p>{test?"yes":"no"}</p>
        <form onSubmit={submit}>
             <input  value={term} onChange={e=>setTerm(e.target.value)}/>
             <button>Search</button>
        </form>
        <h3>{error}</h3>
        {loading&&<h3>Loading</h3>}
        <ul>
              {!error && !loading && data.map((item,index)=>{
          return(
              <li key={index}>{item}</li>
          )
        })}
        </ul>
    
    </div>
  )
}

export default RepositoriesList;