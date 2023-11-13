const Title = ({ firstHalf, secondHalf }) => {
  return (
    <div className="section-title">
      <h2>
        {firstHalf} <span> {secondHalf} </span>
      </h2>
    </div>
  );
};
export default Title;
