import Score from "./Score";

const Students = (props) => {
  return (
    <div>
      {props.students.map(student => 
      <div>
        <h2>Name: {student.name}</h2> 
        <h3>Bio: {student.bio}</h3>
          {student.scores.map(score => 
          <Score score={score} />
            )}
      </div>   
        )}        
    </div>
  );
}
 
export default Students;