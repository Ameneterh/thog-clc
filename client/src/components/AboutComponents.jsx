function TeamMembers(props) {
  return (
    <div className="w-full md:w-[24%] h-[300px] border rounded-xl bg-slate-400 dark:bg-slate-800 shadow-xl flex flex-col items-center gap-4 p-4">
      <img
        src={props.avatar}
        alt={props.memberName}
        className="w-36 h-36 rounded-full border border-white shadow-md"
      />
      <h2 className="font-bold text-xl">{props.memberName}</h2>
      <p>{props.memberPosition}</p>
      <div className="social-connect"></div>
    </div>
  );
}

export default TeamMembers;
