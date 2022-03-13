function Reservation() {
  return (
    <div className="reservation">
      <h3>Book Bord</h3>
      <form className="booking">
        <select class="form-select" aria-label="Default select example">
          <option value="1">Lunch</option>
          <option value="2">Dinner</option>
        </select>
        <input
          type="text"
          required
          placeholder="Choose amount of persons"
        ></input>
        <input type="text" required placeholder="Your name"></input>
        <input
          required
          type="datetime-local"
          name="partydate"
          min="2022-03-01T08:30"
          max="2022-04-30T16:30"
        />
        <input className="book-btn" type="button" value="Book" />
      </form>
    </div>
  );
}

export default Reservation;
