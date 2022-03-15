

const Score = (props) => {
  return (
    <>
      <h4>Score: {props.score.score}</h4>
      <h4>Date: {props.score.date}</h4>
    </>
  );
}
 
export default Score;