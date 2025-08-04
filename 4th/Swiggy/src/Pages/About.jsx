import UserCardClass from "../Components/UserCardClass"

const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <UserCardClass 
        name="Zeeshan Afzal Khan Class"
        phone="1234567890"
        email="zeeshan@1234"
        address="1234 Street Name, City, Country"
      />
    </div>
  );
}

export default About