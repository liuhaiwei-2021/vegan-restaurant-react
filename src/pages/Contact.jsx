import Adress from "../components/contact/Adress";
import Location from "../components/contact/Location";
import Opening from "../components/contact/Opening";
import Owner from "../components/contact/Owner";
import Reservation from "../components/contact/Reservation";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact container">
      <Owner />
      <Opening />
      <Reservation />
      <Adress />
      <Location />
    </div>
  );
}

export default Contact;
