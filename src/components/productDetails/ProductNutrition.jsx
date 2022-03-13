function ProductNutrition({ product }) {
  const { nutrition } = product;
  return (
    <table className="nutrition-table">
      <thead>
        <tr>
          <th colSpan="2">The Nutrition Facts Table</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Nutrition</td>
          <td>Values</td>
        </tr>

        {nutrition.map((item, index) => (
          <tr key={index}>
            <td>{item.label}</td>
            <td>{item.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ProductNutrition;
