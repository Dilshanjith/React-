 function App() {
  const a=10;
  const firstname="Dilshan";
  const middlename="samarasinghe";
  const surname="k.s";
  const age="30";
  const country="sri lanka";
  const arr=["Apple","Grapes","ornages"];
  const language=<ul>
  <li>Html</li>
  <li>css</li>
  <li>JS</li>
  <li>React</li>
</ul>

const pobj={
  fname:"samith",
  age:"40"
}


  const getFullName =(f,m,s) =>{
    return `${f} ${m} ${s}`;
  }
  return (
    <>
      <div className="cont">
        <h1 className="h">React Rocks</h1>
        <p>Full name :{firstname}{middlename}{surname}</p>
        <p>Full Name : function:{getFullName("kumara ","gayan ","jones ")}</p>
        <p>Age :{pobj.age} </p>
        <p>Country : {country}</p>
        <p>{firstname} like to {arr[0]}</p>
        <p>Frontend language</p>
        {language}
        
        
      </div> 
    </>
  )
}

export default App
