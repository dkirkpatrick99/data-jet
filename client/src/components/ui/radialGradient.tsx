function RadialGradient(props: any) {
  return (
    <div style={{ backgroundImage: "radial-gradient( #0a2740, #010E19 73%)" }}>
      {props.children}
    </div>
  )
}

export default RadialGradient;
