const MyIdentity = ({ name, npm, link }) => {
  return (
    <div>
      <ul>
        <li>Nama Lengkap : {name}</li>
        <li>NPM : {npm}</li>
        <li>
          <a href={link}>My Github</a>
        </li>
      </ul>
    </div>
  );
};
export default MyIdentity;
