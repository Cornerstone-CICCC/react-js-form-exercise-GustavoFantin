type Props = {
   fname: string,
   lname: string,
   age: number,
   favFoods: string[]
}

const Welcome = (props: Props) => {
  return (
   <>
      <h3>Hello {props.fname} {props.lname}. You are {props.age} years old and your favorite foods are: {props.favFoods}.</h3> 
   </>
  )
}

export default Welcome