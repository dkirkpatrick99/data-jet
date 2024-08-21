interface btn 
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string,
  btnStyle?: string,
  action?: () => void
};

function ActionButton(props: btn) {
  const { text, btnStyle, action, children, ...restProps } = props;
  
  return (
    <>
      <button {...restProps} onClick={props.action} className={`bg-[#ffa000] text-lg font-bold px-8 py-4 rounded-full flex items-center justify-center ${props.btnStyle}`}>
        {props.text}
        {props.children}
      </button>
    </>
  )
};

export default ActionButton;