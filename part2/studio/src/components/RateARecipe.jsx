let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];

function RateARecipe(props) {
  // console.log(props)
  // GiveRating(props.rating);
  // console.log(props.rating)
  return GiveRating(props);
}
function GiveRating(props) {
  return props.rating <=5 && props.rating >=1 ? 
     <h3>{stars[props.rating - 1]}</h3> : null
  // if (props.rating <=5 && props.rating >=1) {
  //   console.log("hi")
  //   return <h3>{stars[props.rating - 1]}</h3>;
  // } else {
  //   return null
  // }
}
export default RateARecipe;

//conditional to render stars based on a number provided in App.js 
