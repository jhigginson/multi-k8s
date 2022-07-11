import { Link } from 'react-router-dom';

const OtherPage = () => {
  return (
    <div className="text-center">
      <h3 className="mt-6 text-2xl">I'm some other page!</h3>
      <Link className="text-slate-100 bg-pink-400 pt-2 pb-3 px-10 inline-block mt-10 rounded-full" to="/">Go back home</Link>
    </div>
  );
};

export default OtherPage;