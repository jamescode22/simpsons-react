import { useSelector } from "react-redux";
import { selectSimpsons } from "../utils/simpsonsSlice";
import { makeUniqueCharacterList } from "../utils/makeUniqueCharacterList";
import { Link } from "react-router-dom";

const Links = () => {
  const simpsons = useSelector(selectSimpsons);
  const characters = makeUniqueCharacterList(simpsons);

  return (
    <ul>
      {characters.map((char, i) => {
        let { shortname, name } = char;
        const path = "/" + shortname;
        return (
          <li key={i}>
            <Link to={path}>{name}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Links;
