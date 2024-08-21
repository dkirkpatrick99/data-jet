interface ISplashTagLine {
  headText?: string,
  subText?: string,
};

function SplashTagLine({ headText, subText }: ISplashTagLine) {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-extrabold mb-2">{headText}</h2>
      <p className="text-lg font-medium">{subText}</p>
    </div>
  )
};

export default SplashTagLine;