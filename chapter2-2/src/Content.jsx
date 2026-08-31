
const Content = (props) => {
  return(
    <>
        <h2 id = {props.id}>{props.title}</h2>
        <p>{props.description}</p>
        <div>{props.children}</div>
    </>
  )
}

export default Content;