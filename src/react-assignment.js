const compo1 = () => {
    const name = "Hello World";
    return (
      <div>
        <h1>{name}</h1>
      </div>
    );
  };
  <hr />;
  const compo2 = () => {
    const obj = { name: "Hello World Object" };
  
    return (
      <div>
        <h2>{obj.name}</h2>
      </div>
    );
  };
  const compo3 = () => {
    const data = ["We", "are", "United"];
  
    return (
      <div>
        {data.map((term, i) => {
          return (
            <div key={i}>
              <h3>{term}</h3>
            </div>
          );
        })}
      </div>
    );
  };
  const compo4 = () => {
    const list = [
      { name: "Hello World 1" },
      { name: "Hello World 2" },
      { name: "Hello World 3" },
    ]; //Show these in seperate tags
    return (
      <div>
        {list.map((line, i) => {
          return (
            <div key={i}>
              <h4>{line.name}</h4>
            </div>
          );
        })}
      </div>
    );
  };
  const compo5 = () => {
    const complex = [
      { company: "XYZ", jobs: ["Javascript,", "React"] },
      { company: "ABC", jobs: ["AngularJs", "Ionic"] },
    ];
    return (
      <div>
        {complex.map((term, i) => {
          return (
            <div key={i}>
              <h3>
                company: {term.company} , jobs: {term.jobs}
              </h3>
            </div>
          );
        })}
      </div>
    );
  };
  
  export { compo1, compo2, compo3, compo4,compo5 };
  