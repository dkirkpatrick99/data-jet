interface btn
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  btnStyle?: string,
  action?: () => void
};

function SmallRoundButton(props: btn) {

  return (
    <>
      <button onClick={props.action} className={`bg-white p-1 rounded-full flex items-center justify-center ${props.btnStyle}`}>
        {props.children}
      </button>
    </>
  )
};

export default SmallRoundButton;