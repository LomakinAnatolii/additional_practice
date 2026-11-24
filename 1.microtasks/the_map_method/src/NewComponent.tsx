type NewComponentType = {
  cars: carType[]
}

type carType = {
  manufacturer: string,
  model: string
}

export const NewComponent = (props: NewComponentType) => {
 
  return (
    <table>
      <tbody>
        <tr>
          {props.cars.map((objectFromCarsArray, index) => {
            let key = index + 1;
            return (
                <th key={key}>{objectFromCarsArray.manufacturer}</th>
            )
          })}
          
        </tr>
        <tr>
          {props.cars.map((objectFromCarsArray, index) => {
            let key = index + 1;
            return (
                <td key={key}>{objectFromCarsArray.model}</td>
            )
          })}
        </tr>
      </tbody>
    </table>
  )
}