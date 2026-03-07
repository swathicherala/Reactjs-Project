const Pet = () => {
    const pets = [
    {
      name: "Dolly",
      description: "Doll is funny and loves to be around",
      skills: ["fetch","roll over","bark"],
      image:"https://res.cloudinary.com/dsrdpxrjh/image/upload/v1772878864/dog2_dugafj.jpg"
    },
    {
      name: "Moll",
      description: "Moll is funny and loves to be around",
      skills: ["cuddle","roll over","bark"],
      image:"https://res.cloudinary.com/dsrdpxrjh/image/upload/v1772878864/dog1_akall2.jpg"
    },
    {
      name: "Dolly",
      description: "Doll is funny and loves to be around",
      skills: ["fetch","roll over","bark"],
      image:"https://res.cloudinary.com/dsrdpxrjh/image/upload/v1772878864/dog2_dugafj.jpg"
    },
  ]
  return (
    <div>
      <h1>My Pets</h1>
      <ul className="container">
        {
          pets.map((pet,index)=>(
            <li key={index}>
              <h1>{pet.name}</h1>
              <p>{pet.description}</p>
              <img src={pet.image} alt={pet.name} width="200px" height="100px"/>
              <ul className="skills">
                {
                  pet.skills.map((skill,index)=>(
                    <li key={skill}>{skill}</li>
                  ))
                }
              </ul>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default Pet