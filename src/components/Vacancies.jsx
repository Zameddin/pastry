import React, { useState } from 'react';
import Footer from './Footer';

const Vacancies = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filterVacancy = (vacancy) => {
    return vacancy.toLowerCase().includes(searchTerm.toLowerCase());
  };

  const vacancies = [
    {
      title: 'Cake Decorator',
      poster: 'https://www.ziprecruiter.com/svc/fotomat/public-ziprecruiter/cms/921788748CakeDecorator.jpg=ws1280x960',
      description: 'Job-type: "Full-time", A Cake Decorator is a creative and skilled professional responsible for designing, decorating, and crafting custom cakes for a variety of occasions. This role requires artistic flair, attention to detail, and a deep understanding of baking techniques . Salary: 30$ for per-week , For detailed information, you can contact number: +994 55 551 60 03',
    },
    {
      title: 'Production Team Member',
      poster: 'https://media.istockphoto.com/id/1212387212/photo/beautiful-female-pastry-chef-preparing-cake-at-home.jpg?s=612x612&w=0&k=20&c=ymmLpCJHeaBlt1SDoJmYHfmeLYg86QMAOwpY9UxfTVk=',
      description: 'From £10.50 an hour - Part-time, Full-time,     Are you enthusiastic about delivering great customer service and passionate about producing delicious products?You can apply our company. Phone number: +994 55 551 60 02',
    },
    {
      title: 'Kitchen Assistant',
      poster: 'https://www.powerhomebiz.com/wp-content/uploads/2012/01/cakedecorator.jpg',
      description: 'From 7AZN  an hour - Part-time, Full-time, Supporting production in all areas of the kitchen. Maintaining the kitchen hygiene and support with opening/closing down procedures Producing  cakes and buffet items with the guidance of the duty chef.Phone number :  +994 55 551 60 02',
    },
    {
      title: 'Cake decorator',
      poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfTbxorNayO1R2roTTKNAKswHg47siV4TFzA&usqp=CAU',
      description: 'From 10AZN an hour - Job is part-time. Maintain an atmosphere of enthusiastic customer awareness with primary emphasis on fast, friendly, and accurate customer service to create a positive shopping experience. Address: Baku,Hovsan ,+994 55 551 60 01',
    },
   
  ];

  const filteredVacancies = vacancies.filter((vacancy) => filterVacancy(vacancy.title));

  return (
    <div>
      <h2>Vacancies</h2>
      <input
        className='inputSearch'
        type="text"
        placeholder="...search"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <button >Search</button>
<div className="vacancies">
{filteredVacancies.map((vacancy, index) => (
        <div key={index} className='vacancy'>
         
          <h3>{vacancy.title}</h3>
          <img src={vacancy.poster} alt="vacan" style={{height:300}} className='description'/>
          <p className='description'>{vacancy.description}</p>
          
        </div>
      ))}
</div>
      

      <Footer />
    </div>
  );
};

export default Vacancies;