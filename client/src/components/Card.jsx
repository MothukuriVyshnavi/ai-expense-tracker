function Card({ title, amount, bgColor }) {
  return (
    <div
      className={`${bgColor} text-white rounded-xl shadow-lg p-6 hover:scale-105 transition-transform duration-300`}
    >
      <h2 className="text-lg font-semibold">{title}</h2>

      <p className="text-3xl font-bold mt-4">{amount}</p>
    </div>
  );
}

export default Card;